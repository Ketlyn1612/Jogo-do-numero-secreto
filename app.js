alert('Boas Vindas ao número secreto');
let numeroMaximo = 100;
let numeroSecreto =parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto); 
let chute;
let tentativas = 1;

while ( chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    }else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é  maior que ${chute}`);
        }
        tentativas++;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
     if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
        }
    }

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

  function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
  }

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
}









