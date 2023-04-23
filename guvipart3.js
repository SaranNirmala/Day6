
//GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

//1.Fix the code to get the largest of three.
aa = (f,s,t) => {
       //let f,s,t;  already we declared so we can remove this line
    console.log(f,s,t);
    if(f>s && f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);         //output: largest number printed - 3


// 2.Fix the code to Sum of the digits present in the number
let n = 123;                                        

function add(n)
{
var sum = '' +n;
var number=0;
for(var i=0; i<=sum.length-1; i++)
{
    var n1=parseInt(sum[i]);
    number=number+n1;
 }
 return number;
}
console.log(add(n));             //output : 6
// ANother Method
let n1=n.toString().split('').map(Number).reduce(function (a,b) {
  return a+b;
},0);
console.log(n1);                 // Output : 6
 


//3.Fix the code to Sum of all numbers using IIFE function

const array1 = [9,8,5,6,4,3,2,1];
(function (){
 let sum = 0;
 for (var i = 0; i <= array1.length-1 ;i++) {
 sum += array1[i];
 }
 console.log(sum);
 return sum;               // Output : 38
})();



//4.Fix the code to gen Title caps.

var arr1 = ["guvi", 'geek', 'zen', 'fullstack'];
var ano = function(arr1) {
 for (var i = 0; i <= arr1.length-1; i++) {
 console.log(arr1[i][0].toUpperCase() + arr1[i].substr(1));
 }                            // Output is : Guvi
}                            //              Geek
ano(arr1);                  //               Zen         
                            //               Fullstack


//5.Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10,11,25,21];
const myPrime=newArray.filter(num=>{
 for(let i=2;i< num;i++){
 if(num % i === 0)
      {
       return false;
 } 
}
 return true;                   //output: 1,3,2,5,11
});

console.log(myPrime);


//6.Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum1 = ((a, b) =>
 a + b);
const sum = num.reduce(sum1)
console.log(sum);                       // Output is: 550


//7.Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
  //console.log(k);
(function() {
var out = arr.slice(k + 1, arr.length);
 var count = out.length;   //8
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];             
 count += 1;
 }                               // Output:  [6, 8, 6, 1, 9, 10, 12, 13, 1, 2, 3]
 console.log(out);})();


 //8.Fix the code to gen Title caps.
 var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= arr.length-1; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }                                   // Output : Guvi  Geek  Zen  Fullstack
})();                 


//9.print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();                               //output: 1 3 5 7 79 7 9



//10.Fix the code to reverse.
(function(str){
   let str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");                       // output : dcba


//11. Fix the code to remove duplicates.
var res = function(arr){
  var newArr=[];
  for(var i=0; i < arr.length-1; i++){
  if(newArr.indexOf(arr[i]) === -1) {
  newArr.push(arr[i]);
  } 
}
  return newArr;                  // Output : "guvi" , "geek", Duplicate
 }
 console.log(res(["guvi","geek","guvi","duplicate","geeK"]));    
 


 // 12. Fix the code to give the below output:

  var array =[[['firstname','vasanth'],['lastname','Raje'],['age',24],['role','JSWizard']],[['firstname','Sri'],['lastname','Devi'],['age',28],['role', 'Coder']]];

let final=[];
var object={};

while(array.length !=0)
{
  var arr=array;
 var outer_remove = arr.shift();

 while(outer_remove.length !=0)
 {
 var inner_remove = outer_remove.shift()

 var key = inner_remove[0];
 var value =inner_remove[1];
object[key]=value;
//final.push(object);
 }
 final.push(object);
 console.log(object);
}
 
     //output :{ firstname: 'vasanth', lastname: 'Raje', age: 24, role: 'JSWizard'} { firstname: 'Sri', lastname: 'Devi', age: 28, role: 'Coder' }




//13.Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var sum2=0;
    s=as.reduce((a,c) => {
 if(c % 2  != 0)
 {
 return a+c;
 }
 return a;
},0);                          //(5+1)
console.log(s);              //    output :6    



//14. Swap the odd and even
output: 2143
var aa = data=>{
  var a=data;
  var arr=[];
 for(i=0;i<a.length-1;i++){
  var l=''; 
  var s=a[i+1]; 
  
  var b=a[i];
  l+=s;
  l+=b;
  i=i+1;
  arr.push(l);
 }
 if((a.length%2) !=0){
  l+=a[a.length-1];
  console.log(arr);
 }
 console.log(arr.join(""));
 }
 aa("1234")                          // Output : 2143 