alert("boas vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//enquanto(while) o chute nao for igual(!=) ao N.S
while (chute != numeroSecreto)
    {
      chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
      // se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
      break
    } else {
       if (chute > numeroSecreto) {
           alert(`O numero secreto é menor que ${chute}`);
         } else {
           alert(`O numero secreto é maior que ${chute}`);
         }
         tentativas ++; //igual a tentativa = tentativa + 1;
        }
    }

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    /* ou
    if (tentativas > 1) {
//    alert("Isso ai! Voce acertou o numero secreto (" + numeroSecreto + ")");
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
      alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    }  */
