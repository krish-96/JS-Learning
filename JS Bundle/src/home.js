import {Name} from "./myName";
import {writeMyName} from "./myName";
import "./home.css"
import {optionsNumber} from "./myName";

console.log("Hello World!")
const user = new Name('Gopi');
console.log(user.name)
//document.body.appendChild(writeMyName('Gopi'));
document.body.appendChild(optionsNumber(10))
document.body.appendChild(optionsNumber('gopi'))
document.body.appendChild(optionsNumber(['gopi', 'king']))
document.body.appendChild(optionsNumber(10))

