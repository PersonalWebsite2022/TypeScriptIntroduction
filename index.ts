console.log('Hello TypeScript!');

//Implicit Types
let firstName = "Bob";
firstName = "Tim"; //OK
//firstName 10; //Error

//Explicit Types
let lastName: string = "Smith";
//lastName = 10; //Error

//Tuples 
type numberStringBoolean = [number, string, boolean];
let person: numberStringBoolean = [10, "Bob", true];
let employee: [number, string, boolean] = [10, "Bob", true];
console.log(employee[0]); //10
console.log(employee[1]); //"Bob"
console.log(employee[2]); //true
//You can add new elements to a tuple using the push() method.
employee.push(11, "Tim", false);
for (var i:number = 0; i < employee.length; i++) {
    console.log(i + ": " + employee[i]);
}
console.log(employee); //Output: [10, 'Bob', true, 11, 'Tim', false]
console.log(employee[0]); //10
//You can declare an array of tuple also.
let student: [number, string][];
student = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(student[1]); //Output: [2, 'Bill']
console.log(student[1][0]); //Output: 2
//Retrieving value by index and performing an operation 
let employer: [number, string] = [1, "Mike"];
employer[1] = employer[1].concat(" Jobs"); 
console.log(employer); //Output: [1, 'Mike Jobs']

//Enums
enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  console.log(CardinalDirections.North); //0
  console.log(CardinalDirections.West); //3

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound); //404
  console.log(StatusCodes.BadRequest); //400

  enum Colors {
    Red = 'Red',
    Green = "Green",
    Blue = "Blue"
  };
  console.log(Colors.Red); //Red

//Interface
interface User {
    id: number;
    name: string;
}

let user: User = {
    id:1, 
    name: 'Bob'
};
console.log(user.id+ " " + user.name);

//Unions
type carModels = "Sedan" | "SUV" | "Pickup Truck";
//let myCarModel: carModel = "fds"; //Wrong
let myCarModel: carModels = "Sedan";

let code: (string | number);
code = 100;
code = "ABCdef";
//code = false; //Wrong

function getType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('It is number.')
    else if(typeof(code) === "string")
        console.log('It is string.')
}
getType(100); // Output: It is number.
getType("ABCdef"); // Output: It is string.
//getType(true); //Compiler Error

const getLength = (input: string | string[]) => {
    return input.length;
}
console.log(getLength('test')); //4
console.log(getLength(['test1', 'test2'])); //2