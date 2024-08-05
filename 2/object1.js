// Destructure-----------------------------
const student = {
  names: "sam",
  roll: 2,
  id: 23,
};

const { names, roll } = student;
console.log(names, roll);

// Spreading---------------------------------
const teacher = {
  ...student
};

console.log(teacher.names);
