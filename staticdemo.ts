class Employee{
    private empId:number;
    private empName:string;
    private empSal:number;
    private married:boolean;

    // constructor(){
    //     this.empId = 1;
    //     this.empName = "EMP1";
    //     this.empSal = 10000;
    //     this.married = true;
    // }

    static{
        this.companyName="Neosoft technologies";
    }
    constructor(id:number,name:string,salary:number,married:boolean){
        this.empId = id;
        this.empName = name;
        this.empSal = salary;
        this.married = married;
    }
    get emSal(){
        return this.empSal;
    }
    set emSal(sal:number) {
        this.empSal=sal;
    }
    get eId(){
        return this.empId;
    }
    set eId(id:number){
        this.empId=id;
    }
    get ename(){
        return this.empName;
    }
    set ename(name:string){
        this.empName=name;
    }
    get stat(){
        return this.married;
    }
    set stat(marry:boolean){
        this.married=marry;
    }

        showDetails():string{
            return "id : "+this.empId+ " Name : "+this.empName+" Salary : "+this.empSal+" Married : "+this.married;
        }

        showDetails1():string{
            return `ID : ${this.empId} Name : ${this.empName} Salary : ${this.empSal} Married : ${this.married} `
        }
        static showCompanyName(){
            return this.CompanyName;
        }
}

console.log(Employee.companyName);
let emp2 = new Employee(112,"Ram",10000,true);
console.log(emp2.showDetails());
console.log(emp2.emSal);
console.log(emp2.eId);
console.log(emp2.ename);
 // emp2.empName="Saba"; private data not accessible outside of the class
 emp2.emSal=15000;
 emp2.eId=12;
 emp2.ename="Shaikh"
console.log(emp2.showDetails1());
Employee.companyName="Neosoft infra";

let emp3 = new Employee(112,"Ram",10000,true);
console.log(emp3.showDetails());
// emp3.empName="Saba";
console.log(emp3.showDetails1());

