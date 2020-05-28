//criar um metodo de callback simples para exibicao
//cadastro de usuario
// 1 - metodo principal para obter um usuario
// 2 - metodo de callback

function obterUsuario(callback){
    //por convenção passamos no callback dois parametros o primeiro é o parametro de erros
    // e o segundo e o parametro de valor
    //caso não sigamos a convenção podemos criar novos problemas com possiveis integrações com outras API's que disponibilizam isso.
    return callback(null, {
            id: 1,
            nome: 'Fabiano Filho do Noier',
            dataNascimento: new Date()
    } )
}

function obterEndereco(id, callback){

    return callback(null, {
        rua: 'Dos matutos',
        numero: 123
    })
}


obterUsuario( function resolverUsuario(erro, usuario){
    if(erro){
        console.log('Erro maluco deu aqui msm mano e noix!',error)
        return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
        if(error2){
            console.log('Deu ruim', error)
            return;
        }

        //usuario esta no escopo do metodo obterUsuario
        console.log(`Nome: ${usuario.nome}, id: ${usuario.id}, dataNascimento: ${usuario.dataNascimento}, Endereco: ${endereco.rua}, ${endereco.numero}`)
    })
    

})