'use strict';

const fn = () => {
  const objConst = { name: 'Dmytro' };
  let objLet = { name: 'Dmytro' };
  
  objConst.name = 'Yevmenenko';
  objLet.name = 'Yevmenenko';
  
  objLet = { name: 'Dmytro Yevmenenko' };

  console.log(objConst.name);
  console.log(objLet.name);
};
fn();

const createUser = (name, city) =>{
    return {name, city}
};
console.log(createUser('Dmytro', 'Kyiv'));
