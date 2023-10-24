let stolenItems = [
  {
   socks: 7,
   spoons: 20,
   nutella_jar: 5,
   keys: 0,
   shoelaces: 4,
   rotisserie_chicken:1
 },
 
 {
   socks: 2,
   spoons: 2,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 4, 
   rotisserie_chicken: 2
 },
   
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 0,
   rotisserie_chicken: 0
 },
 
   {
   socks: 2,
   spoons: 10,
   nutella_jar: 4,
   keys: 4,
   shoelaces: 12,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 12,
   spoons: 17,
   nutella_jar: 0,
   keys: 2,
   shoelaces: 0,
   rotisserie_chicken: 0
 },
 
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 2,
   keys: 0,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 2,
   spoons: 2,
   nutella_jar: 0,
   keys: 4,
   shoelaces: 1,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 43,
   spoons: 10,
   nutella_jar: 50,
   keys: 2,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
 
 {
   socks: 0,
   spoons: 2,
   nutella_jar: 0,
   keys: 3,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 14,
   rotisserie_chicken: 0
 }
 
 ]
// PROBLEM ONE
// Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!”.

function houseTotal(obj) {
  var houseStolenTotal=0;
houseStolenTotal=obj.socks+obj.spoons+obj.nutella_jar+obj.keys+obj.rotisserie_chicken+obj.shoelaces;


if(houseStolenTotal==0){
return "Nothing was stolen! Lucky You!";
}
else{
  return "Total amount of stolen items is "+houseStolenTotal;
}
}
//uncomment these out to test it out
console.log(houseTotal(stolenItems[0])); 
console.log(houseTotal(stolenItems[1]));
console.log(houseTotal(stolenItems[2])); 
 
// PROBLEM TWO
// Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 

function isStolen(obj) {
if (obj != 0){
  return true;
}
else{
  return false;
}
}
// uncomment these out to test it out
// console.log(isStolen(stolenItems[0].keys));
// console.log(isStolen(stolenItems[1].socks));
// console.log(isStolen(stolenItems[2].spoons)); 


// EXTRA CREDIT!!!!! PROBLEM THREE
// Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 

function neighborhoodTotal(arr) {
  let socktotal=0;
  let spoontotal=0;
  let nutellatotal=0;
  let keytotal=0;
  let shoelacetotal=0;
  let chickentotal=0;
  let totalarr = [];
for (i=0; i<=arr.total;i++){
  socktotal+=arr[i].socks;
  spoontotal+=arr[i].spoons;
  nutellatotal+=arr[i].nutella_jar;
  keytotal+=arr[i].keys;
  shoelacetotal+=arr[i].shoelaces;
  chickentotal+=arr[i].rotisserie_chicken;
}
totalarr.push(socktotal);
totalarr.push(spoontotal);
totalarr.push(nutellatotal);
totalarr.push(keytotal);
totalarr.push(shoelacetotal);
totalarr.push(chickentotal);
if(totalarr.max==socktotal){
  return "Socks were the most stolen item"; 
}
else if(totalarr.max==spoontotal){
  return "Spoons were the most stolen item";
}
else if(totalarr.max==nutellatotal){
  return "Nutella was the most stolen item";
}
else if(totalarr.max==keytotal){
  return "Keys were the most stolen item";
}
else if(totalarr.max==shoelacetotal){
  return "Shoelaces were the most stolen item";
}
else if(totalarr.max==chickentotal){
  return "Rotisserie chicken was the most stolen item";
}
}

// uncomment these out to test it out
console.log(neighborhoodTotal(stolenItems)); 



// PROBLEM FOUR
// Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the “wrong” answer - just give me a fun explanation for why you think it is who it is! 
//I'd say it was the 