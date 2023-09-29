'use strict'; // modo restrito
//Consumindo API de CEP, do ViaCep
// https://viacep.com.br/

// Função para limpar o Formulário
const limparFormulario = () => {
    document.getElementById('rua').value ='';
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value ='';
    document.getElementById('estado').value ='';

}

// verifica se CEP é valido
const eNumero = (numero) => /^~[0-9]+$/.test(numero); //testa numero informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep); //verifica o tamanho do cep digitado e executa função de validação do cep eNumero

//função para preencher formulário
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value =endereco.uf;
}
