//1
let ourPlanetName = "Earth";
let currentUserNameA = "John";
//2
const birthday = '18.04.1982';

const age = someCode(birthday);

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?

/*We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.
    In this code, birthday is exactly like that. So we could use the upper case for it.In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.*/
//3
let admin,name;
name="John";
admin=name;
alert(admin);
