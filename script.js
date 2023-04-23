//GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

alert("i'm invoked");      // first invoked this line
alert('Hello')             // we press ok then this message shown   , Small program can executed without semicolon
alert(`Wor
 ld`)                       // This is also executed but the output is wor
                            //                                         ld
alert(3 +
1
+ 2);                       // our final output is 6


// // 2.Fix the below to alert Guvi geek

let admin='', f1name='';     // we can reassign the value. so fname and admin automatically fetch the string value. we declare as a astring not a integer
f1name = "Guvi";             // fname should be string so i declared as a string
lname = "geek"
admin = f1name+' ' +lname;
alert(admin); // "Guvi geek"    // Now we got a output like this


// // 3.Fix the below to alert hello Guvi geek
let fname=''; 
fname = "Guvi";
lname = "geek"
let name = fname+' '+lname;
alert( `hello ${name} `);   // here we use template literals not a single quotation


// // 4.Fix the below to alert sum of two numbers

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));   // we need to convert integer. we can directly convert
// a=parseInt(a);
// b=parseInt(b);   // we can use both methods
alert(a + b);


// //5.Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a1 = "2" > "12";          // we declared as a string so we are getting the output is code is blasted.
                             // whwn we comparing two strings "2" will be greater than "12", because(alphabetically) 1 is less than 2

//Don't touch below this
if (a1) {
  console.log("Code is Blasted")
}
else                                    // output "Code is Blasted"
{
  console.log("Diffused") 
}

// // if we wanr to get diffused. we need to convert integer.
var a2= 2> 12;                       // redeclare the variable
if (a2) {
    console.log("Code is Blasted")
  }                                    // output "Diffused"
  else                                          
  {
    console.log("Diffused") 
  }


// //6.How to get the success in console.
  let a3 =prompt("Enter a number?");
//Don't modify any code below this       // if we don't give any value in the alert box (enter a number = empty) then Success message get in th console
if (a3) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}


// //7. How to get the correct score in console.

let value =parseInt(prompt('How many runs you scored in this ball'));  // we need to get input as a integer
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//8.Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome': (login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
  '';
console.log(message);


//9.Fix the code to welcome the boss
let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";    // we don't declare here. we are just assigning the value
}
else
{
  message1 = "Go away";
}
  console.log(message1);


//10.Fix the code to welcome the boss
let message2;
let lock;             // we are just declaring the lock. we don't assign the value here so automatically it ll go else part
//Dont change any code below this 
if (null || lock || undefined )
{
  message2 = "Go away";
}
else
{
 message2 = "welcome";
}
  console.log(message2);


//11.Fix the code to welcome the boss
let message3;
let lock1;                            //output - Welcome
//Dont change any code below this
if (lock1 && " " || undefined )
{
  message3 = "Go away";
}
else
{
 message3 = "welcome";
}
console.log(message3);


//12.Change the code to print
//You can change only 2 characters
let i = 3;                            
while (i) {
  console.log( i-- );               // 3 2 1  (first we print the value of "i" then only we decrement the value of "i")
}



//13.Change the code to print 1 to 10 in 4 lines
let num = 1;
 for(num ; num<=10 ; num++)
 {                               // use for loop
    console.log(num);
 }


 //14.Change the code to print even numbers
 //You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)              // we increment the value of num =num+2; so we can get even number
  }   


  //15.Change the code to print all the gifts
  let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);   // we use template literals
}



// 16.Fix the code to disarm the bomb.

let countdown = 100;
while (countdown > 0) {
  countdown--;                       
  if(countdown < 0)
  {
   console.log("bomb triggered");
  }
  else{
    console.log("bomb disarm");    // output "bomb disarm"
  }
}



//17. Whats the msg printed and why?
var lemein = "0";      // it shows error they not provided proper "Quotation"
var lemeout = 0;       
var msg = "";
var hello='';
if (lemein) {
 msg += "hi";               // Assigned the the string in proper way then we get a output is "hi"
 } 
if (lemeout) {             // the loop doesn't exist. because we declare value of lemeout is "0".    
 msg += 'Hello';            // so the function not triggered. 
}                           //suppose if we declare any number in the lameout the output ll be "hiHello"
console.log(msg);          // so our output is hi




//18.Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";                    // it shows error they not provided proper "Quotation"
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";       // Still this loop executed because "0" its a value of lemein. suppose if we not provided anything in the string "". then we don't get any Output
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);   // output : hi
      