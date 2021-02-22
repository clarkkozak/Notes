const _items = new WeakMap();
class Stack {
  constructor() {
    this.count = 0;
    _items.set(this, []);
  }

  get items() {
    return _items.get(this);
  }

  push(value) {
    _items.set(this, [...this.items, value]);
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is Empty');
    }

    let topIndex = this.count--;
    let topItem = this.items[topIndex];

    let newStack = this.items.splice(0, topIndex)

    _items.set(this, newStack);
    
    return topItem;
  }

  peek() {
    if (this.count === 0) {
      throw new Error('Stack is Empty')
    }

    return this.items[this.count - 1];
  }
}