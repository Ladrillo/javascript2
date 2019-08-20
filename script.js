// A - BE THE COMPILER. (Put on your JS glasses!)

// =============================== 1
// evaluate `a`
var a = false || 4 || NaN;

// evaluate `b`
// evaluate `b()`
function b() {
  var a = false || 4 || NaN;
}

// =============================== 2
// evaluate `c`      function
// evaluate `c()`    function
// evaluate `c()()`  undefined
function c() {
  return function d() {
    console.log(7);
  };
}

// =============================== 3
// evaluate `e()`
// evaluate `e()()`
var e = function e() {
  var f = function f() {
    return 7;
  };
};

// =============================== 4
// evaluate `g()` // undefined
var g = () => { };

// evaluate `h()`
// var h = () => ({});
var h = () => {
  return {};
}

// =============================== 5
// evaluate `i`
// evaluate `j`
var i = function (a) {
  return a + 1;
}
var j = i(6);

// =============================== 6
// evaluate `k(1)`
// evaluate `m(k)` // 12
var k = (a) => 5 + a;
function m(func) {
  return func(7);
}

// B - MAP, FILTER, FOREACH, REDUCE
var people = [
  { name: 'gabe', age: 42 },
  { name: 'luke', age: 26 },
  { name: 'samar', age: 21 },
];
// MAKE AN ARRAY OF AGES
function ff(person) { // decide on a good parameter name
  return person.age;
}
var peoplesAges = people.map(ff);

// =============================== 7
// use map to produce an array with just names
// the long way
function gg(person) {
  return person.name;
}
var peoplesNames = people.map(gg);
// the short way
var peoplesNamesOneLiner = people.map((per) => per.name);
// console.log(peoplesNamesOneLiner);

// =============================== 8
var personsYounger = people.map(function (person) {
  var result = {
    name: person.name,
    age: person.age - 2,
  };
  return result;
});
// not happy about being so old!
// use map to produce an array with persons (take a couple years off each age!)

// =============================== 9
var arr = [1, 2, 3];
var evens = arr.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});
// we don't want youngsters
// use filter to produce an array with people over 21 only
var over21 = people.filter(person => person.age > 21); // 21 > 21 // false
console.log(over21);
// =============================== 10
// use reduce to produce a number with the sum of the ages of all people
const sumOfAges = people.reduce((acc, person) => {
  return acc + person.age;
}, 0);

// =============================== 11
// use reduce to produce a string with all names concatenated
const combName = people.reduce((acc, person) => {
  return acc + person.name + ' ';
}, '');

// =============================== 12
// use forEach to console.log the name of each person
var res = [];
people.forEach(person => {
  res.push(`${person.name} is my buddy`);
});

// C - CALLBACKS

// =============================== 13
// Big boss wants us to produce a function that takes an array
// and determines if its length is an odd or even number.

// The next day he comes in wanting a function that takes an array
// and returns whether the length is under 3 elements or not.

// The next day he's asking for a function that takes an array
// and returns whether the length is over 10 elements or not.
