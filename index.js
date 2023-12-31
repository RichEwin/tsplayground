// Return type
var hello = "Hello World";
// Array
var bands = [];
bands.push("Metallica");
var bands2 = [];
bands2.push("Metallica");
var myGuitarist = {
    name: "Keith",
    age: 66,
    isAwesome: true,
    albums: ["Sticky Fingers", 1971],
};
var myDrummer = {
    name: "Charlie",
    age: 80,
    isAwesome: true,
    albums: ["Sticky Fingers", 1971],
};
// Function type
var multiply = function (a, b) { return a * b; };
// Optional parameter
var addAll = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default parameter
var addAllNonOptional = function (a, b, c) {
    if (c === void 0) { c = 2; }
    return a + b + c;
};
var concatOrAdd = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return "".concat(a + b);
};
var myVal = concatOrAdd(2, 2, "concat");
var todaysTransactions = {
    Pizza: 10,
    Books: 10,
    Job: 10,
};
var person = {
    name: "Rich",
    age: 21,
};
var countryByPrefix = {
    UnitedKingdom: "UK",
    Sweden: "SE",
    America: "USA",
};
var myCar = {
    model: "Volvo",
    year: 2023,
};
var myOtherCar = {
    model: "Volvo",
    year: 2023,
};
var Car = {
    make: "Volvo",
};
// Generics
var identity = function (argument) {
    return argument;
};
var accum = function (s) {
    console.log(Array(s));
};
console.log(accum(12345));
