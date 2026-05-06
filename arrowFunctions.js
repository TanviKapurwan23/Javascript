// function expression

const calculateAge = function(birthYear){
    return 2026 - birthYear;
}

// Arrow Functions
const calculateAge3 = birthYear => 2026 - birthYear;

const age3 = calculateAge3(2000);
console.log(age3);



const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(2000, 'Tanvi'));
