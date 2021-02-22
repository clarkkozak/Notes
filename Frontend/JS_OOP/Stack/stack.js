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
    let newStack = this.items
    newStack[this.count++] = value;
    _items.set(this, newStack);
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is Empty');
    }

    let topItem = this.items[this.count--];
    
    _items.set(this, this.items.slice(0 , this.count))
    return topItem;
  }

  peek() {
    if (this.count === 0) {
      throw new Error('Stack is Empty')
    }

    return this.items[this.count - 1];
  }
}