function Emp(emp_name, emp_salary, emp_dept) {
  this.name = emp_name;
  this.salary = emp_salary;
  this.dept = emp_dept;
  this.hike = function () {
    console.log(" " + this.name, " " + (this.salary + 5000), " " + this.dept);
  };
}
const emp1 = new Emp("san", "cse", 21);
const emp2 = new Emp("riz", "1se", 22);
console.log(emp1.hike());
console.log(emp2.hike());

function employee() {
  console.log(this.name, this.salary, this.dept);
}
var emp3 = {
  name: "shi",
  dept: "ise",
  salary: 10000,
  hike: function () {
    console.log(" " + this.name, " " + this.salary + 5000, " " + this.dept);
  }
};
var emp4 = {
  name: "mis",
  dept: "cse",
  salary: 5000,
  hike: function () {
    console.log(" " + this.name, " " + this.salary + 5000, " " + this.dept);
  }
};
console.log(employee());
console.log(emp3.hike());
console.log(emp4.hike());
