
class Person{
    aadharNum:number;
    name:string;
    age:number;

    constructor(anum:number,name:string,age:number){
        this.aadharNum=anum;
        this.name=name;
        this.age=age;
    }

    showDetails():string{
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
    showDetails():string{
        return `roll number: ${this.rollno} standard: ${this.standard}`;
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
    /*this function is overrding superclass sunction*/
    showDetails():string{
        return `employee id: ${this.empId} salary: ${this.salary}`;
    }

    calcGrossSalary(ta:number,da:number,hra:number):number{
        return this.salary+ta+da+hra;
    }
}
let obj:Person;

obj= new Person(88888,"saba",20);
console.log("Person details"+obj.showDetails());

obj= new Student(88888458457,"sabayffd",12,20,'4th standard');
console.log("Student details"+obj.showDetails());

obj= new Employee(8887436688,"sabakavi",20,111,89000);
console.log("Employee details"+obj.showDetails());  //run time polymorphism

//when we do upcasting then for subclass own properties are invisible

let obj1:Student;
obj1=new Student(12333,"dshj",56,34,"sgju"); //super class+own person

let obj2:Person;
obj1=new Student(12333,"dshj",56,34,"sgju"); //upcasting

//only casted super class property is visible



