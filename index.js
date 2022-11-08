console.log('Hello TypeScript!');
//Implicit Types
var firstName = "Bob";
firstName = "Tim"; //OK
//firstName 10; //Error
//Explicit Types
var lastName = "Smith";
var person = [10, "Bob", true];
var employee = [10, "Bob", true];
console.log(employee[0]); //10
console.log(employee[1]); //"Bob"
console.log(employee[2]); //true
//You can add new elements to a tuple using the push() method.
employee.push(11, "Tim", false);
for (var i = 0; i < employee.length; i++) {
    console.log(i + ": " + employee[i]);
}
console.log(employee); //Output: [10, 'Bob', true, 11, 'Tim', false]
console.log(employee[0]); //10
//You can declare an array of tuple also.
var student;
student = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(student[1]); //Output: [2, 'Bill']
console.log(student[1][0]); //Output: 2
//Retrieving value by index and performing an operation 
var employer = [1, "Mike"];
employer[1] = employer[1].concat(" Jobs");
console.log(employer); //Output: [1, 'Mike Jobs']
//Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North); //0
console.log(CardinalDirections.West); //3
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); //404
console.log(StatusCodes.BadRequest); //400
var Colors;
(function (Colors) {
    Colors["Red"] = "Red";
    Colors["Green"] = "Green";
    Colors["Blue"] = "Blue";
})(Colors || (Colors = {}));
;
console.log(Colors.Red); //Red
var user = {
    id: 1,
    name: 'Bob'
};
console.log(user.id + " " + user.name);
//let myCarModel: carModel = "fds"; //Wrong
var myCarModel = "Sedan";
var code;
code = 100;
code = "ABCdef";
//code = false; //Wrong
function getType(code) {
    if (typeof (code) === "number")
        console.log('It is number.');
    else if (typeof (code) === "string")
        console.log('It is string.');
}
getType(100); // Output: It is number.
getType("ABCdef"); // Output: It is string.
//getType(true); //Compiler Error
var getLength = function (input) {
    return input.length;
};
console.log(getLength('test')); //4
console.log(getLength(['test1', 'test2'])); //2
