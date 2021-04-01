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

let empHrs = 0;
let workingDays = 0;
while (empHrs <= MAX_HRS_IN_MONTH && workingDays < NUM_OF_WORKING_DAYS) {
  workingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage ", empWage+" total days ",workingDays+" total hours ",empHrs);
