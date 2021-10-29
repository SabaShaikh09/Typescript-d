class Employee{
    empid:number;
    empName:string;
    empSalary:number;
    married:boolean;
    //default constructor (no-parameterized)
    showDetails1():string{
        return "id:"=+this.empid+"  name:"+this.empName+" salary:"+this.empSalary+" married? "+this.married;
    }
    showDetails2():string{
       return `id: ${this.empId} name: ${this.empName}  salary: ${this.empSalary} married? ${this.married}`;
    } 
    
}
let num:number;
let s1:string;
let emp1:Employee;   //user defined data type
emp1=new Employee();   //default constructor
emp1.empid=112;
emp1.empName="Saba";
emp1.empSalary=89000;
emp1.married=true;
let details1=emp1.showDetails1();
console.log(details1);
let emp2=new Employee();  //default construcotr
emp2.empid=232;
emp2.empName="Ali";
emp2.empSalary=65000;
emp2.married=true;
let details2=emp2.showDetails2();
console.log(details2);