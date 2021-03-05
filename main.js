//Task 1 

const userAge = prompt('сколько тебе лет?');
const userGender = confirm('Если пол М - жми ок, Ж - отмена');
let result;


if (userGender) {
    if (userAge < 12) {
        result = "Вы мальчик";
    } else if (userAge < 20) {
        result = "Вы юноша";
    } else if (userAge < 60) {
        result = "Вы мужчина";
    } else {
        result = "Вы дедушка";
    }
} else {
    if (userAge < 12) {
        result = "Вы девочка";
    } else if (userAge < 20) {
        result = "Вы девушка";
    } else if (userAge < 60) {
        result = "Вы женщина";
    } else {
        result = "Вы бабушка";
    }
}

console.log(result);



/*
if (userAge < 12) {
    result = userGender ? "Вы мальчик" : "Вы девочка";
} else if (userAge < 20) {
    result = userGender ? "Вы юноша" : "Вы девушка";
} else if (userAge < 60) {
    result = userGender ? "Вы мужчина" : "Вы женщина";
} else {
    result = userGender ? "Вы дедушка" : "Вы бабушка";
}

console.log(result);*/

/*if(userAge>60 && userGender === true) {
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
}*/


// Task 2 
/*
const user = {
    firstName:"",
    age:"",
    gender:""
};


user.firstName = prompt("как тебя зовут?");
user.age = prompt("сколько тебе лет?");
user.gender = prompt("твой пол?");


console.log(user);

*/

const user = {
    firstName: prompt("как тебя зовут?"),
    age: prompt("сколько тебе лет?"),
    gender: prompt("твой пол?")
};
console.log(user);