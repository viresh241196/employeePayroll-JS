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
while (empHrs <= MAX_HRS_IN_MONTH && workingDays < NUM_OF_WORKING_DAYS) {
  workingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArray.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log(
  "Employee Wage ",
  empWage + " total days ",
  workingDays + " total hours ",
  totalEmpHrs
);
console.log(empDailyWageArray);
