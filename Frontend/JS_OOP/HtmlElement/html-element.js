function HtmlElement() {
   this.click = function () {
      console.log('click')
   }
}

HtmlElement.prototype.focus = function () {
  console.log('focus')
}

function HtmlElementSelect(initialItems) {
  let items = initialItems || []

  this.addItem = function(value) {
    items[items.length] = value
  }

  this.removeItem = function(value) {
    items = items.filter(item => value !== item)
  }

  Object.defineProperty(this, 'items', {
    get: function() { return items } 
  })
}

HtmlElementSelect.prototype = Object.create(HtmlElement)