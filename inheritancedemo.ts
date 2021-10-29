//resuing the properties of existing class, and extending existing class by adding new properties

class Person{
    aadharNum:number;
    name:string;
    age:number;

    constructor(anum:number,name:string,age:number){
        this.aadharNum=anum;
        this.name=name;
        this.age=age;
    }

    showPersonDetails():string{
        return `Aadhar Number: ${this.aadharNum}  Name: ${this.name}  Age: ${this.age}`;
    }
}

class Student extends Person{
    rollno:number;
    standard:string;
    constructor(anum,name,age,rollno,standard){      
        super(anum,name,age);        //super class constructor
        this.rollno=rollno;
        this.standard=standard;
    }
    showStudentDetails():string{
        return `${this.showPersonDetails()} roll number: ${this.rollno} standard: ${this.standard}`;
    }

    calcPercentage(m1:number,m2:number,m3:number):number{
        return Math.round((m1+m2+m3)/3);
    }
}
class Employee extends Person{
    empId:number;
    salary:number;
    constructor(anum,name,age, id:number , sal:number){
            super(anum,name,age);
            this.empId=id;
            this.salary=sal;
    }
    showEmployeeDetails():string{
        return `${this.showPersonDetails()} employee id: ${this.empId} salary: ${this.salary}`;
    }

    calcGrossSalary(ta:number,da:number,hra:number):number{
        return this.salary+ta+da+hra;
    }
}
let stud=new Student(000066667777,'saba',12,111,'5th standard');
stud.aadharNum=000066667777;
stud.age=11;
stud.name="Saba";
stud.standard="5th Standard";
stud.rollno=16;
let studdetails=stud.showStudentDetails();
console.log(studdetails);
let perct=stud.calcPercentage(78,45,90);
console.log(perct);

let emp1=new Employee(66666666,'shaikh',40,2222,67000);
//if you are creating our own constructor in subclass then super call must be 
//in subclass constructor
//if superclass contains p-constructor then from sub class constr,


