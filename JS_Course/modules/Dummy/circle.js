const _diameter = new WeakMap();

export class Circle{
    constructor(diameter){
        _diameter.set(this, diameter)
    }
    get diameter(){
        console.log("dummy Circle diameter!", _diameter.get(this))
    }

}
