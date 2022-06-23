class minStack{
     stack:number[];
    //private top:number;
   
    //user must pass empty list, and initial top value of the stack([], and -1)
    //no edge case functionality

    constructor(){
        this.stack=[];
        //this.top=topinitial;

    }


    public push(value:number):void{
        this.stack.push(value);
        //this.top=this.top+1

    }

    public pop():void{
        this.stack.pop();
        //this.top=this.top-1;
    }

    public topvalue():number{
        return this.stack[this.stack.length-1];
    }
}


let mystack=new minStack();
mystack.push(1);
mystack.push(2);
mystack.push(3);
console.log(mystack.stack);

mystack.pop()
console.log(mystack.stack);

