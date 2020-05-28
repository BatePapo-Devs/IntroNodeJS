const util = require('util')
//a lib util do node permite que nós transformamos um callback em uma promisse
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    //arrow function () => {}
    //possui escopo lexico, o escopo é geral e não estrito a função. Vide arquivo arrowfunction.js

  return new Promise( (res,rej)  =>  {
    //pode existir alguma logica de obtencao de usuario de uma base...
    if(false){
        console.error("Erro maluco!")
        return rej("ERRO 56449888745");
    }else{
        return res({
            id: 1,
            nome: 'Fabiano Filho do Noier',
            dataNascimento: new Date()
        })
    }
    })
}

function obterEndereco(id, callback){
    return callback(null, {
        rua: 'Dos matutos',
        numero: 123
    })
}

async function main(){

    try {
        const usuario = await obterUsuario();
        const endereco = await obterEnderecoAsync(usuario.id);

        //Spread sintax, usando espalhamento para criar um objeto a partir de um objeto iteravel.
        const usuarioCompleto = {
            ...usuario,
            ...endereco
        }

        return usuarioCompleto;
        
    } catch (error) {
        console.log("Deu ruim",error);
    }
    
}

main()
    .then( (sucesso) => {
        console.log("Aqui vai ter: ", sucesso)
    })
    .catch((error) => console.log(error))

