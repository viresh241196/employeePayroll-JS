const IS_PART_TIME = 1;
const IS_Full_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HRS_IN_MONTH = 100;

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_Full_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

function calculateDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

let empHrs = 0;
let totalEmpHrs = 0;
let workingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
while (empHrs <= MAX_HRS_IN_MONTH && workingDays < NUM_OF_WORKING_DAYS) {
  workingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArray.push(calculateDailyWage(empHrs));
  empDailyWageMap.set(workingDays, calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log(
  "Employee Wage ",
  empWage + " total days ",
  workingDays + " total hours ",
  totalEmpHrs
);

//array helper function
//UC 7Acalculte total wage usnig forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
  totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log(
  "UC7A total days " +
    workingDays +
    " total Hrs " +
    totalEmpHrs +
    " emp wage " +
    totEmpWage
);

function totalWages(totalWages, dailyWage) {
  return totalWages + dailyWage;
}
console.log(
  "UC7 emp wage with reduce " + empDailyWageArray.reduce(totalWages, 0)
);

//UC 7B- show the day along with daily wage using array map helper function
let dailycntr = 0;
function mapDayWithWage(dailyWage) {
  dailycntr++;
  return dailycntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("UC7B daily wage map");
console.log(mapDayWithWageArr);

//UC 7C show days when full time wage was of 160 were earned
function fullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);

//UC 7D Find the First occurance when the full time wage was earned using the find function
function findFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}
console.log(
  "UC 7D Find the First occurance when the full time wage " +
    mapDayWithWageArr.find(findFullTimeWage)
);

// UC7E check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
  return dailyWage.includes("23");
}
console.log(
  "UC 7D check if every element of full time wage " +
    fullDayWageArr.every(isAllFullTimeWage)
);

//UC 7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
  return dailyWage.includes("80");
}
console.log(
  "UC 7F Check if any part time wage" +
    mapDayWithWageArr.some(isAnyPartTimeWage)
);

//UC 7G find the number of days employee worked
function totalDaysworked(numOfDays, dailyWage) {
  if (dailyWage > 0) return numOfDays + 1;
  return numOfDays;
}
console.log(
  "UC 7G number of days emp worked " +
    empDailyWageArray.reduce(totalDaysworked, 0)
);

console.log(empDailyWageMap);
function totalWages(totalWages, dailyWage) {
  return totalWages + dailyWage;
}
console.log(
  "UC7A - Emp Wage Map totalHrs:" +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
);
