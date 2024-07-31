//const -> Constante (valor que não pode ser modificado)
//let -> Não permite uma redeclaração da variável e não "vaza" o escopo
//var -> Variável clássica

const infoLgpd = document.querySelector('.info-lgpd');
const btnLgpd = document.querySelector('.info-lgpd button');

//console.log(infoLgpd);
//console.log(btnLgpd);

//Consultar o navegador para verificar se o usuário já fechou a informação da LGPD
if(localStorage.getItem('fechouLGPD') == 'sim'){
  infoLgpd.style.display = 'none';
}

function fecharLGPD(){
  //alert('fechou');
  infoLgpd.style.display = 'none';

  //Guardando no browser do usuário uma informação
  localStorage.setItem('fechouLGPD','sim');

}

//Add um evento de clique ao botão da lgpd
btnLgpd.addEventListener('click',fecharLGPD);