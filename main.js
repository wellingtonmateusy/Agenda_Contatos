const form = document.getElementById('form_contatos');
const imgTim = '<img src="./imagens/tim.png" alt="Logo da Tim"/>'
const imgClaro = '<img src="./imagens/claro.png" alt="Logo da Claro">'
const imgVivo = '<img src="./imagens/vivo.png" alt="Logo da Vivo">'
let operadora;
let contato = [];
let ddd = [];
let tel = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    operadoras();
});

function operadoras(){
    if(contato.length[0] && [1] == 11 || 16 || 19 || 21 || 22 || 24 || 32 || 51 || 53 || 54 || 55 || 61 || 62 || 63 || 64 || 65 || 66 || 67 || 68 || 69 || 73 || 75 || 89 || 93 || 94 || 95 || 96  || 98  || 99){
        operadora == imgTim
    }else if(contato.length[0] && [1] == 13 || 14 || 15 || 17 || 18 || 27 || 28 || 31 || 33 || 34 || 35 || 37 || 38 || 43 || 44 || 45 || 46 || 47 || 48 || 49 || 71 || 74 || 77 || 79 || 87 || 91 || 92){
        operadora == imgClaro
    }else if(contato.length[0] && [1] === 12 || 41 || 42 || 81 || 82 || 83 || 84 || 85 || 86 || 88){
        operadora == imgVivo
    }
}

function adicionarLinha(){
    const inputNome = document.getElementById('nome');
    const inputDDD = document.getElementById('ddd');
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
        linha += `<td>${operadora}</td>`;
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