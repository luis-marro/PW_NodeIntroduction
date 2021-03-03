import Stack from "../pw_node-introduction/stack.js"

// const with the correct text to validate the symbols
const correctTestText = "{{[({})]}}"
// const with an incorrect text to validate the symbols
const incorrectText = "[{[()]]]"

let stack = new Stack();
// dictionary for the opposites of symbols
const opposites = {
    ")": "(",
    "]":"[",
    "}":"{"
}

/*
    logic to verify if all the parentheses match. Travel the string, if the next character is different than
    the peek of the stack, add it. If it is the same, remove the character from the stack.
    If at the end of the execution the stack is not empty, the characters don't close up correctly

    Params:
        Sequence: String with the sequence of characters that needs to be validated.
 */
function verifyClosingCharacters(sequence){
    // iterate over the correct file
    for (var i = 0; i < sequence.length; i++){
        if(!(sequence[i] in opposites)){
            // it is an opening parentheses, add it to the stack
            stack.push(sequence[i]) ;
        }else{
            // it is a closing character, check if it is the same as the top of the stack.
            if(opposites[sequence[i]] === stack.peek()){
                // pop the element as they match
                stack.pop();
            }else{
                // exit the loop, as there is a missmatch
                break;
            }
        }
    }
    if (stack.isEmpty()){
        console.log("Todos los caracteres en el String Cierran correctamente!")
    }else{
        // Clean the stack
        stack = new Stack();
        console.log("No todos los caracteres en el String cierran de manera correcta")
    }
}

// call the functions
verifyClosingCharacters(correctTestText);

verifyClosingCharacters(incorrectText);

// Last correct text
let pivotTest = "{{[[(({[()]}))]]}}"
verifyClosingCharacters(pivotTest)

// Another incorrect text
pivotTest = "{{[[(({[([)]]}))]]}}"
verifyClosingCharacters(pivotTest)