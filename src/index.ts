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

// --
// Arrays
// Type: number[]
// let numbers = [1, 2, 3];

// Type: any[]
// let numbers: = [1, 2, "3"];

// Error
// let numbers: number[] = [1, 2, "3"];

// --
// Tuples
// Type: tuple[]
// let user: [number, string] = [1, "safir"];

// Error
// let user: [number, string, number] = [1, "safir", 26, "30"];

// --
// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;

// --
// Functions
// function calculateTax(income: number, taxYear = 2022) {
//   if (taxYear <= 2022) return income * 1.2;
//   return income * 1.3;
// }

// console.log(calculateTax(10_000,2023));

// --
// Objects
// let employee: {
//   readonly id: number;
//   name: string;
//   retire?: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Safir",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// Cannot assign to 'id' because it is a read-only property.
// employee.id = 0

// Error, we cannot add key and value if it does not exist in object
// employee.name = "Safir"
// Property 'name' does not exist on type '{ id: number; }'.

// Advanced topics

// Union types

// Little information: A Union Type in TypeScript allows you to specify
// that a variable can hold one of multiple types. It's useful when you want to assign a
// value that could be more than one type. Essentially, it provides flexibility by enabling
// a variable to accept different types of data.

// function kgToLbs(weight: number | string) {
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// console.log(kgToLbs("10"));

// Intersection types

// Little information: Intersection Types in TypeScript combine multiple types into one.
// While union types allow a value to be one of several types, intersection types
// require that a value satisfies all the combined types. Essentially,
// an intersection type merges properties from different types into one.

// let weight: number & string;

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let texBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// Literal types
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";
// let size: Metric = "cm";
// console.log(`10${size}`);

// Nullable types
// function greet(name: string | null) {
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log("Hello!");
// }

// greet(null);

// Option changing
// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getCustomer(1);

// // Optional property access operator
// console.log(customer?.birthday?.getFullYear( ));

// Type Assertation
// let phone = <HTMLInputElement>document.getElementById("phone");
// we use it when we know more about the type of calling element than type script

// Unknown type
// function render(document: unknown) {
//   // Type Narrowing
//   if (typeof document === "string") {
//     document.toLowerCase();
//   }
//   document.fly();
//   document.whateverWeWant();
//   document.move();
// }

// Never type
// function reject(message: string): never {
//   throw new Error(message);
// }

// function processEvents(): never {
//   while (true) {
//     // Read a message from a queue
//   }
// }

// processEvents();
// reject("....");
// console.log("Hello World!");

// Exercises
// type User = {
//   name: string;
//   age: number;
//   occupation?: string;
// };

// let user: User[] = [
//   {
//     name: "John",
//     age: 20,
//     occupation: "Software developer",
//   },
//   {
//     name: "Safir",
//     age: 18,
//   },
// ];

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
// type Bird = {
//   fly: () => void;
// };

// type Fish = {
//   swim: () => void;
// };

// type Pet = Bird | Fish;

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,
// etc.

// type DayOfWeek =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday"
//   | "Saturday"
//   | "Sunday";

// let user = getUser();
// console.log(user?.adress?.street);
// let x = foo !== null && foo !== undefined ? foo : bar();

// let x = foo ?? bar();

// let value: unknown = "a";
// if (typeof value === "string") console.log(value);
