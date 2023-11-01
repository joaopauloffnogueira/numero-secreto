/*

// Código completo do curso


alert("Bem vindo ao jogo do número secreto");

let $numeroMaximo = 100;
let $numeroSecreto = parseInt(Math.random() * $numeroMaximo + 1);
let $chute = "";
let $tentativas = 1;

while($chute != $numeroSecreto){
    $chute = prompt(`Digite um numero de 1 a ${$numeroMaximo}`);
    if($chute == $numeroSecreto){
        break;
    } else{
        if($chute > $numeroSecreto){
            alert(`O numero secreto é menor ${$chute}`);
        } else{
            alert(`O numero secreto é maior ${$chute}`);
        }
        $tentativas++;
    }
}

let $palavraTentativa = $tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens, você conseguiu achar o número secreto ${$numeroSecreto} com ${$tentativas} ${$palavraTentativa}`);

// ===================================================================================================

*/

// Exibe uma mensagem na pagina como alerta
alert('Bem vindo ao jogo do número secreto!');

// 2 tipos de referências que são Constantes (const) e Variáveis (var/let)
// var/let são do tipo variáveis que varia de um valor para outro.
// const que é do tipo constante, que sempre vai ser aquele valor.
const $numeroMaximo = 10;
let $numeroSecreto = parseInt(Math.random() * $numeroMaximo + 1);
let $chute = "";
let $tentativas = 1;

// while = enquanto a condição acontecer o bloco de codigo dentro dele sera executado como loop
// != -> Diferente
while ($chute != $numeroSecreto) {
    $chute = prompt('Escolha um numero de 1 a 10');
    if ($chute == $numeroSecreto) {
        break;
    } else {
        if ($chute > $numeroSecreto) {
            alert(`Você errou, o número secreto é menor que ${$chute}`);
        } else {
            alert(`Você errou, o número secreto é maior que ${$chute}`);
        }
        $tentativas++;
    }
}

const $palavraTentativa = $tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você descobriu o número secreto ${$numeroSecreto} com ${$tentativas} ${$palavraTentativa}`);