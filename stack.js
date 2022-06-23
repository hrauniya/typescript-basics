var minStack = /** @class */ (function () {
    //private top:number;
    //user must pass empty list, and initial top value of the stack([], and -1)
    //no edge case functionality
    function minStack() {
        this.stack = [];
        //this.top=topinitial;
    }
    minStack.prototype.push = function (value) {
        this.stack.push(value);
        //this.top=this.top+1
    };
    minStack.prototype.pop = function () {
        this.stack.pop();
        //this.top=this.top-1;
    };
    minStack.prototype.topvalue = function () {
        return this.stack[this.stack.length - 1];
    };
    return minStack;
}());
var mystack = new minStack();
mystack.push(1);
mystack.push(2);
mystack.push(3);
console.log(mystack.stack);
mystack.pop();
console.log(mystack.stack);
