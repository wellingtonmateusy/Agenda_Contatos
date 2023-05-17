const form = document.getElementById('form_contatos');
let contato = [];
let ddd = [];
let tel = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha(){
    const inputNome = document.getElementById('nome');
    const inputDDD = document.getElementById('dd');
    const inputTelefone = document.getElementById('telefone');

    if(contato.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já existe na sua lista de contatos!`);
    }else{
        contato.push(inputNome.value);
        ddd.push(parseInt(inputDDD.value));
        tel.push(parseInt(inputTelefone.value));
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>(${inputDDD.value})${inputTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
    inputDDD.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}