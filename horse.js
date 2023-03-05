var horse1=document.querySelector("#horse-1");
var horse2=document.querySelector("#horse-2");
var horse3=document.querySelector("#horse-3");
var horse4=document.querySelector("#horse-4");
var horse5=document.querySelector("#horse-5");
var horse6=document.querySelector("#horse-6");
var startButton=document.querySelector(".start-button");
var horseSelectionTexts=document.querySelectorAll(".horse-selection-text");
var horses=document.querySelectorAll(".horse");
var remainder=document.querySelector("#remainder");
var bet=document.querySelector("#bet");
//var raceField=document.querySelector(".race-field");
var horseSelectionField=document.querySelector(".horse-selection-field");
var finishLineValue=document.querySelector(".finish-line").offsetLeft-100;
var resultText=document.querySelector(".result-text");


var bakiye=5;
var sayac=0;
startButton.addEventListener("click",function(){
    if(remainder.textContent<bet.value ||bet.value==""){
         alert("iddia değeri geçersiz");
    }else{
        for(eleman of horseSelectionTexts){
            if(eleman.classList.contains("selected")){
                sayac++;
            }
        }
        if(sayac!=1){
            alert("at seçimi yapınız");
        }else{

            raceInterval=setInterval(race,1000);
            bet.disabled=true;
            horseSelectionField.classList.add("hide");
            startButton.disabled=true;
            startButton.style.backgroundColor="grey";
            resultText.classList.add("hide");
            
        }
        
    }
    
    
});

let random1=0; let random2=0; let random3=0; let random4=0; let random5=0; let random6=0;

function race(){    
    let randoms=[random1,random2,random3,random4,random5,random6];
    
    random1+=random();
    horse1.style.marginLeft=random1+"px";  

    random2+=random();
    horse2.style.marginLeft=random2+"px";

    random3+=random();
    horse3.style.marginLeft=random3+"px";

    random4+=random();
    horse4.style.marginLeft=random4+"px";

    random5+=random();
    horse5.style.marginLeft=random5+"px";

    random6+=random();
    horse6.style.marginLeft=random6+"px";
    
    
    for(eleman of horses){
      for(let i=0;i<randoms.length;i++){
           
        if(randoms[i]>=finishLineValue && eleman.offsetLeft>=finishLineValue+145){
            
            eleman.classList.add("winner");
            
            if(eleman.classList.contains("selected") && eleman.classList.contains("winner")){
                win();
                
            }else{
                lose(); 
                
            }       
            finalOperations();
            clearInterval(raceInterval);
            
        }
      }
    }
   
}

var rnd;

var random=function(){
    
    rnd=Math.floor(Math.random()*100);
    return rnd;
}

function selectHorse(element){
    for(eleman of horseSelectionTexts){
        eleman.style.backgroundColor="#FF2E63";
        eleman.classList.remove("selected");
    }
    element.style.backgroundColor="#08D9D6";
    element.classList.add("selected");
    for(eleman of horses){
        eleman.classList.remove("selected");
        if(element.textContent==eleman.textContent){
            eleman.classList.add("selected");
            
        }
    }
}


function win(){
    
    bakiye=bakiye+parseInt(bet.value);
    remainder.textContent=bakiye;
    resultText.classList.remove("hide");
    resultText.textContent="Yarışı Kazandınız"; 
    
}


function lose(){
     
    bakiye=bakiye-bet.value;
    remainder.textContent=bakiye;
    resultText.classList.remove("hide");
    resultText.textContent="Yarışı Kaybettiniz";
    
}

function finalOperations(){
    bet.value="";
    bet.disabled=false;
    horseSelectionField.classList.remove("hide");
    startButton.disabled=false;
    startButton.style.backgroundColor="#3A98B9";
    sayac=0;
    if(bakiye==0){
        resultText.textContent="Yarışı Kaybettiniz GAME OVER";
    }
    random1=0;random2=0;random3=0;random4=0;random5=0;random6=0;
    for(eleman of horses){
        eleman.style.marginLeft="10px";
    }
}