# Linked List Implementation in JavaScript

This repository contains an implementation of a singly linked list in JavaScript. The linked list supports various operations such as appending, prepending, inserting, removing, and searching nodes.

The files use ES Module syntax, therefore uses the `.mjs` file extension.

## Classes

### LinkedList

- **`append(value)`**: Adds a new node containing `value` to the end of the list.
- **`prepend(value)`**: Adds a new node containing `value` to the start of the list.
- **`getSize()`**: Returns the total number of nodes in the list.
- **`getHead()`**: Returns the first node in the list.
- **`getTail()`**: Returns the last node in the list.
- **`at(index)`**: Returns the node at the given `index`.
- **`pop()`**: Removes the last element from the list.
- **`contains(value)`**: Returns `true` if the list contains a node with the given `value`, else returns `false`.
- **`find(value)`**: Returns the index of the node containing `value`, or `null` if not found.
- **`insertAt(value, index)`**: Inserts a new node with the provided `value` at the given `index`.
- **`removeAt(index)`**: Removes the node at the given `index`.
- **`toString()`**: Prints the linked list in the format `( value ) -> ( value ) -> ... -> null`.

### Node

- **`constructor(value = null)`**: Creates a new node with the specified `value`. The `nextNode` property is initialized to `null`.
