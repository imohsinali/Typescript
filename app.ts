
enum Role{Admin=12,Read_only,Author=11}
const person:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string]//tuple type
    newRole:Role.Admin
}={
    name:"Mohsin",
    age:23,
    hobbies:["sport","cooke"],
    role:[2,'auther']  //if elemnt is fixed then it is tuple
}

person.role.push("moshin") // it is only expection
person.role=[10,"ali"]
person.role=[10,'lai','12']
person.role[1]=10//give error it take only srting

//Enum

//addded by typescript automatically enumerated global constant identifies
console.warn(person)
if(person.newRole===Role.Admin)
{
    alert(Role.Admin)
}