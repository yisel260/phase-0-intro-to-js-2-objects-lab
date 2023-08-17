// Write your solution in this file!
const employee = {
    name: "Speedy Gonzalez",
    streetaddress : "1008 Bayfield Street",
    };
function updateEmployeeWithKeyAndValue(employee,name, Juan){
    const newEmployee = { ...employee };
    newEmployee[name] = Juan;
    return newEmployee;
  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,Juan){
    employee[name] = Juan
    return employee
}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name 
    return employee;
}
function deleteFromEmployeeByKey(){
    const newEmployee = { ...employee };
    delete newEmployee.name 
    return newEmployee;

}