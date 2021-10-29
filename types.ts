//multiple inheritance of classes is not supported

//1. interfaces can be extented

interface Personintf{
    name:string;
    age:number;
    getDetails();
}
interface EmpIntf extends PersonIntf{
    empId:number;
    empSalary:number;
    getDetails();

}
class Trainer implements EmpIntf{
    empId:number;
    empSalary:number;
    name:string;
    age:number;
    getDetails(){

    }
    getSalary(){

    }
}

//multiple inheritance of interface is allowed(exceptions)

interface MotherIntf{
    dream();
}
interface FatherIntf{
    goal();
    dream(dr:string);                    
}
interface ChildIntf extends MotherIntf, FatherIntf{
    hobbies();
}

class ChildIntf implements ChildIntf{
    hobbies(){

    }
    goal(){

    }
    dream(){
        
    }
}