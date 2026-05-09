const tanvi = [
  "Tanvi",
  "Kapurwan",
  "2050 - 2000",
  "Engineer",
  ["Bella", "leena", "tira"],
  true,
];


for (let i = tanvi.length - 1; i >= 0; i--) {
  console.log(i, tanvi[i]);
}

// nested loop


for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----EXERCISE  ${exercise}`);

  for (let rep = 1; rep <= 6; rep++) {
    console.log(`rep ${rep}`);
  }
}
