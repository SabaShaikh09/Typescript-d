var empObj = {
    empId: 3456,
    empName: "sana",
    empSalary: 3737272,
    technologies: [
        {
            techName: "java",
            exp: 7
        },
        {
            techName: "python",
            exp: 2
        }
    ]
};
console.log(JSON.stringify(empObj.technologies[0]));
