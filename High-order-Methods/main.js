const companies = [
{name: "google", catagory: "Technology", start: "1998", end: "2008"},
{name: "facebook", catagory: "social media", start: "2005", end: "215"},
{name: "twitter", catagory: "social media", start: "2007", end: "2017"},
{name: "amazon", catagory: "E-commerce", start: "1997", end: "1998"},
{name: "9gag", catagory: "social media", start: "2008", end: "2018"},
{name: "microsoft", catagory: "Technology", start: "1975", end: "2018"}
];

const ages = [1, 34, 56, 13, 57, 23, 28, 34, 48, 23];

// var companieObject = ""
//  for( let i = 0; i < companies.length; i++) {
//    companieObject += companies[i].name + " " + "\n";
//  }


//console.log(companieObject);
/*
companies.forEach((companies) => {
  console.log(companies.catagory + " " + "\n")
});
*/



//filter old method with for loop
/*
var minor = [];

for(let i = 0; i < ages.length; i++) {
  if(ages[i] < 24) {
    minor.push(ages[i])
  }
}

console.log(minor)
*/

//filter method
//fancy way 
//const minor = ages.filter( age => age < 24);  //arrow function paretheses drop and cruly braces
//console.log(minor);

//long ledgible way for vetaran newbie
/*
const minor = ages.filter((age) => {
  if(age < 24) {
    return true
  }
});
*/


//console.log(minor)
/*
const techCompanie = companies.filter(company => company.catagory === "E-commerce");
console.log(techCompanie);

const boomerCompanies = companies.filter(company => company.start[1] == 9)
console.log(boomerCompanies); 
*/
//Companies that lasted more than 10 years
/*
const decadeCompanies = companies.filter(company => (company.end - company.start >= 10));
console.log(decadeCompanies);
*/


//The map array method creates a new array

const  testMap = companies.map((company) => {
return company.name
});

const agesSquare = ages.map((ages) => {
 return Math.sqrt(ages);
}).map((ages) => {
 return ages * 2;
})


//Sort sort companies by start year
/*
const sortedCompanies = companies.sort((a, b) => {
 if(a.start > b.start) {
return 1
} else {
return -1
}
});
*/

const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 :-1);
console.log(sortedCompanies);

//sort  nums low to high

const sortedAges = ages.sort((a, b) => a - b)
console.log(sortedAges)

let ageSum = 0;

for(let i =0; i < ages.length; i++) {
ageSum += ages[i];
};

console.log(ageSum);

const ageSum2 = ages.reduce((total, age)=> total + age, 0); //alternately return the value within culry braces(code block);

console.log(ageSum2);

const totalYears = companies.reduce((total, company) => {
return total + (company.end - company.start)
},0);


const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start)
,0);
console.log(totalYears2);

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b)

console.log(combined)





































































