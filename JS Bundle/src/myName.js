const _name = new WeakMap();
export class Name{
    constructor(userName){
        _name.set(this, userName)
    }
   get name(){
        writeMyName(_name.get(this))
        return "From myName js file : " + _name.get(this)
   }
}

export function writeMyName(name){
    let data = addElementToDocument(`Hello ${name}!
                        <br>
                        I am here to learn JavaScript! `, 'div');
    return document.body.appendChild(data)
}

function addElementToDocument(element, type){
    const newElem = document.createElement(type);
    newElem.innerHTML = element
    return newElem
}

export function optionsNumber(number){
    if (number && (typeof number === 'number') && number>0) {
        let content = ''
        for (let i=1; i<number+1 ; i++){
           content += `<option value=${i}> ${i} </option>`
        }
        return addElementToDocument(content, 'select')
    }
    else if (number && (typeof number === 'object') && number.length>0) {
        let content = ''
        for (let i of number) {
            content += `<option value=${i}> ${i}</option>`
        }
        return addElementToDocument(content, 'select')
    }
    else return addElementToDocument("Please send a Valid integer number!", 'div')
}