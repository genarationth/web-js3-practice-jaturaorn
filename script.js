const add = (a,b) => {
    return a+b;
}
console.log(add(20,10));

const subtract = (a,b) => a-b;
console.log(subtract(40,10));

const multiply = (a,b) => a*b;
console.log(multiply(2,300));

const divide = (a,b) => a/b;
console.log(divide(400,2));

const info = (Name = 'John',Location = 'Brazil',Hobby = 'Swimmimg') =>{
    console.log('Hi, my name is ' + Name + ' I live in ' + Location +  " and enjoy " + Hobby);
}
info();
