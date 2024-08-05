const vehicle = [
  { name: "Yamaha", id: 101 },
  { name: "Honda", id: 990 },
  { name: "Bajaj", id: 512 },
  { name: "Suzuki", id: 102 },
  { name: "Tata", id: 993 },
  { name: "Yatri", id: 552 }
];
let i = 0;
let arrlen = vehicle.length - 1;

console.log("---------Descending--------------");
for (i = arrlen; i >= 0; i--) {
  console.log("Vehicle is of "+vehicle[i].name);
  console.log("Id is "+vehicle[i].id);
}

console.log("---------Ascending-----------------");
for (i = 0; i <= arrlen; i++) {
  console.log(vehicle[i].name);
  console.log(vehicle[i].id);
}


