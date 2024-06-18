import { Node } from "./Node.mjs";
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    console.log(newNode);
    if (this.tail) {
      this.tail.nextNode = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {}
}

const ll = new LinkedList();
ll.append("hello world");
console.log(ll);
