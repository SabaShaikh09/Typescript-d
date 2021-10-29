
class Employee{
    empid:number;
    empName:string;
    empAge:number;


    constructor(eid:number,eName:string,eage:number){
        this.empid=eid;
        this.empName=eName;
        this.empAge=eage;
    }

    showEmployeeDetails():string{
        return `empid: ${this.empid}  empName: ${this.empName}  empAge: ${this.empAge}`;
    }
}

class Manager extends Employee{
    branch:string;
    salary:number;

    constructor(eid,eName,eage,branch,salary){      
        super(eid,eName,eage);                                       //super class constructor
        this.branch=branch;
        this.salary=salary;
    }
    showManagerDetails():string{
        return ` branch: ${this.branch}  salary: ${this.salary}`;
    }

    calcGrossSalary(cd:number,ab:number):number{
        return this.salary+cd+ab;
    }
}
let man=new Manager(2362361,"Saba",21,"Security and forensic department",45000);
 //man.empid=2525;
//man.empName="sabar";
//man.empAge=21;
//man.branch="Devops department";
//man.salary=65000;
let managerdetails=man.showManagerDetails();
console.log(managerdetails);
let gross=man.calcGrossSalary(67,281);
console.log(gross);



