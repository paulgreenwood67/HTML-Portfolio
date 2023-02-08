function showCalculator(){
//Start of a do while loop to give the option to try again
let tryAgain = " "
do{

//variables for numbers and calculation prompt inputs with do while loops for incorrect inputs.
let firstNum = " "
do{
      
    firstNum = parseInt(prompt("Please enter your first number:"));
    if(isNaN(firstNum)){
alert("Sorry, that is not a number. Please try again.");
    }
}while(isNaN(firstNum))

let secondNum = " "
do{
    secondNum = parseInt(prompt("Please enter your second number:"));
    if(isNaN(secondNum)){
alert("Sorry, that is not a number. Please try again.");
    }
}while(isNaN(secondNum))

let calcType = " "
do{
    calcType = prompt("What calculation would you like to perform? \nType 'A' for addition: \nType 'S' for subtraction: \nType 'M' for multiplication: \nType 'D' for division: \n\nPlease type your selection here.").toLowerCase()
    if(calcType !== "a" && calcType !== "s" && calcType !== "m" && calcType !== "d"){
alert("Sorry, that was an incorrect input. Please try again.");
    }
}while(calcType !== "a" && calcType !== "s" && calcType !== "m" && calcType !== "d")

//function to return result of an addition
if (calcType === "a"){
    function a(a,b){
        let total = (a + b);
        return total;
    }
//alert and console.log of outcome. The instructions says to console.log but I felt the program also required an alert.
alert(firstNum + " + " + secondNum + " = " + a(firstNum,secondNum))
console.log(firstNum + " + " + secondNum + " = " + a(firstNum,secondNum));

}
//function to return result of a subtraction
if (calcType === "s"){
    function s(a,b){
    let total = (a - b);
        return total;
    }
//alert and console.log of outcome. The instructions says to console.log but I felt the program also required an alert.
alert(firstNum + " - " + secondNum + " = " + s(firstNum,secondNum));
console.log(firstNum + " - " + secondNum + " = " + s(firstNum,secondNum));
}

//function to return result of a multiplication
if (calcType === "m"){
    function m(a,b){
    let total = (a * b);
        return total;
    }
//alert and console.log of outcome. The instructions says to console.log but I felt the program also required an alert
alert(firstNum + " x " + secondNum + " = " + m(firstNum,secondNum));  
console.log(firstNum + " x " + secondNum + " = " + m(firstNum,secondNum));
}

//function to return result of a division
if (calcType === "d"){
    function d(a,b){
    let total = (a / b);
        return total;
    }
//alert and console.log of outcome. The instructions says to console.log but I felt the program also required an alert
alert(firstNum + " / " + secondNum + " = " + d(firstNum,secondNum));
console.log(firstNum + " / " + secondNum + " = " + d(firstNum,secondNum));
}

// variable asking if you want to try again, if 'yes' loops back to the start, if 'No' program exits and if incorrect input do while loop keeps trying until correct input
tryAgain = prompt("Try again? Y/N.").toLowerCase()
if(tryAgain === "n"){
    alert("Goodbye!")
    break;
}
if(tryAgain !== "n" && tryAgain !== "y")
do{
    alert("Sorry, that was an incorrect input. Please try again")
    tryAgain = prompt("Try again? Y/N").toLowerCase()
    if(tryAgain === "n"){
        alert("Goodbye!")
        break;
    }
   }while(tryAgain !== "n" && tryAgain !== "y")

//end of do while loop returning to the start of code
}while(tryAgain === "y");


}


