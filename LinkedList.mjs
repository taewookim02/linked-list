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

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.nextNode;
    }
    return curr;
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
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.nextNode;
    }
    return false;
  }
}

const ll = new LinkedList();
ll.prepend("node1");
ll.prepend("node2");
ll.prepend("node3");
ll.prepend("node4");
ll.prepend("node5");
ll.append("node6");
const result = ll.contains("node");
console.log(result);
