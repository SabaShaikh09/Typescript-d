var Employee = /** @class */ (function () {
    function Employee() {
    }
    //default constructor (no-parameterized)
    Employee.prototype.showDetails1 = function () {
        return "id:" = +this.empid + "  name:" + this.empName + " salary:" + this.empSalary + " married? " + this.married;
    };
    Employee.prototype.showDetails2 = function () {
        return "id: " + this.empId + " name: " + this.empName + "  salary: " + this.empSalary + " married? " + this.married;
    };
    return Employee;
}());
var num;
var s1;
var emp1; //user defined data type
emp1 = new Employee(); //default constructor
emp1.empid = 112;
emp1.empName = "Saba";
emp1.empSalary = 89000;
emp1.married = true;
var details1 = emp1.showDetails1();
console.log(details1);
var emp2 = new Employee(); //default construcotr
emp2.empid = 232;
emp2.empName = "Ali";
emp2.empSalary = 65000;
emp2.married = true;
var details2 = emp2.showDetails2();
console.log(details2);
