# BongoVax

## Problem Statement

Bongo Vax want to trial their vaccine in the human body. So, they have to test their
medicine based on different age ranges.

## Input:

Write a javascript function which takes an array of objects. Each object represents
a single person's information.
Each person will have a name, ages, and a body temperature record.
Function name should be vaxTrail . [If you don't give vaxTrail as your main
function name , your code may fail the test cases.]

## Sample:

```js
vaxTrail([
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 98 },
]);
```

## Output:

It will return an object from the function. That object will have 4 lists named as A, B,
C, D respectively . Think A, B , C, D as line names in front of the vaccine booth.

- A will have person with age 20-30 with temperature less than 100
- B will have person with age 31-40 with temperature less than 100
- C will have person with age 41-50 with temperature less than 100
- D will have any range of age with temperature greater than equal 100
  Each array will be sort by even ages people

## Sample:

```js
{
 A:[
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 }
 ]
,
B:[
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37,temperature: 99 }
],
C: [ { name: 'Paul', age: 42, temperature: 98 }, { name: 'Kat', age: 41,
temperature: 98 } ]
,
D: [ { name: 'Nayem', age: 50, temperature: 100 }, { name: 'Sabnaj', age: 51,
temperature: 101 } ]
}
```

## Solution

```js
function vaxTrail(data) {
  const vaccineBooth = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  data.map((value) => {
    if (value.age >= 20 && value.age < 30 && value.temperature < 100) {
      vaccineBooth.A.push(value);
      vaccineBooth.A.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    } else if (value.age >= 31 && value.age < 40 && value.temperature < 100) {
      vaccineBooth.B.push(value);
      vaccineBooth.B.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    } else if (value.age >= 41 && value.age < 50 && value.temperature < 100) {
      vaccineBooth.C.push(value);
      vaccineBooth.C.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    } else if (value.temperature >= 100) {
      vaccineBooth.D.push(value);
      vaccineBooth.D.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    }
  });
  return vaccineBooth;
}

vaxTrail([
  { name: "Biplap", age: 21, temperature: 98 },
  { name: "Sunil", age: 22, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Paul", age: 37, temperature: 99 },
  { name: "Nayeem", age: 42, temperature: 98 },
  { name: "Rahul", age: 41, temperature: 98 },
  { name: "Kat", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
]);
```
