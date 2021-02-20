function HtmlElement() {
  this.click = function () {
     console.log('click')
  }
}

HtmlElement.prototype.focus = function () {
 console.log('focus')
}

HtmlElement.prototype.render = function() {
  console.log('default render')
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
HtmlElementSelect.prototype.constructor = HtmlElementSelect

HtmlElementSelect.prototype.render = function() {
  return "<select>\n" + `${this.items.map((item) => `  <option>${item}</option>`).join('\n')}` + "\n</select>"
}


function HtmlElementImg(src = "") {
  this.src = src;
}

HtmlElementImg.prototype = new HtmlElement()
HtmlElementImg.prototype.constructor = HtmlElementSelect

HtmlElementImg.prototype.render = function() {
  return `<img src="${this.src}"/>`
}

const elements = [
  new HtmlElementSelect([1, 2, 3]),
  new HtmlElementImg('https://google.com')
]

for (let element of elements) 
  console.log(element.render())