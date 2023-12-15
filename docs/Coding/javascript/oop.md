---
title: JS-OOP
date: 'January 6, 2023'
tags: ['JS']
---

## Prototypes
Prototype is used for having all properties of another object.
```javascript
__proto__
```

## Constructor Functions
```javascript
function Employee(_name, _age, _designation){
  // Properties assignment passed as arguments
  this.name = _name;
  this.age = _age;
  this.designation = _designation;
  // Method
  this.setAge = newage => {
    console.log(`setting age from ${this.age} to ${newage}`)
    this.age = newage;
  }
  // Property assigned by constructor function
  this.company = 'Amazon';
}

var employee1 = new Employee('Mark', 12, 'Manager'); // create Employee objec
```

## Classes
```javascript
class Employee{
    constructor(_name, _age, _designation){
        this.name = _name;
        this.age = _age;
        this.designation = _designation;
        // Method
        this.setAge = newage => {
            console.log(`setting age from ${this.age} to ${newage}`)
            this.age = newage;
        }
        // Property assigned by constructor function
        this.company = 'Amazon'; 
    }
    // Methods defined outside the constructor
    printAge(){
        console.log(`${this.name} is ${this.age} years old`);
    }

    // static method
    static compareAge(employee_1, employee_2){
        return employee_1.age - employee_2.age;
    
}

var employee1 = new Employee('Mark', 12, 'Manager'); // create Employee objec
```

## Data Projection: internal variables
### Hiding properties in a constructor 
```javascript
function Employee(name, age, designation){
  // Properties assignment passed as arguments
  this.name = name;
  var _age = age;
  this.designation = designation;
  // Method
  this.setAge = newage => {
    console.log(`setting age from ${_age} to ${newage}`)
    _age = newage;
  }
  this.printAge = () => {
        console.log(`${this.name} is ${_age} years old`);
    }
  // Property assigned by constructor function
  this.company = 'Amazon';

```

### Hiding properties in a class
```javascript
class Employee{
    constructor(name, age, designation){
        // Properties assignment passed as arguments
        this.name = name;
        var _age = age;
        this.designation = designation;
        // Method
        this.setAge = newage => {
            console.log(`setting age from ${_age} to ${newage}`)
            _age = newage;
        }
        this.printAge = () => {
                console.log(`${this.name} is ${_age} years old`);
            }
        // Property assigned by constructor function
        this.company = 'Amazon';
    }
    // Methods defined outside the constructor
    
}
```

## Inheritance
An object’s ability to inherit properties of another object through manipulating the prototype property is called **prototypal inheritance**.

```javascript
let vehicle = { wheels : 4 }; // object assigned to variable named vehicle
let car = { 
    seats : 5, 
    __proto__ : vehicle // __proto__ property assigned to vehicle
}; // object assigned to variable named car
let bmw = {
    price : 50000,
    owner : "Bob",
    __proto__ : car, // __proto__ property assigned to car (inherits car)
};// object assigned to variable named bm
```

### Constructor function with The call method and prototypal chaining
```javascript
function Human(_name,_age){
  // Properties assignment passed as arguments
  this.name = _name;
  this.age = _age;
  // Property assigned by constructor function
  this.arms = 2;
  this.legs = 2;
}

function Employee(_name, _age, _designation){
  // Properties assignment passed as arguments
  Human.call(this, _name, _age);
  this.designation = _designation;
  // Method
  this.setAge = newage => {
    console.log(`setting age from ${this.age} to ${newage}`)
    this.age = newage;
  }
  // Property assigned by constructor function
  this.company = 'Amazon';
}
Employee.prototype = Object.create(Human.prototype); // assign human prototype
Employee.prototype.constructor = Employee; // create constructor property

var employee1 = new Employee('Mark', 20, 'Manager'); // create Employee object
// create new property in the prototype object for all objects to inherit
Employee.prototype.gender = 'male';
Human.prototype.feet = 2;
// print objects
console.log(employee1.name, ' is ', employee1.gender);
console.log(employee1.name, ' is ', employee1.age);
console.log(employee1.name, ' has ', employee1.arms, ' arms');
console.log(employee1.name, ' has ', employee1.feet, ' feet')
```

### classes extends and super
```javascript
class Human{
  constructor (_name,_age){
    // Properties assignment passed as arguments
    this.name = _name;
    this.age = _age;
    // Property assigned by constructor function
    this.arms = 2;
    this.legs = 2;
  }
}

class Employee extends Human{
  constructor(_name, _age, _designation){
    // Properties assignment passed as arguments
    // this.name = _name;
    // this.age = _age;
    super(_name, _age); // use super to use properties from Human class
    this.designation = _designation;
    // Property assigned by constructor function
    this.company = 'Amazon';
  }
  // Method
  setAge(newage){
    console.log(`setting age from ${this.age} to ${newage}`)
    this.age = newage;
  }
}

var employee1 = new Employee('Mark', 20, 'Manager'); // create Employee object
// print objects
console.log(employee1.name, ' is ', employee1.age);
console.log(employee1.name, ' has ', employee1.arms, ' arms');
```

## JSON
JavaScript Object Notation(JSON)
* parse method: JSON string -> JS object
* stringify method: object -> JSON string


```javascript
```