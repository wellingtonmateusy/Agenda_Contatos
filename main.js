const form = document.getElementById('form_atividade');
let contato = [];
let tel = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if(contato.includes(inputNome.value)){
        alert(`A atividade ${inputNome.value} já foi inserida!`)
    }else{
        contato.push(inputNome.value);
        tel.push(parseInt(inputTelefone.value));
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}