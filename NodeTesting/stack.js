/*
    File with the defintion of a class for a Stack implementation in JavaScript.
 */

class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(symbol){
        this.data[this.top] = symbol;
        this.top = this.top + 1;
    }

    // Check the top of the stack
    peek() {
        if(this.isEmpty() === false) {
            return this.data[this.top - 1];
        }else{
            return ""
        }
    }

    isEmpty() {
        return this.top === 0; // use Strict equality to avoid JS weird types comparisons
    }

    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop();
        }else{
            return "";
        }
    }
}

export default Stack;