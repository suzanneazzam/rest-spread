// refactor code to use the rest operator and an arrow function:
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// findMin:
const findMin = (...nums) => Math.min(...nums);

// mergeObjects:
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// doubleAndReturnArgs:
const doubleAndReturnArgs = (arr, ...nums) => [
  ...arr,
  ...nums.map((num) => num * 2),
];

// Slide and Dice:

// remove a random element in the items array
// and return a new array without that item.
const removeRandom = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return [...array.slice(0, random), ...array.slice(random + 1)];
};

// Return a new array with every item in array1 and array2.
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

// Return a new object with all the keys and values
// from obj and a new key/value pair
const addKeyVal = (obj, key, val) => {
  const objCopy = { ...obj };
  objCopy[key] = val;
  return objCopy;
};

// Return a new object with a key removed.
const removeKey = (obj, key) => {
  const objCopy = { ...obj };
  delete objCopy[key];
  return objCopy;
};

// Combine two objects and return a new object.
const combine = (obj1, obj2) => {
  return { ...obj1, obj2 };
};

// Return a new object with a modified key and value.
const update = (obj, key, val) => {
  const objCopy = { ...obj };
  objCopy[key] = val;
  return objCopy;
};
