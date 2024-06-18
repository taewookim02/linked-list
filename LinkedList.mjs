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

  at(index) {}
}

const ll = new LinkedList();
ll.append("hello world");
ll.prepend("new hello");
console.log(ll.getTail());
