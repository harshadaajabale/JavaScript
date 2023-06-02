console.log("Harshada A. Ajabale");

let professor={
  name:"Harshada",
  age:"25",
  gender:"female",
  subject:"computer science",
  college:"hvpm",
  degree : {
      engineering:"CSE",
      PHD:"adv Computing",
      diploma:"cyber security"
  },
  certificate:["Hacker Rank Participation", "IFE course", "Adv Programming"],
  value :function(){
      let degrees=`engineering: ${this.degree.engineering},
                      PHD: ${this.degree.PHD}, Diploma : ${this.degree.diploma}`;
      return degrees;
  }
};
console.log(`Type of  professor is ${typeof  professor}`);
console.log(`----------------------step 1. -------------------------------------`);
console.log(`1.Name: ${professor.name}`);
console.log(`2.age: ${professor.age}`);
console.log(`3.gender: ${professor.gender}`);
console.log(`4.college: ${professor.college}`);
console.log(`5.subject: ${professor.subject}`);



console.log(`--------------------step 2..------------------`);
console.log(professor.degree);


console.log(`----------------------step 3.--------------------`);
console.log(professor.certificate);


console.log(`----------------------step 4.---------------------- `);
let show=professor.value();
console.log(`total degrees are ==>${show}`);


console.log(`---------------------------step 5. ----------------------------`);
professor.totalExperience="14 years";
console.log(`total Experience is : ${professor.totalExperience}`);


console.log(`--------------------------step 6.------------------------------`);
professor.age=35;
console.log(professor);


console.log(`----------------------------step 7.------------------`);
professor.certificate.push("Oracle Cerificate");
console.log(professor.certificate);


console.log(`-------------------step 8.--------------------------`);
let n=professor.certificate.length;
console.log(professor.certificate[n-1]);