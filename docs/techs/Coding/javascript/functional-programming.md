---
title: Functional Programming
last_update:
    date: 'July 17, 2021'
tags: ['JS', 'linux']
---

## Function composition

### Curry functions

```javascript
var add = function (a){
    return function(b){
        return a + b;
    }
}
// console.log(add(a,b)); <- incorrect call
// calling one function at a time
var func_add_2 = add(1); // return a function which adds 1 to the argument
var final_output = func_add_2(5);
console.log(final_output);
// more direct approach
final_output = add(1)(5); // curry function call
console.log(final_output);
```

### compose function

Spread syntax (...)

using reduceRight

```javascript
// function composition of any number of functions
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);
```

Using pipe function

```javascript
// function composition using pipe of any number of functions
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function pipe
var output_final = pipe(square, double)(2);
console.log(output_final);
```

### Libraries

- **[Ramda](https://ramdajs.com/):** [compose](https://ramdajs.com/docs/#compose) and [pipe](https://ramdajs.com/docs/#pipe)
- **[Lodash](https://lodash.com/):** [flowRight](https://lodash.com/docs/4.17.15#flowRight) (compose) and [flow](https://lodash.com/docs/4.17.15#flow) (pipe)

## Recursion

 [**trampoline**](https://en.wikipedia.org/wiki/Trampoline_(computing)) or [**tail-call**](https://en.wikipedia.org/wiki/Tail_call) techniques to avoid stack error.
