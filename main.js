//Task 1 
const userAge = prompt('сколько тебе лет?');
const userGender = confirm('Если пол М - жми ок, Ж - отмена');


if(userAge>60 && userGender === true) {
    console.log("Вы дедушка")
} else if(userAge>20 && userGender === true) {
    console.log("Вы мужчина")
} else if(userAge>12 && userGender === true) {
    console.log("Вы юноша")
} else if(userAge<12 && userGender === true) {
    console.log("Вы мальчик")
} else if(userAge>=60 && userGender === false) {
    console.log("Вы бабушка")
} else if(userAge>20 && userGender === false) {
    console.log("Вы женщина")
} else if(userAge>12 && userGender === false) {
    console.log("Вы девушка")
} else if(userAge<12 && userGender === false) {
    console.log("Вы девочка")
} else {
    console.log("Проверьте данные которые вы ввели")
}


// Task 2 

const user = {
    firstName:"",
    age:"",
    gender:""
};


user.firstName = prompt("как тебя зовут?");
user.age = prompt("сколько тебе лет?");
user.gender = prompt("твой пол?");


console.log(user);

