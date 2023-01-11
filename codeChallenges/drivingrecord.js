var goodDrivingRecord = true;
var age = 24;

if (goodDrivingRecord === true && age >= 25) {
    console.log("Discount on car rental applied")
} else if (goodDrivingRecord === true || age > 25) {
    console.log("Pay full price")
} else if (goodDrivingRecord === false && age < 25) {
    console.log("You need someone else to sign for the rental")
}