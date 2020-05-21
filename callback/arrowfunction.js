/*

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target.
 Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

Uma arrow function não tem seu próprio this; o valor this do contexto léxico encapsulado é usado. Ex: Arrow functions seguem as regras normais de pesquisa de variáveis.
 Então, ao procurar por this, que não está no escopo atual elas acabam encontrando this no escopo encapsulado. 
Assim, no código a seguir, o this dentro da função que é passado para setInterval tem o mesmo valor do this na função lexicamente encapsulada:
*/

//exemplo:

function Person(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| corretamente se refere ao objeto Person
    }, 1000);
  }
  
  var p = new Person();

  //vide: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions