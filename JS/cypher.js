// variables to use in code outside the function
let inputText;
let secretAgt;
let tryAgain;

//prompt for the input text that links the function call
function showCypher(){
secretAgt = prompt("Pssst...do you have any secrets you would like me to put into a secret code for you? \nY/N:").toLowerCase()

//start of a do while loop giving user options via prompts and alerts
do{
if (secretAgt === "y"||secretAgt === "yes"){
  
inputText = prompt("Ok, great, type it here...but quietly OK!");
alert("Right, now close your eyes and count to ten, then hit OK")
alert("...I said close your eyes and count to ten!!")

//calling the function
cypherCode(inputText)
}
if (secretAgt === "n"||secretAgt === "no"){
    alert("Ok then, but you ain't seen me, right!");
     break;    
}
tryAgain = prompt("Before I go do you have anymore secrets? y/n").toLowerCase()
if(tryAgain === "n" || tryAgain === "no"){
alert("No?...ok then, but you ain't seen me, right!")
break;
} 
 
// end of do while loop
}while(tryAgain === "y" || tryAgain === "yes")

//start of the function, alphaCode being the parameter that uses inputText
function cypherCode(alphaCode){

// empty array to hold the numbers of each individual letters as the code runs
let outPutCode = []
let codeChar;
let convertCode;
 
// for loop iterating through alphaCode with charCodeAt find the number for each letter
for(let i = 0; i < alphaCode.length; i++){
codeChar = alphaCode[i].charCodeAt(0)

//A run of a ifs and else ifs pushing the appropriate numbers to outPutCode array
if (codeChar < 65){
    outPutCode.push(codeChar) 
}
else if (codeChar > 123){
   outPutCode.push(codeChar)
} 
else if(codeChar >=65 && codeChar <= 75){
  codeChar = codeChar + 15;
  outPutCode.push(codeChar)
}
else if(codeChar > 75 && codeChar <= 90){
    codeChar = codeChar - 11
    outPutCode.push(codeChar)
}
else if(codeChar > 90 && codeChar <97){
    outPutCode.push(codeChar)
}
else if (codeChar >= 97 && codeChar <= 107){
    codeChar = codeChar + 15
    outPutCode.push(codeChar)
}
else if (codeChar > 107 && codeChar < 123){
    codeChar = codeChar - 11
    outPutCode.push(codeChar)
}
console.log(convertCode)
}
// the numbers are then converted to letters using fromCharCode
convertCode = String.fromCharCode(...outPutCode)

//Alert printing the coded text
alert(`Ok, here it is, your secret code: \n${convertCode} \n\nNow memorise it, for it may or may not self-destruct in 5 seconds!.`)

}
//Just incase you are wondering what 'You ain't seen me, right' is... https://www.youtube.com/watch?v=s6jYoagXmZE

}