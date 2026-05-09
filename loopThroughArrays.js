const tanvi = [             // array
 "Tanvi",
  "Kapurwan",
  2026 - 2000,
   "Engineer",
  ["Bella", "leena", "tira"],
  true
];

const types = [];

for(let i=0; i<5; i++){
   console.log(tanvi[i], typeof tanvi[i]);
   

   // filling types array
   types[i] = typeof tanvi[i];


   types.push(typeof tanvi[i]);
}


console.log(types);


const years = [1991, 2000, 1988, 2024];

const ages = [];

for(let i=0; i<years.length; i++){
    ages.push(2026 - years[i]);
}

console.log(ages);


// continue and break

console.log("----ONLY STRINGS----");

for(let i=0; i<tanvi.length; i++){
    if(typeof tanvi[i] !== 'string') continue;
   console.log(tanvi[i], typeof tanvi[i]);
}

console.log("-----BREAK WITH NUMBER-----")

for(let i=0; i<tanvi.length; i++){
    if(typeof tanvi[i] === 'number') break;
   console.log(tanvi[i], typeof tanvi[i]);
}
