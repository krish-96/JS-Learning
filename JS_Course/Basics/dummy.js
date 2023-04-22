console.log("============================ From dummy file ================================")

function a(d){
    this.d=d;
}
a.prototype.aMethod = function(){
    console.log(this.d)
}
a.prototype.duplicate = function(){
    console.log('This is A Method duplicate function')
}
function b(e){
    this.e = e;
//    calling super constructor inside a function
    a.call(this);

}
b.prototype.bMethod = function(){
    console.log(this.e)
}
b.prototype = Object.create(a.prototype);
b.prototype.constructor = b;
function c(f){
    this.f=f;
}
c.prototype.cMethod = function(){
    console.log(this.f)
}
c.prototype = Object.create(a.prototype);
c.prototype.constructor = c;


const z =new a(10)
const y =new b(20)
const x =new c(30)

function k(l){
    this.l=l;
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
};

extend(k, a)
k.prototype.duplicate = function(){
    console.log('This is K Method duplicate function')
};

const v = new k(40)

console.log(z)
console.log(y)
console.log(x)
console.log(v)


let l = [
    new a(100),
    new k(250),
    new b(500),
    new k(250),
    new c(750)
]

for (let key of l){
    key.duplicate();
}

function aa(){

}
aa.prototype.abc  = function(){
    console.log("I am abc method")
    return "Iam from abc method"
}

aa.prototype.bcd  = function(){
    console.log("I am bcd method")
    return "Iam from bcd method"
}

aa.prototype.cde  = function(){
    console.log("I am cde method")
    return "Iam from cde method"
}

const personp = [Object.assign({},aa.prototype.abc())]
const personq = Object.assign({},aa.prototype.bcd())
const personr = Object.assign({},aa.prototype.cde())

console.log(personp)
console.log(personq)
console.log(personr)

console.log("============================ From dummy file ================================")
