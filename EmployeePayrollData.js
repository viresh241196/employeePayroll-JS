class EmployeePayrollData {
  id;
  salary;
  name;
  gender;
  startDate;

  //constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    (this.gender = gender), (this.startDate = startDate);
  }
  //getter and setter method
  get name() {
    return this.name;
  }
  set name(name) {
    let nameRegx = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegx.test(name)) this._name = name;
    else throw "invalid name";
  }

  //method
  toString() {
    const options = { year: "numeric", moth: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", options);
    return (
      "id=" +
      this.id +
      ",name= " +
      this.name +
      ",salary=" +
      this.salary +
      ",gender=" +
      this.gender +
      ",startDate =" +
      empDate
    );
  }
}

let employeePayrollData = new EmployeePayrollData(1,"Viresh", 30000);
console.log(employeePayrollData.toString());
try {
  employeePayrollData.name = "sidhu";
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}
let newemployeePayrollData = new EmployeePayrollData(
  1,
  "Terrisa",
  3000,
  "f",
  new Date()
);
console.log(newemployeePayrollData.toString());
