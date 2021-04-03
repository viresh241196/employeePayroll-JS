class EmployeePayrollData {
  //id;
  //   salary;
  //name;
  //   gender;
  //   startDate;

  //constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }
  //getter and setter method
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegx = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegx.test(name)) this._name = name;
    else throw "invalid name";
  }
  get id() {
    return this._id;
  }
  set id(id) {
    let nameRegx = RegExp("^[1-9]{1}([0-9])*$");
    if (nameRegx.test(id)) this._id = id;
    else throw "invalid id";
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    let salaryRegx = RegExp("^[1-9]{1}([0-9])*$");
    // let genderRegx = RegExp("^[M|F]$");
    if (salaryRegx.test(salary)) this._salary = salary;
    else throw "invalid salary";
  }
    get gender() {
      return this._gender;
    }
    set gender(gender) {
      let genderRegx = RegExp("[M|F]{1}");
      if (genderRegx.test(gender)) this._gender = gender;
      else throw "invalid gender";
    }

  //method
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
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

let employeePayrollData = new EmployeePayrollData(1, "Viresh", 30000,"F");
console.log(employeePayrollData.toString());
try {
  employeePayrollData.name = "sidhu";
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}
try {
  employeePayrollData.id = "10";
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}
try {
  employeePayrollData.salary = "10";
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}
try {
  employeePayrollData.gender = "M";
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}
let newemployeePayrollData = new EmployeePayrollData(
  1,
  "Terrisa",
  3000,
  "F",
  new Date()
);
console.log(newemployeePayrollData.toString());