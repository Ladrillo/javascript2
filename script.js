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

// B - MAP, FILTER, REDUCE
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
function gg(person) {
  return person.name;
}
var peoplesNames = people.map(gg);
var peoplesNamesOneLiner = people.map((per) => per.name);
console.log(peoplesNamesOneLiner);

// =============================== 8
// not happy about being so old!
// use map to produce an array with ages (take a couple years off each age!)

// =============================== 9
// we don't want youngsters
// use filter to produce an array with people over 21 only

// =============================== 10
// use reduce to produce a number with the sum of the ages of all people

// =============================== 11
// use reduce to produce a string with all names concatenated

// =============================== 12
// use forEach to console.log the name of each person

// C - CALLBACKS

// =============================== 13
// Big boss wants us to produce a function that takes an array
// and determines if its length is an odd or even number.

// The next day he comes in wanting a function that takes an array
// and returns whether the length is under 3 elements or not.

// The next day he's asking for a function that takes an array
// and returns whether the length is over 10 elements or not.
