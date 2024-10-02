//Ask the user to enter their age
let age = prompt("Enter Your Age: ");
console.log("Enter your: " + age);

//Check if the user is a child, teenager, or adult
if(age <= 13){
    console.log("Your are a Child");
} else if (age >=13 && age <= 19){
    console.log("Your are a teenager");
}else{
    console.log("Your are a adult");
}