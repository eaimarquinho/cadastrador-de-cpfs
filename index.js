const CPF = require('cpf');
const fs = require('fs');

//  Imprima uma mensagem de boas vindas
console.log('Seja bem vindo ao Cadastrador de CPF');

//Capturar a informação CPF digitado pelo usuario
const cpf = process.argv[2]; 

//Validar o CPF...
let cpfValido = CPF.isValid(cpf)
//Caso a informação seja um CPF valido salvar no arquivo dados.txt caso contrario exibir mensagem de erro
if(cpfValido){
    console.log("CPF Válido! Salvando")
    fs.writeFileSync('dados.txt',cpf + '\n',{flag:'a'} );
} else {
    console.log('CPF inválido. Digite direito')
}

console.log('FIM');