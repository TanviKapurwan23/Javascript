// function declaration

function calculateAge1(birthYear)
{
    return 2026 - birthYear;
}

const age1 = calculateAge1(2000);
console.log(age1);


// function expression

const calculateAge2 = function (birthYear){
    return 2026 - birthYear;
} 

//expression produces values

const age2 = calculateAge2(2000);

console.log(age2);
