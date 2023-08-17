---
title: JS-Grammar
date: 'December 26, 2022'
tags: ['study']
---

## Regular expression
### Syntax
#### Brackets
Patterns that find a range of characters in the string
* [...] Any of the characters encapsulated.
* [^...] Not any character encapsulated.
* [0-9]
* [a-z]

#### Quantifiers
Special characters or flags that specify the position or frequency of a certain pattern
##### Frequency

* p+ one or more times
* p* zero or more times
* p? maximum once
* p\{n\} in a sequence n times
* p\{m,n\} minimum m times and max n times


##### Positional 
* ^p p should exist at the start of the string
* p$ p should exist at the end of the string.

#### Lookaround
Assertions that see if a character match is possible or not, and accordingly return boolean values without consuming any part of the string.

* $p(?=q)$	Assert that p should be immediately be followed by q
* $p(?!q)$	Assert that p should NOT be immediately followed by q
* $p(?<=q)$	Assert that p should immediately be preceded by q
* $p(?<!q)$	Assert that p should NOT immediately be preceded by q


#### Character literals
representations for characters and special characters.

* Alphanumeric	Any alphabet or numeric character itself e.g. a is any character which is the letter a
* \0	A null character
* \t	A tab character
* \n	A newline character
* \v	A vertical tab character
* \f	A form feed character (next page character)
* \r	A carriage return character

#### Metacharacters
character representations for a group of characters falling under the same categories.

* .	Any single character ([^\n])
* \s	A white space character like tab and spaces ([ \n\r\t\f])
* \S	Any character which is not a white space character ([^ \n\r\t\f])
* \d	Any numeric character ([0-9])
* \D	Any non-numeric character ([^0-9])
* \w	Any word character ([a-zA-Z0-9_])
* \W	Any non-word character ([^a-zA-Z0-9_])

### RegExp object
#### exec method
It runs the regular expression on a string passed as an argument and returns the found text as an object

#### test method
It runs the regular expression on a string passed as an argument and returns a boolean value telling if a match was found or not.

### String methods with RE
#### Search method
It takes a query-string as an argument and searches within the string to return the character index at which the query-string starts. It returns “-1” if no match is found.

#### replace method
It takes a query-string as an argument and searches within the string to replace the matching substring.

### RE example

```javascript
// Check if the password is strong password.
// Length: .{6,} (Minimum 6 characters)
// Uppercase letter: .*[A-Z] (A-Z)
// Lowercase letter: .*[a-z] (a-z)
// Numeric digit: .*\d (0-9)
// Special Character: .*[\W] (any character other than {0-9, a-z, A-Z})
var isSafe = function(password)
{
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{6,}$/; 
    return regex.test(password); // return regex.test(password) after completing regex
}
```
