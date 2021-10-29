var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empId = 1;
    //     this.empName = "EMP1";
    //     this.empSal = 10000;
    //     this.married = true;
    // }
    function Employee(id, name, salary, married) {
        this.empId = id;
        this.empName = name;
        this.empSal = salary;
        this.married = married;
    }
    Employee.prototype.showDetails = function () {
        return "id : " + this.empId + " Name : " + this.empName + " Salary : " + this.empSal + " Married : " + this.married;
    };
    Employee.prototype.showDetails1 = function () {
        return "ID : " + this.empId + " Name : " + this.empName + " Salary : " + this.empSal + " Married : " + this.married + " ";
    };
    return Employee;
}());
//let emp1 = new Employee();
// let empObj1 = new Employee();
// let emp1 = empObj1.showDetails();
// console.log(emp1);
// empObj1.empId =  993;
// empObj1.empName = "Ulrich";
// empObj1.empSal = 12000;
// empObj1.married = true;
// emp1 = empObj1.showDetails();
// console.log(emp1);
var emp2 = new Employee(112, "Ram", 10000, true);
console.log(emp2.showDetails());
emp2.empName = "Saba";
console.log(emp2.showDetails2());
