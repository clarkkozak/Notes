function HtmlElement() {
  this.click = function () {
     console.log('click')
  }
}

HtmlElement.prototype.focus = function () {
 console.log('focus')
}

function HtmlElementSelect(initialItems = []) {
 let items = initialItems

 this.addItem = function(item) {
   items[items.length] = item
 }

 this.removeItem = function(item) {
   items.splice(this.items.indexOf(item), 1)
 }

 Object.defineProperty(this, 'items', {
   get: function() { return items } 
 })
}

HtmlElementSelect.prototype = new HtmlElement()
HtmlElementSelect.prototype.constructor = HtmlElementSelectq