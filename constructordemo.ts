class Employee{
    empId:number;
    empName:string;
    empSal:number;
    married:boolean;

    // constructor(){
    //     this.empId = 1;
    //     this.empName = "EMP1";
    //     this.empSal = 10000;
    //     this.married = true;
    // }
    constructor(id:number,name:string,salary:number,married:boolean){
        this.empId = id;
        this.empName = name;
        this.empSal = salary;
        this.married = married;
    }

        showDetails():string{
            return "id : "+this.empId+ " Name : "+this.empName+" Salary : "+this.empSal+" Married : "+this.married;
        }

        showDetails1():string{
            return `ID : ${this.empId} Name : ${this.empName} Salary : ${this.empSal} Married : ${this.married} `
        }
}

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

let emp2 = new Employee(112,"Ram",10000,true);
console.log(emp2.showDetails());
emp2.empName="Saba";
console.log(emp2.showDetails2());