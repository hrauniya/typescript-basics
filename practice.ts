
//functions
// let displaygrades =function(name: string,year: string,grade?: string):void {
function displaygrades(name: string,year: string,grade?: string):void {
    console.log("Name:", name);
    console.log("Year:",year);
    if (grade != undefined){
        console.log("Grade:",grade);
    }

}

displaygrades("Jake","Freshman");
displaygrades("Jack","Sophomore","A")


//classes

class Dog{

    private name:string;
    private call:string; 

    constructor(name:string,call:string){
        this.name=name; 
        this.call=call;
    }

    public bark():void{
        console.log("My name is", this.name, " and my bark is", this.call);
    }

    public sleep():string{
        return "is sleeping";
    }


}


let labrador=new Dog("RandomDog","BhowBhow");
labrador.bark();
labrador.sleep();

