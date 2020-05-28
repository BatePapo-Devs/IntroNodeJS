/*
Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma expressão de array ou 
uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou 
elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais 
pares propriedade:valor (para objetos literais) são esperados.
*/

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6

  /*
  Um array literal mais poderoso
Criar um novo array usando um array existente como parte dele,
 não é possível utilizando apenas a sintaxe de array literal.
  O código imperativo deve ser usado ao invés da combinação de push, 
  splice, concat, etc. Com a sintaxe de espalhamento isso se torna muito mais sucinto:
  */

 var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"]

 //copiando um array

 var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

/*Uma maneira melhor de concatenar arrays
Array.concat é frequentemente usado para concatenar um array no final de um array existente. Sem a sintaxe de espalhamento é feito assim:
*/
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);

//Com a sintaxe de espalhamento se torna isso:

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

//vide: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
