function showEmail(){
//Email class with properties and methods
class Email{

	constructor(emailContents, fromAddress){

		this.emailContents = emailContents;
		this.fromAddress = fromAddress;
		this.isSpam = false;
		this.hasBeenRead = false;
	}
markAsRead(){
	this.hasBeenRead = true;
	}
markAsSpam(){
	this.isSpam = true;
	}
}

//empty arrays for the inbox and spam folder (spam folder array is to facilitate error message when user selects a number larger than the inbox)
let inBox = []
let spamFolder = []

// emails as new instances of the Email class
newEmail = new Email("Hi, how are you today?", "me@me.com")
newEmail2 = new Email("What is the weather like today?", "you@you.com");
newEmail3 = new Email("Are you having anythig nice for lunch?", "him@him.com");
newEmail4 = new Email("What music do you like to listen to?", "her@her.com");
newEmail5 = new Email("Where will you go on holiday?", "them@them.com");
newEmail6 = new Email("What type of car do you drive?", "who@who.com");

//new EMail objects pushed to inbox array
inBox.push(newEmail, newEmail2, newEmail3, newEmail4, newEmail5, newEmail6);


//function to count the numbet of emails in the inbox
function getCount(){
	let count = inBox.length
		alert (`You have ${count} emais in your inbox`);
	
}

//function to view as specific email and mark as read, with error message and the two last properties of the email object removed
function getEmail(){
	get_mail = prompt("Which email would you like to read?\nPlease enter a number (starting at 0):");
	if(get_mail > inBox.length){
		alert ("You don't have that many emails")
			}else{
				alert (Object.values(inBox[get_mail]).slice(0,2))
					inBox[get_mail].markAsRead();
				}
}

//function to mark an email as spam and move to spam folder, alsong with error message
function markSpam(){
	get_spam = prompt("Which email would you like to mark as spam?\nPlease enter a number (starting at 0):");
	if(get_spam > inBox.length){
		alert ("You don't have that many emails")
			}else
				inBox[get_spam].markAsSpam();
					for(let i = 0; i < inBox.length; i++){
						if (inBox[i].isSpam=== true){
							spamFolder.push(inBox[i])
						}
					}
}

//function to view unread emails with last two properties of email object removed
function getUnreadEmails(){
	for(let i = 0; i < inBox.length; ++i){
		if (inBox[i].hasBeenRead===false){
			alert("Veiw console.log")
				console.log(Object.values(inBox[i]).slice(0,2))
		}
	}
}

//function to view spam emails with last two properties of email object removed
function getSpamEmails(){
	if(spamFolder.length === 0){
		alert("You do not have any emails in your spam folder")}
			else{ 
				for(let i = 0; i < spamFolder.length; ++i){
					alert ("View console.log")
						console.log(Object.values(spamFolder[i]).slice(0,2))
				}
			}
}

//function to delete an email with error message
function deLete(){
	delete_mail = prompt("Which email would you like to delete?\nPlease enter a number");
	if(delete_mail > inBox.length){
		alert ("You don't have that many emails")
			}else
				inBox.splice(delete_mail, 1)
	
}


userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n1. Read email\n2. Mark spam\n3. Show number of emails in inbox\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1"){
		getEmail();
	}else if(userChoice == "2"){
		markSpam();
	}else if(userChoice == "3"){
		getCount()
	}else if(userChoice == "4"){
		deLete();
	}else if(userChoice == "5"){
		getSpamEmails();
	}else if(userChoice == "6"){
		getUnreadEmails();
	}else if(userChoice == "7"){
		alert("Goodbye");
	}else{
		alert("Oops - incorrect input");
		
	}
}

}



