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
function HtmlSelectElement(){
    this.items = [];
    this.addItem = function(item){
        this.items.push(item)
    };
    this.removeItem = function(item){
        for (let key in this.items)
            if (this.items[key]==item)
                this.items.splice(key, 1)
    };
}

//This is how I achieved.
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlSelectElement.prototype.click = function(){
    HtmlElement.click(this)
}

//This is how the tutor achieved.
HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
//In my case, we need to call the function externally, in 2nd case only single line is enough


const hs = new HtmlSelectElement();
console.log(hs)