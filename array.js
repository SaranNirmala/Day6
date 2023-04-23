//Arrays (already Submitted variables and programs(Simple Programs todo for Operators))

 //1.write a code to count the elements in the array . Don’t use length property
var myArray=[11, 22, 33, 44, 55];
var length=0;
while(myArray[length] !== undefined)
{
    length++;
}
console.log(length);


//  2.Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods=["Briyani", "SambarSatham", "curdRice", "Poori", "Pulka", "Parotta","butterNan", "Oats", "Coolu", "Chicken", "Mutton", "fish", "chocalteBrownie","Pizza", "Burger", "Dhosa", "Idly", "paruppusatham", "friedRice", "Nooddles"];


// 3. find the 5th food
console.log(foods[4]);    // 5th fav food 

// 4. traverse full food and prnit it
for(let i=0; i<foods.length-1; i++)
{
    console.log(foods[i]);
}

// 5. find the length

console.log(foods.length);    // length of food array

// 6.Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var str='';
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {

        if(input[i] == "Mari"){
            var temp= input[i];
            input[i]="Munnabai";
            //str=friends[0]; 
        }
    }
    console.log(friends);                 // Chnaged "Mari" to Munnabai
    }
    
    dataHandling(friends);
    

// 7. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

var friendss = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var bestFriend=[];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
   if(input[i] == "CaptianAmerica")
   {
    break;
   }
}
}

dataHandling(friendss);

//8.Find the person is ur friend or not.

let friends11 =[
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
       if(input[i] == name)
       {
         return true;
       }
    }
    }
    
    let found = dataHandling(friends11,"Jeff");
    
    console.log(found);



//9.We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
   var friends3=friends1.concat(friends2);
    
    function dataHandling(input){
        var sortedArray=input;
        for(var i=0; i< sortedArray.length; i++)
        {
            for(var j=i+1; j <sortedArray.length-1; j++)
            {
                if(sortedArray[j] < sortedArray[i])
                {
                    temp = sortedArray[i];
                    sortedArray[i]= sortedArray[j];
                    sortedArray[j]= temp;
                }
            }
        }
     return sortedArray;
    }
    
    console.log(dataHandling(friends3));
//  After Sorting the Array : Output is
    [
        'AAK chandran', 'CaptianAmerica',
        'Gabbar',       'Jeff',
        'Jeff',         'Mari',
        'MaryJane',     'Mass',
        'Munnabai',     'Rajinikanth',
        'Spiderman',    'ET'
      ]



var friendList=  [
    'AAK chandran', 'CaptianAmerica',
    'Gabbar',       'Jeff',
    'Jeff',         'Mari',
    'MaryJane',     'Mass',
    'Munnabai',     'Rajinikanth',
    'Spiderman',    'ET'
  ]

  // 1.Get the first item, the middle item and the last item of the array
   var arr=[];
  console.log(friendList[0]);                                   // first element in the array
 console.log(friendList[Math.floor(friendList.length-1/2)]);     // Middle Element in the Array
  console.log(friendList[friendList.length-1]);                 // last element in the Array

//   //2.Add your name to the end of the friends array, and add another name to beginning.
 //var arr=;
  console.log(friendList.push("Saran"));
  var arr=[...friendList];
friendList.unshift("Shiva");
console.log(friendList);

//3. Add Mr or Ms to the names in the friends array.
var temp=[...friendList];
for(let i=0; i<=temp.length-1; i++)
{
    console.log("Mr."+temp[i]);
}

//4.4. Concat all the names the friends array and return as comma “,” seperated string.
 console.log(friendList.join(','));


 //5. Find the friends names who has letter ‘a’ and return the list.
console.log(friendList);
function startletter()
{
  for(let i=0; i<=friendList.length-1; i++)
  {
   if(friendList[i].startsWith("A"))
   {
    console.log(friendList[i]);
   }
  
  }
}
startletter(friendList);

//  6.Find the avg length of all the friends names. Get the individual length of the names and do the avg.

 var len=friendList.length-1;

 var count=0;
 for(let i=0; i<=friendList.length-1; i++)
 {
  var average=friendList[i].split('');
  for(let char of average)
  {
    count++;
  }
 }
console.log(count);

var avg= count/len;
console.log(Math.floor(avg));             //Average of Individual char


//7.Find the names and return the list starting with letter M.
function startletterM()
{
  for(let i=0; i<=friendList.length-1; i++)
  {
   if(friendList[i].startsWith("M"))
   {
    console.log(friendList[i]);
   }
  
  }
}
startletterM(friendList);

//8. Find the name with max characters and return the name
let maximumChar=[...friendList];
var maxi=maximumChar.reduce(
  function(a,b) {
    return a.length> b.length ? a:b;
  }
);

console.log(maxi);

//9. Find the name with min characters and return the name.
var minimum=[...friendList]
var mini=minimum.reduce(
  function (a,b) {
    return a.length > b.length ? b : a;
  }
)
console.log(mini);


//10.Print the contents of the input variable
var input = [
['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
];

function dataHandling(input){
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < input[i].length; j++){
  
        console.log(input[i][j]);
    }
  }
}

console.log(dataHandling(input));

//
myobject = {1:'one','11':1,'name':'arun'};
// console.log(Object.keys(myobject).map((key) =>{
//   parseInt(key)}).filter((key) => !isNaN(key))); 

var result = Object.keys(myobject)   // get keys as an array
    .map((key) => {
    return parseInt(key);               // convert to integer number
    }).filter((key) => !isNaN(key));
     console.log(result);
console.log(myobject.name);

// add the key and value in the object
myobject = {1:'one','11':1,'name':'arun'};
myobject["ten"]='ten';
console.log(myobject);