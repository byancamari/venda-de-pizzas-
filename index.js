'use scrict';

let somaMussarela = 0 ;
let somaCalabresa = 0;
let somaPortuguesa= 0;
let vendaMussarela = 0.00;
let vendaCalabresa = 0.00;
let vendaPortuguesa= 0.00;

let btnVendas = document.getElementById("vendas");
let btnEstorno = document.getElementById("estorno");
let btnPlanilha = document.getElementById("export");

//eventos 
btnVendas.addEventListener("click",venda,false);
btnEstorno.addEventListener("click",estorno,false);
btnPlanilha.addEventListener("click",planilha,false);
 
//funções
function venda (e)
{
   if(document.getElementById("mussarela").checked)
   {
       somaMussarela== somaMussarela+1;
       vendaMussarela= vendaMussarela+ 25.00;
       document.getElementById('resultadoMussarela').innerHTML= somaMussarela
       document.getElementById('vendaMussarela').innerHTML= vendaMussarela.toFixed(2)
   } else  if (document.getElementById('calabresa').checked)
   {
   somaCalabresa= somaCalabresa+1 
   vendaCalabresa= vendaCalabresa+25.00;
   document.getElementById('resultadoCalabresa').innerHTML= somaCalabresa
   document.getElementById('vendaCalabresa').innerHTML= vendaCalabresa.toFixed(2)
  }else if (document.getElementById('portuguesa').checked)

   {
    somaPortuguesa= somaPortuguesa+1 
    vendaPortuguesa= vendaPortuguesa+25.00;
    document.getElementById('resultadoPortuguesa').innerHTML= somaPortuguesa
    document.getElementById('vendaPortuguesa').innerHTML= vendaPortuguesa.toFixed(2)

   }
 }


 function estorno (e)
{
   if(document.getElementById("mussarela").checked)
   {
       somaMussarela== somaMussarela-1;
       vendaMussarela= vendaMussarela-25.00;
       document.getElementById('resultadoMussarela').innerHTML= somaMussarela
       document.getElementById('vendaMussarela').innerHTML= vendaMussarela.toFixed(2)
   } else  if (document.getElementById('calabresa').checked)
   {
   somaCalabresa= somaCalabresa-1 
   vendaCalabresa= vendaCalabresa-25.00;
   document.getElementById('resultadoCalabresa').innerHTML= somaCalabresa
   document.getElementById('vendaCalabresa').innerHTML= vendaCalabresa.toFixed(2)
  }else if (document.getElementById('portuguesa').checked)

   {
    somaPortuguesa= somaPortuguesa-1 
    vendaPortuguesa= vendaPortuguesa-25.00;
    document.getElementById('resultadoPortuguesa').innerHTML= somaPortuguesa
    document.getElementById('vendaPortuguesa').innerHTML= vendaPortuguesa.toFixed(2)

   }
 }