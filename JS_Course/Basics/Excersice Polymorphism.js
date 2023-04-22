/*HtmlElement
2 methods -> 1. click on instanceof
             2. focus on prototype
HtmlSelectElement
3 methods -> 1. addItem
             2. items
             3. removeItem
     And it's prototype is HtmlElement
            Constructor is HtmlSelectElement
*/

console.log("==> Prototypical inheritance Excercise")
function HtmlElement(){
    this.click = function(){
        console.log("clicked")
    }
}

HtmlElement.prototype.focus = function(){
    console.log('Focused')
}

const h = new HtmlElement();
console.log(h)

console.log("==> Prototypical inheritance Excercise")
function HtmlSelectElement(items = []){
    this.items = items;
    this.render = function(){
        return `
        <select> ${this.items.map(item=>`
        <option>"${item}"</option>`).join('')}
        </select>`;
    }
}

//This is how the tutor achieved.
HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
//In my case, we need to call the function externally, in 2nd case only single line is enough

const hs = new HtmlSelectElement([1,2,3]);
console.log(hs)

function HtmlImgElement(src=''){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}"/>`
    }
}
HtmlImgElement.prototype = new HtmlImgElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

const hi = new HtmlImgElement('http://');
console.log(hi)