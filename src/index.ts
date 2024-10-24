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
// Little information: Literal types in TypeScript allow you to define
// a variable that can only have a specific value.For example, you can set a variable
// to accept only a few predefined values, like specific strings or numbers.
// This restricts the variable to a certain set of values, increasing the
// precision of your code.

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";
// let size: Metric = "cm";
// console.log(`10${size}`);

// Nullable types
// Little information: Nullable types allow variables to be explicitly assigned
// null or undefined along with their other types.In TypeScript,
// you can use the union type null or undefined with another type
// to define variables that can have those values.

// function greet(name: string | null) {
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log("Hello!");
// }

// greet(null);

// Option changing
// Little information: "Option changing" isn't a specific
// TypeScript term, but it may refer to enabling or disabling strict options
// (like strictNullChecks) in TypeScript’s configuration.
// This can affect how the compiler handles nullable types, implicit any,
// or other checks.
// Use cases: Adjusting TypeScript's options is appropriate when you want
//  stricter or looser type - checking based on your project needs.
//  strictNullChecks for example ensures you handle null and undefined correctly.

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
// Little information: Type assertions allow you to tell TypeScript to treat a
// variable as a specific type, overriding its inferred or declared type.
// This is useful when you know more about a value’s type than TypeScript does.

// let phone = <HTMLInputElement>document.getElementById("phone");
// we use it when we know more about the type of calling element than type script

// Unknown type
// Little information: The unknown type is a safer alternative to any,
// indicating that the type of a variable is unknown.Unlike any, values
// of type unknown must be type - checked before you can perform any operations on them.

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
// Little information: The never type represents values that never occur,
// such as in functions that throw an error or never return.It is typically
// used for functions that stop the program or in unreachable code.

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

// Object-oriented programming
// Object-Oriented Programming (OOP) is a programming paradigm based on the
// concept of "objects," which can contain both data and functions.
// The goal of OOP is to structure programs around objects rather than actions,
// and data rather than logic.In OOP, objects are instances of classes,
// which are blueprints that define the structure and behavior of the objects.

// Creating classes
// class Account {
//   id: number;
//   owner: string;
//   balance: number;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Invalid amount');
//     this.balance += amount;
//   }
// }

// let account = new Account(1, 'Safir', 0)
// account.deposit(1000)
// console.log(account instanceof Account);

// ReadOnly and Optional properties
// class Account {
//   readonly id: number;
//   owner: string;
//   balance: number;
//   nickname?: string;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Invalid amount');
//     this.balance += amount;
//
//     ERROR
//     this.id = 0
//   }
// }

// Access Controlling keywords
// In typeScript we have 3 modifiers
// Public, Private, Protected

// class Account {
//   id: number;
//   owner: string;
//   private _balance: number;
//   nickname?: number;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Invalid amount');
//     this._balance += amount;
//   }

//   private calculateTax() {}

//   getBalance(): number {
//     return this._balance;
//   }
// }

// let account = new Account(1, 'Safir', 0);
// console.log(account.getBalance());
// Error
// account.calculateTax()
