import { Node } from "./Node.mjs";
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

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

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

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
}

const ll = new LinkedList();
ll.prepend("node1");
ll.prepend("node2");
ll.prepend("node3");
ll.prepend("node4");
ll.prepend("node5");
ll.append("node6");
// console.log(ll.getHead());
console.log(ll.getSize());
// console.log(ll.at(-1));
console.log(ll.at(-12));
