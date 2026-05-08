const friends = ["Micheal", "Steven", "Peter"];

// Add Elements
const newlength = friends.push("Jay");

console.log(friends);
console.log(newlength);

friends.unshift("John"); // beginning of the array

console.log(friends);

//Remove elements

const popped = friends.pop();
console.log(friends);
friends.pop();

console.log(friends);
console.log(popped);

friends.shift(); //pop first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if(friends.includes('Steven')){
    console.log("You have a friend called Steven");
}
