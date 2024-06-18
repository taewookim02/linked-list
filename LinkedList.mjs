import { Node } from "./Node.mjs";
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**adds a new node containing value to the end of the list*/
  append(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.nextNode = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  /**adds a new node containing value to the start of the list*/
  prepend(value) {
    const newNode = new Node(value);
    // if this head is null just append;
    if (!this.head) {
      return this.append(value);
    }

    // if there is existing head,
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  /**returns the total number of nodes in the list*/
  getSize() {
    return this.size;
  }

  /**returns the first node in the list*/
  getHead() {
    return this.head;
  }

  /**returns the last node in the list*/
  getTail() {
    return this.tail;
  }

  /**returns the node at the given index*/
  at(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.nextNode;
    }
    return currNode;
  }

  /**removes the last element from the list*/
  pop() {
    if (this.size === 0) {
      throw new Error("List is empty");
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const secondLastNode = this.at(this.size - 2);
      secondLastNode.nextNode = null;
      this.tail = secondLastNode;
    }

    this.size--;
  }

  /**returns true if passed in value is in the list else returns false*/
  contains(value) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }
    return false;
  }

  /**returns the index of the node containing value, or null if not found*/
  find(value) {
    let currNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currNode.value === value) {
        return i;
      }
      currNode = currNode.nextNode;
    }
    return null;
  }

  /**inserts a new node with the provided value at the given index*/
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      if (this.size === 0) {
        this.tail = newNode;
      }
    } else {
      let prevNode = this.at(index - 1);
      let currNode = prevNode.nextNode;
      prevNode.nextNode = newNode;
      newNode.nextNode = currNode;
      if (index === this.size) {
        this.tail = newNode;
      }
    }

    this.size++;
  }

  /**Prints the linked list in the following format:
   * ( value ) -> ( value ) -> ( value ) -> null*/
  toString() {
    let string = "";
    let currNode = this.head;
    while (currNode !== null) {
      string += `( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
    }
    string += "null";
    console.log(string);
  }
}

const ll = new LinkedList();
ll.prepend("node1");
ll.prepend("node2");
ll.prepend("node3");
ll.prepend("node4");
ll.prepend("node5");
ll.append("node6");

ll.toString();
ll.insertAt("insertzz", 2);
ll.insertAt("insertzz0000", 0);
ll.toString();
