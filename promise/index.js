//objetivo obter um usuario
//obter o endereco

const util = require('util');

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario(){
    //pode existir uma api, ou uma base de dados, ou arquivos que voce consome essa informação
    return new Promise( (res,rej)=> {
            if(false){
                console.error('Erro doidao');
                return rej("ERRO 4564564564 ");
            }else{ 

                return res({
                    id: 1,
                    nome: 'Enorme da terra',
                    dataNascimento: new Date()
                })
            }
        })
}

function obterEndereco(id, callback){

    return callback(null,{
         rua:'Rua do Idle',
         numero:'404'
     })
 }

 //realiza a chamada das promises
 async function main(){
    try{

        const usuario = await obterUsuario();
        const endereco = await obterEnderecoAsync(usuario.id);
        //SPREAD
        const usuarioCompleto = {
            ...usuario,
            ...endereco
        }

        return usuarioCompleto;

    }catch(error){
        console.log('deu ruim de mais..',error)
    }
 }

 main()
    .then( (sucesso) => {
        console.log("Com sucesso a apresentação de: ", sucesso)
    })
    .catch( (error) => {
        console.error('Deu ruim de mais: ', error)
    })