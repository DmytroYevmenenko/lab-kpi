'use strict';
const phonebook1 = [
    {name:'A', phone:'+380111222333'},
    {name:'B', phone:'+380444555666'},
    {name:'C', phone:'+380777888999'},]


const findPhoneByName = (name) =>{
    for (const x of phonebook1) {
        if (x.name === name) return x.phone;
      }
};

console.log(findPhoneByName('A'))


const phonebook2 ={
    'A':'+380111222333',
    'B':'+380444555666',
    'C':'+380777888999'
}

const findPhoneByNameHash = (name) => phonebook2[name];

console.log(findPhoneByNameHash('C'));
