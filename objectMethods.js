const tanvi = {
  //Object
  firstName: "Tanvi",
  lastName: "Kapurwan",
  birthYear: 2000,
  age: 26,
  job: "Engineer",
  friends: ["Neha", "leena", "tira"],
  hasDriversLicense: true,

  //   calcAge: function(birthYear){
  //     return 2037 - birthYear;
  //   }

  calcAge: function () {
    console.log(this);
    return 2026 - this.birthYear;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license` ;
  }
};

console.log(tanvi.calcAge());
// console.log(tanvi.age);


console.log(tanvi.getSummary());
