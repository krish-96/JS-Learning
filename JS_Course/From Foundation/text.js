//a()
//
//function a(){
//    console.log("A")
//}
//function a(){
//    console.log("B")
//}

var favouriteFood = 'grapes';

var foodThoughts = function () {
    console.log("Original favourite food : " + favouriteFood);
    var favouriteFood = "sushi";
    console.log("New favourite food : " + favouriteFood)
};

foodThoughts()
