import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import PropTypes from 'prop-types'
import todoListTodoItemsConnectionNames from '../registrations/todoListTodoItemsConnectionNames'
import Mutation from './Mutation'

const mutation = graphql`
  mutation ClearCompletedTodoItemsMutation($input: ClearCompletedTodoItemsInput!) {
    clearCompletedTodoItems(input: $input) {
      removedTodoItems {
        id
      }
      todoList {
        id
        todoItemsCount
        completedTodoItemsCount
      }
    }
  }
`

export default class ClearCompletedTodoItemsMutation extends Mutation {
  static propTypes = {
    todoListID: PropTypes.string.isRequired,
  }

  commit = () => {
    const { environment, input } = this
    const {
      todoListID,
    } = input

    return commitMutation(
      environment,
      {
        mutation,
        variables: {
          input: {
            todoListID,
          },
        },
        updater: (store) => {
          const payload = store.getRootField('clearCompletedTodoItems')
          const todoListProxy = payload.getLinkedRecord('todoList')
          const removedTodoItemProxies = payload.getLinkedRecords('removedTodoItems')
          const removedTodoItemIDs = removedTodoItemProxies.map(p => p.getValue('id'))
          sharedUpdater(store, {
            todoListProxy,
            removedTodoItemIDs,
          })
        },
        optimisticUpdater: (store) => {
          const todoListProxy = store.get(todoListID)
          const removedTodoItemIDsSet = new Set()

          todoListTodoItemsConnectionNames.forEach((connName) => {
            const conn = ConnectionHandler.getConnection(
              todoListProxy,
              connName,
            )

            const completedTodoItemIDs = conn.getLinkedRecords('edges')
              .map(p => p.getLinkedRecord('node'))
              .filter(n => n.getValue('completed'))
              .map(n => n.getValue('id'))

            completedTodoItemIDs.forEach(id => removedTodoItemIDsSet.add(id))
          })

          sharedUpdater(store, {
            todoListProxy,
            removedTodoItemIDs: Array.from(removedTodoItemIDsSet),
          })
        },
      },
    )
  }
}

const sharedUpdater = (store, {
  todoListProxy,
  removedTodoItemIDs,
}) => {
  todoListTodoItemsConnectionNames.forEach((connName) => {
    const conn = ConnectionHandler.getConnection(
      todoListProxy,
      connName,
    )
    removedTodoItemIDs.forEach(
      removedID => ConnectionHandler.deleteNode(conn, removedID),
    )
  })
}
