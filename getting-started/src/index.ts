// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;

// Annotation
// let numbers: number[] = [1, 2, 3];

// Tuples
// let user: [number, string] = [1, "Safir"];

// Enums
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// Functions
// function calculateTax(income: number): number {
//   return income * 0.2;
// }

// Objects
// let employee: {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Safir",
//   retire: (date: Date) => {},
// };

// Exercises
// !! Solutions are below exercises

// 1) For each of these values, what type will the TypeScript compiler infer?
// let a = 100;
// let b = "Coffee";
// let c = [true, false, false];
// let d = { age: number };
// let e = [3];
// let f;
// let g = [];

// 2) What are the compilation errors in each of the following code snippets?
// let song: {
//   title: string;
//   releaseYear: number;
// } = { title: "My song" };

// let prices = [100, 200, 300];
// prices[0] = "$100";

// function myFunc(a: number, b: number): number {}

// Solutions
// 1) For each of these values, what type will the TypeScript compiler infer?
// Type: number
// let a = 100;
// Type: string
// let b = "Coffee";
// Type: boolean[]
// let c = [true, false, false];
// Type: { age: number }
// let d = { age: number };
// Type: number[]
// let e = [3];
// Type: any
// let f;
// Type: any[]
// let g = [];

// 2) What are the compilation errors in each of the following code snippets?
// let song: {
//   title: string;
//   releaseYear: number;
// } = { title: "My song" };
// ERROR: Property "releaseYear" is not given when initializing the object

// let prices = [100, 200, 300];
// prices[0] = "$100";
// ERROR: We’ve declared a "number[]" but we’re trying to store a "string" in this array

// function myFunc(a: number, b: number): number {}
// ERROR: myFunc is expected to return a "number" but "nothing" is returned.
