

//Programa de calculo de salario
// queremos a plr bem alta

let salarioBruto = 2000;
let salarioLiquido;

function getSalario(salarioBruto, callback){


    let liquido = 0;

    liquido = parseInt(salarioBruto) -500;

    return callback(liquido);
}

function getDescontoEspecial(salario, callback){
    let desconto = 0;
    setTimeout(function(){
        desconto = ( parseInt(salario) /100) * 15;
        return callback(desconto)
    },5000)
}

getSalario(salarioBruto, (salarioComDesconto)=> {
    getDescontoEspecial(salarioComDesconto, (salarioFinal)=>{
        console.log(`o salario novo: ${salarioComDesconto}`);
        console.log(`o resultado: ${salarioFinal}`);
    })
})


