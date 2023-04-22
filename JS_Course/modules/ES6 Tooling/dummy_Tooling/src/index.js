import {Circle} from './circle.js';
import "./css/styles.css"
function component() {
  const element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
function component1() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am', 'from', 'front', 'end', 'code'], ' ');

  return  element;
}
function circleRadius() {
    const c = new Circle(50);

  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
//  element.innerHTML = _.join(['I am', 'from', 'front', 'end', 'code'], ' ');
  element.innerHTML = _.join(['This is the radius of circle : ' + c.radius], ' ');
  return  element;
}

document.body.appendChild(component());
document.body.appendChild(component1());
document.body.appendChild(circleRadius());