/*
make a Stack

//think a box, adding item, removing item, (like in C we have seen earlier FIFO or FILO)
We cannot access method from stack using index method.
We can add items using push method and remove items using pop method

push
pop
peek
count get

if we call pop or peek, when the stack is empty, It has to throw Error.
*/
const _items = new WeakMap();

class Stack{
    constructor(){
//        this.items = [];
        _items.set(this, [])
    }
    push(item){
        _items.get(this, _items).push(item);
    }
    pop(){
        const item = _items.get(this, _items)
        if (item.length === 0)
            throw new Error("Stack is Empty")
        item.pop();

    }
    peek(){
        const item = _items.get(this)
        if (item.length == 0)
            throw new Error("Stack is Empty")
        console.log(item[item.length - 1]);
    }

    get count(){
        console.log(_items.get(this, _items).length)
    }

}
const s = new Stack();
console.log(s)

//My practice to get fist and lastName from the stack and adding a name and deleting name
_names = new WeakMap()
//LIFO Order
class NamesStack{
    constructor(){
        _names.set(this, [])
    }

    firstName(){
        if (_names.get(this).length==0)
            throw new Error("No names available yet!.")
        console.log(_names.get(this)[0])
    }

    addName(name){
        _names.get(this).push(name);
    }

    lastName(){
        if (_names.get(this).length==0)
            throw new Error("No names available yet!.")
        console.log(_names.get(this)[_names.get(this).length-1])
    }

    deleteName(name){
        if (_names.get(this).length==0)
            throw new Error("No names available yet!.")

        if (_names.get(this).includes(name)){

            console.log("Nameslist has the given name!", name)
            for (let key of _names.get(this)){
                if (name === key)
                    console.log("name almost removed")

            }

        }
        console.log("Given Name is Not available in the NamesList!")
    }

}

const n = new NamesStack()
console.log(n)
console.log(n.addName('gopi'))
n.addName('Krishna')
n.firstName()
n.lastName()
n.deleteName("king")
n.firstName()
n.lastName()
























