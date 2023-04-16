// O que Falta Fazer: Verificar pq depois das 22 hrs ele já mostra a data do dia seguinte; Corrigir o bug do mobile
var dayIndex = 0;
var globalIndex = 0;

window.onload = function(){
    GetDay();
    alert(GetDayIndex());
    dayIndex = GetDayIndex();
    globalIndex = dayIndex;
    GetWord(dayIndex);
    // alert(Object.keys(palavras).length-1); //  Mostra o tamanho atual do JSON, ou seja a quantidade de palavras.  
    // alert("Version 1.20");
};




function GetDayIndex(){
  var diadeHoje = new Date();
  var anoAtual = diadeHoje.getFullYear();
  var StringdoDiaPrimeiroDeJaneirodoAnoAtual = "01,01,"+anoAtual;
  var DataPrimeirodeJaneiroAnoAtual = new Date(StringdoDiaPrimeiroDeJaneirodoAnoAtual);
  var QtdMilisegundosPorDia = 86400000;
  return Math.ceil((diadeHoje - DataPrimeirodeJaneiroAnoAtual)/QtdMilisegundosPorDia);
}    
  
  

function GetWord(dia){
    var palavraDoDia = ""+palavras[dia].palavra;
    var significadoDoDia = palavras[dia].significado;
    var exemploDoDia = palavras[dia].exemplo;
    palavraDoDia = palavraDoDia.toUpperCase();
    document.getElementById("word").innerText = "Palavra" + "("+ globalIndex + "): "+ palavraDoDia;
    document.getElementById("meaning").innerText = "Significado: " + significadoDoDia;
    document.getElementById("sentence").innerText = "Exemplo: " + exemploDoDia;
}


function GetDay(){    
        var today = new Date();
        var day = (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()); // retorna o dia do mês 1 - 31
        var realMonth = today.getMonth() + 1; // retorna 0 para Janeiro e 11 para Dezembro por isso somar mais 1
        var month = (realMonth < 10 ? "0" + realMonth : realMonth); 
        var year = today.getFullYear();
        var realDate = day + "/" + month + "/" + year;
        document.getElementById("Date").innerText += " (" + realDate + ")";
    }

function NextWord(){
  globalIndex < Object.keys(palavras).length-1 ? globalIndex++ : globalIndex=0
  GetWord(globalIndex);
}    


function PreviousWord(){
  globalIndex > 0 ? globalIndex-- : globalIndex=Object.keys(palavras).length-1;
  GetWord(globalIndex);
}    