const car = {
    name: "mehran",
    varient: "Loem",
    issueDate: 2024
}
car.issueDate = 2003
car["issueDate"] = 2020
car.fuelAverage = '20 hours'
delete car["issueDate"]
// console.log(car);

// function CreateUsers(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }

// const user1 = new CreateUsers("Anus", "anus@gmail.com", "anus123")
// const user2 = new CreateUsers("Owais", "owais@gmail.com", "owais123")

// console.log(user1, user2);

// class CreateUsers {
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     greet(){
//         this.message = message
//     }
// }

// CreateUsers.prototype.message = 'I am a Developer'
// const user1 = new CreateUsers('Anus', 'anus@gmail.com', 'anusanus')


// console.log(user1);

for(let key in car){
    if(car.hasOwnProperty(key)){
        console.log(key, ":", car[key]);
    }
}