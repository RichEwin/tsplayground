// Return type
const hello: string = "Hello World";

// Array
let bands: Array<string> = [];
bands.push("Metallica");

let bands2: string[] = [];
bands2.push("Metallica");

// Union type
type GuitaristAlbums = Array<string | number>;

// Object type
type Guitarist = {
  name: string;
  age: number;
  isAwesome: boolean;
  albums: GuitaristAlbums;
};

const myGuitarist: Guitarist = {
  name: "Keith",
  age: 66,
  isAwesome: true,
  albums: ["Sticky Fingers", 1971],
};

interface Drummer {
  // Interface type
  name: string;
  age: number;
  isAwesome: boolean;
}

// Extends
interface Albums extends Drummer {
  albums: GuitaristAlbums;
}

const myDrummer: Albums = {
  name: "Charlie",
  age: 80,
  isAwesome: true,
  albums: ["Sticky Fingers", 1971],
};

// Function type
const multiply = (a: number, b: number): number => a * b;

// Optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default parameter
const addAllNonOptional = (a: number, b: number, c = 2): number => {
  return a + b + c;
};

// Assertion
type addOrContact = number | string;
type addOrContactUnion = "add" | "concat";

const concatOrAdd = (
  a: number,
  b: number,
  c: addOrContactUnion
): addOrContact => {
  if (c === "add") {
    return a + b;
  }
  return `${a + b}`;
};

let myVal: string = concatOrAdd(2, 2, "concat") as string;

// Index signatures
interface Transactions {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: Transactions = {
  Pizza: 10,
  Books: 10,
  Job: 10,
};

console.log(todaysTransactions["Pizza"]);

// Generics
// Pick
// Omit
// Partial
// Readonly
// Record
