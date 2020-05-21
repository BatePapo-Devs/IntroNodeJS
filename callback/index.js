//Criar dois metodos de callback para exibicao da funcionalidade em js

//obter um usuario e obter o endereco desse usuario

function obterUsuario(callback){

   return callback(null, {
        id: 1,
        nome: 'Faboy Filho',
        dataNascimento: new Date()
    })

}

function obterEndereco(id, callback){

   return callback(null,{
        rua:'Rua do Idle',
        numero:'404'
    })
}

obterUsuario( function resolveUsuario(erro, usuario) {
            if(erro){
                console.error("Deu erro no bagulho!!!", error)
                return;
            }

            obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
                if(error2){
                    console.error('Deu ruim', error)
                    return;
                }

                //usuario e o endereco esta dentro do escopo de obterEndereco
                console.log(`Nome: ${usuario.nome}, id: ${usuario.id}, rua: ${endereco.rua} `);


            })
})