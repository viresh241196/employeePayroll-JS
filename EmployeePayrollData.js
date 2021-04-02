class EmployeePayrollData {
  id;
  salary;
  name;

  //constructor
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  //getter and setter method
  get name() {
    return this.name;
  }
  set name(name) {
    this.name = name;
  }

  //method
  toString() {
    return "id=" + this.id + ",name= " + this.name + ",salary=" + this.salary;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "viresh", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "sidhu";
console.log(employeePayrollData.toString());
