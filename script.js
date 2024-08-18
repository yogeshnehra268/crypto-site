const btc = document.getElementById('bitcoin');
const eth = document.getElementById('ethereum');
const dgc = document.getElementById('dogecoin');
const tet = document.getElementById('tether');
const sola = document.getElementById('solana');
const xrp = document.getElementById('xrp');

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': ''}
  };
  
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Cxrp20&vs_currencies=inr', options)
    .then(response => response.json())
    .then(response => {btc.innerHTML = response.bitcoin.inr; eth.innerHTML = response.ethereum.inr; dgc.innerHTML = response.dogecoin.inr; tet.innerHTML = response.tether.inr; sola.innerHTML = response.solana.inr; xrp.innerHTML = response.xrp20.inr;})
    .catch(err => console.error(err));

const rowMore =  document.querySelectorAll(".row");
const btn = document.querySelector("button");

let flag=false;


function expand(){
  if(!flag){
    rowMore[1].classList.remove("more");
    btn.innerHTML="COLLAPSE";
    flag=!flag;
  }
  else{
    rowMore[1].classList.add("more");
    btn.innerHTML="EXPAND";
    flag=!flag;
  }

}