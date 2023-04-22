const _radius = new WeakMap();

export class Circle{
	constructor(radius){
		_radius.set(this, radius)
    }
	get radius(){
	    return "The radius of the circle : ", _radius.get(this)
    }
}


