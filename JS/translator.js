// Start of a Do While loop
function showTranslator(){  
do{

// variable to store input of prompt. Input converted to lower case 

let inputWord = prompt("What is the Greek for:\nHello, Good morning, Thank you, Please and Yes? \n\nPlease type one of the above words:").toLowerCase()

// Alert incase of incorrect input
if (inputWord !== "hello" && inputWord !== "good morning" && inputWord !== "thank you" && inputWord !== "please" && inputWord !== "yes" ){
    alert ("Please enter one of the key words")
    inputWord = prompt("What is the Greek for:\nHello, Good morning, Thank you, Please and Yes? \n\nPlease type one of the above words:").toLowerCase()
    }
// Creates a Map to store the translation information
let translateMap = new Map(); 

// Set of words to translate. The translate word is lower case. This to allow inputs where the first words is, is is not a capital. Any inputs that have a first letter as capital 'Hello' with be converted to 'hello' allowing both inputs to be accepted.
translateMap.set("hello", "Yassou"); 
translateMap.set("good morning", "Kalimera");
translateMap.set("thank you", "Efharisto");
translateMap.set("please", "Parakalo");
translateMap.set("yes", "Neh");

// A for loop, looping through the translateMap.sets
for (let [key, value] of translateMap) {
   
// checks in inputWord matches a key (word)
if (inputWord === key){
  
//outputs the answer        
alert("The Greek for " + key + " is " +value);
}
}
// Prompt to try another word
let tryAgain = prompt("Try again? y/n").toLowerCase();

// If responce is no alert says goodbye
if (tryAgain === 'n'){
    alert("Goodbye!")
    break;
}
// Prompt to try again incase of in corret entry
else if (tryAgain !== 'n' && tryAgain !== 'y'){
tryAgain = prompt("Sorry I did not get that, would you like to try again y/n").toLowerCase();
}
// If responce is no alert says goodbye
if(tryAgain === 'n'){
    alert("Goodbye!")
    break;
}
// If another incorrect entry get bored and go away!
else if (tryAgain !== 'n' && tryAgain !== 'y'){
    alert("Ok, I am getting bored now, bye!");
    break;
}
// while part of the do while loop, looping back to line 8
}while (translateMap = new Map());
}

// Why does the cancel on the prompt not work?
// Is there a way in JavaScript to convert to Greek text
