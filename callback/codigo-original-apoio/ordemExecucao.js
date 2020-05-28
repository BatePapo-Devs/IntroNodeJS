let salarioBruto = 3000;
let salarioLiquido;

/*
//codigo com erro de execução devido o não preenchimento da variavel desconto...
function getsalario(salarioBruto){
    let liquido = 0;
    let desconto = setTimeout(function(){
        return 1000;
    },5000)
    liquido = parseInt(salarioBruto) - desconto;
    return liquido;
}

salarioLiquido = getsalario(salarioBruto);

console.log('Salario liquido é: ', salarioLiquido);

*/

function getDescontoEspecial(salarioDescontado, callback) {
    let desconto = 0;
    setTimeout(function(){
        desconto = ( parseInt(salarioDescontado) / 100 )*15;
        return callback(desconto);
    },5000)
}

function getSalario(salarioBruto, callback) {
    let liquido = 0;
    
    liquido = salarioBruto - 500;

    return callback(liquido);
}


getSalario(salarioBruto, (salarioComdesconto) => {

    getDescontoEspecial(salarioComdesconto, (salarioFinal) =>{

        console.log(`O salario novo é de ${salarioComdesconto}`);
        console.log(`o resultado é de ${salarioFinal}`)
    })


});

