
console.log('Welkom in Café het Fluitje');


const age = 18; 
const isFemale = true;
const driverStatus = "Bob";
const name = "Bram";
const totalAmount = 123;

if (age >=18) {
    console.log("Welkom binnen, geniet ervan");

} else {
    console.log("Sorry, maar je komt er niet in");

} 

if (isFemale) {
    console.log("Volgens je ticket ben je een vrouw, welkom");

} else {
    console.log("Sorry, je hebt aangegeven dat je een man bent");
    
}

if (driverStatus == "Bob") {
    console.log("Wel thuis, Bob");

} else {
    console.log("Volgens mij heb je teveel gedronken, geef je sleutels");

}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting");

} else {
    console.log("je komt helaas niet in aanmerking");
}

if (name == "Bram" || "Sarah" ) {
    console.log("Je krijgt een gratis biertje");
} else {
    console.log("Jammer, je heet geen Bram of Sarah");
}
 

if (totalAmount >= 25) {
    console.log("Je krijgt een gratis portie bitterballen");

} else if (totalAmount >= 50) {
    console.log("Je krijgt een gratis portie nachos");
    
} else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne");

} else {
    console.log("Je komt helaas niet in aanmerking")
}


