//Selecione os elementos HTML (Seleção de DOM)
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnIMC = document.querySelector('#btn-imc');

const formIMC = document.querySelector('.formIMC');
const resultIMC = document.querySelector('.result');

//Informações do resultado na tela
const spanIMC = document.querySelector('#imc');
const strongClassificacao = document.querySelector('#classificacao');

const btnRefazer = document.querySelector('#btn-refazer');

//inicia com a área de resultado escondida
resultIMC.style.display = 'none';

function calcularIMC() {

  // == comparação (igualdade)
  // != comparação (diferença)
  // && e
  // || ou

  //se o valor do peso e da altura forem diferentes de vazio ''
  if (peso.value != '' && altura.value != '') {

    formIMC.style.display = 'none';
    resultIMC.style.display = 'flex'; //deixar o none e reassumir o flex

    //Guardando os valores digitados dentro dos inputs
    let valorPeso = peso.value;
    let valorAltura = altura.value;

    //Fórmula: IMC = peso / (altura x altura).
    let imc = valorPeso / (valorAltura * valorAltura);

    let classificacao = '';
    let cor = '';

    if (imc < 18.5) {
      classificacao = 'Magreza';
      cor = '#ff0000';
    }

    //senão for menor que 18.5, mas for menor ou igual a 24.9
    else if (imc <= 24.9) {
      classificacao = 'Normal';
      cor = '#00FF19';
    }

    else if (imc <= 29.9) {
      classificacao = 'Sobrepeso';
      cor = 'orange';
    }

    else if (imc <= 39.9) {
      classificacao = 'Obesidade';
      cor = '#ff0000';
    }

    //Caso contrário de todos os IFs
    else {
      classificacao = 'Obesidade Grave';
      cor = '#A10000';
    }

    //escrevendo no html
    spanIMC.innerHTML = imc.toFixed(2);
    spanIMC.style.color = cor;

    //Pintar os elementos
    strongClassificacao.innerHTML = classificacao;
    strongClassificacao.style.color = cor;
  }//fim do if

  //caso contrário do if que verifica os valores vazios
  else{
    alert('Preencha todos os campos!');
  }

}

//Evento do usuário
btnIMC.addEventListener('click', calcularIMC);

//////////////////////////////////////////////////////////////////////////
//Refazer o teste

function refazerIMC() {
  formIMC.style.display = 'flex';
  resultIMC.style.display = 'none';

  altura.value = '';
  peso.value = '';
}

btnRefazer.addEventListener('click', refazerIMC);

