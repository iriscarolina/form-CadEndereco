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
