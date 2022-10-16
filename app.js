var Role;
(function (Role) {
    Role[Role["Admin"] = 12] = "Admin";
    Role[Role["Read_only"] = 13] = "Read_only";
    Role[Role["Author"] = 11] = "Author";
})(Role || (Role = {}));
var person = {
    name: "Mohsin",
    age: 23,
    hobbies: ["sport", "cooke"],
    role: [2, 'auther'] //if elemnt is fixed then it is tuple
};
person.role.push("moshin"); // it is only expection
person.role = [10, "ali"];
person.role = [10, 'lai', '12'];
person.role[1] = 10; //give error it take only srting
//Enum
//addded by typescript automatically enumerated global constant identifies
console.warn(person);
if (person.newRole === Role.Admin) {
    alert(Role.Admin);
}
