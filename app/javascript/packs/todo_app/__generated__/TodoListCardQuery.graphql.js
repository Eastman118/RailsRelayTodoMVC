/**
 * @flow
 * @relayHash 5c90f5da6ae7cb1a15539f716c5f7cb5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TodoListCardQueryResponse = {|
  +viewer: ?{|
    +todoList: ?{| |};
  |};
|};
*/


/*
query TodoListCardQuery(
  $count: Int!
  $cursor: String
  $filter: TodoListTodoItemsFilterEnum
) {
  viewer {
    todoList {
      ...TodoListCard_todoList
      id
    }
    id
  }
}

fragment TodoListCard_todoList on TodoList {
  ...TodoListHeader_todoList
  ...TodoListItemsWithFilter_todoList
  ...TodoListFooter_todoList
}

fragment TodoListHeader_todoList on TodoList {
  name
  ...AddTodoItemInput_todoList
}

fragment TodoListItemsWithFilter_todoList on TodoList {
  ...TodoListItems_todoList
}

fragment TodoListFooter_todoList on TodoList {
  id
  activeTodoItemsCount
  completedTodoItemsCount
}

fragment TodoListItems_todoList on TodoList {
  id
  todoItemsCount
  completedTodoItemsCount
  todoItems(first: $count, after: $cursor, filter: $filter) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        id
        ...TodoItem_todoItem
        __typename
      }
      cursor
    }
  }
}

fragment TodoItem_todoItem on TodoItem {
  id
  completed
  name
  todoList {
    id
  }
}

fragment AddTodoItemInput_todoList on TodoList {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "TodoListTodoItemsFilterEnum",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListCardQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoList",
            "name": "todoList",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "TodoListCard_todoList",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "TodoListCardQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "TodoListTodoItemsFilterEnum",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TodoListCardQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoList",
            "name": "todoList",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "todoItemsCount",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "completedTodoItemsCount",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": "TodoListTodoItemsFilterEnum"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  }
                ],
                "concreteType": "TodoItemConnection",
                "name": "todoItems",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "startCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoItemEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "TodoItem",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "completed",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "TodoList",
                            "name": "todoList",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "__typename",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": "TodoListTodoItemsFilterEnum"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "name": "todoItems",
                "key": "TodoListItems_todoItems",
                "filters": [
                  "filter"
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "activeTodoItemsCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query TodoListCardQuery(\n  $count: Int!\n  $cursor: String\n  $filter: TodoListTodoItemsFilterEnum\n) {\n  viewer {\n    todoList {\n      ...TodoListCard_todoList\n      id\n    }\n    id\n  }\n}\n\nfragment TodoListCard_todoList on TodoList {\n  ...TodoListHeader_todoList\n  ...TodoListItemsWithFilter_todoList\n  ...TodoListFooter_todoList\n}\n\nfragment TodoListHeader_todoList on TodoList {\n  name\n  ...AddTodoItemInput_todoList\n}\n\nfragment TodoListItemsWithFilter_todoList on TodoList {\n  ...TodoListItems_todoList\n}\n\nfragment TodoListFooter_todoList on TodoList {\n  id\n  activeTodoItemsCount\n  completedTodoItemsCount\n}\n\nfragment TodoListItems_todoList on TodoList {\n  id\n  todoItemsCount\n  completedTodoItemsCount\n  todoItems(first: $count, after: $cursor, filter: $filter) {\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        ...TodoItem_todoItem\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment TodoItem_todoItem on TodoItem {\n  id\n  completed\n  name\n  todoList {\n    id\n  }\n}\n\nfragment AddTodoItemInput_todoList on TodoList {\n  id\n}\n"
};

module.exports = batch;
