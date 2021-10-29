var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(eid, eName, eage) {
        this.empid = eid;
        this.empName = eName;
        this.empAge = eage;
    }
    Employee.prototype.showEmployeeDetails = function () {
        return "empid: " + this.empid + "  empName: " + this.empName + "  empAge: " + this.empAge;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(eid, eName, eage, branch, salary) {
        var _this = _super.call(this, eid, eName, eage) || this;
        _this.branch = branch;
        _this.salary = salary;
        return _this;
    }
    Manager.prototype.showManagerDetails = function () {
        return " branch: " + this.branch + "  salary: " + this.salary;
    };
    Manager.prototype.calcGrossSalary = function (cd, ab) {
        return this.salary + cd + ab;
    };
    return Manager;
}(Employee));
var man = new Manager(2362361, "Saba", 21, "Security and forensic department", 45000);
//man.empid=2525;
//man.empName="shaikh";
//man.empAge=21;
//man.branch="Devops department";
//man.salary=65000;
var managerdetails = man.showManagerDetails();
console.log(managerdetails);
var gross = man.calcGrossSalary(67, 281);
console.log(gross);
