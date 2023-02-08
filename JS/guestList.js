
// Variable with a empty array as a value
let guestList = [];
// Variable with a empty array as a value to be used for the replaced person
let extraPerson = []

//Welcome alert
function showList(){
alert("Hello, invite 10 of your friends to our party!")

// do while loop start
do{
//Variable to store peopleToInvite prompt inputs.

let peopleToInvite = prompt("Please enter the name of a person you would like to invite:");
//Prompt inputs pushed to empty array 'guestList'

guestList.push(peopleToInvite);
extraPerson.push(peopleToInvite);
//user restricted to 10 invites, if an 11th is input user asked whether to replace another with the 11th
if(guestList.length > 10){
let replaceName =  prompt("You have already added 10 people to your guest list. \nWould you like to replace someone on the list with this person? \ny/n?");

//If statement checking if response is y, if so notification given of who has been removed and what the new guest list is
if (replaceName === 'y'){

//.pop removes the last index of an array
guestList.pop()

//prompt asking which name to remove
let removeName = prompt("Here is your guest list: \n" + guestList + "\nWho would you like to replace?")

// For loop iterating through guest list to indentify name to remove
for( let i = 0; i < guestList.length; i++){ 
if ( guestList[i] === removeName) { 

    // alert with name to removed using .splice() and name added using .pop from extraName array
      alert("You have removed " + guestList.splice(i, 1, extraPerson.pop()) + " from your guest list:");
          
          alert("Here is your new guest list: \n" + guestList);
          
        }    
}

break;
}
//if responce to replaceName is n last index (11) i removed from array using .pop
if(replaceName === 'n'){
guestList.pop()
}

//alert outputing guest list
alert("Here is your guest list: \n" + guestList)
//program exits
  break;
}
// whilw part of do while loop, looping back to line 17
}while(guestList.length <=10);
}
