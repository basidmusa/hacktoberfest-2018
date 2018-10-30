function sumAges(arr) {
  return arr.map(val => val.age).reduce((acc, next) => acc + next);
}

const people = [
  {
    name: 'Abdulbasid',
    age: 27,
  },
  {
    name: 'Nasir',
    age: 43,
  },
  {
    name: 'Aminu',
    age: 96,
  },
];

sumAges(people); // ---> 166
