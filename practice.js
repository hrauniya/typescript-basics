//functions
// let displaygrades =function(name: string,year: string,grade?: string):void {
function displaygrades(name, year, grade) {
    console.log("Name:", name);
    console.log("Year:", year);
    if (grade != undefined) {
        console.log("Grade:", grade);
    }
}
displaygrades("Jake", "Freshman");
displaygrades("Jack", "Sophomore", "A");
//classes
var Dog = /** @class */ (function () {
    function Dog(name, call) {
        this.name = name;
        this.call = call;
    }
    Dog.prototype.bark = function () {
        console.log("My name is", this.name, " and my bark is", this.call);
    };
    Dog.prototype.sleep = function () {
        return "is sleeping";
    };
    return Dog;
}());
var labrador = new Dog("RandomDog", "BhowBhow");
labrador.bark();
labrador.sleep();
