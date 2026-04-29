const mynumber2 = document.getElementById("my-number2");
const mynumber3 = document.getElementById("my-number3");
const checkresuelt = document.getElementById("check-resuelt");
const resultDisplay = document.getElementById("result-display");

 checkresuelt.addEventListener ("click" , function(){
    const rawVAL2 = mynumber2.value.trim () ; 
    const rawVAL3 = mynumber3.value.trim () ;
    
    
    if (rawVAL2 === "" || rawVAL3 === "" || isNaN(rawVAL2) || isNaN(rawVAL3)){
        alert ("please put number ");
        return;
    }
 
    const VAL2 = Number(rawVAL2); 
    const VAL3 = Number(rawVAL3);

   const resuelted = VAL2 * VAL3; 

  resultDisplay .innerText = "total :" + resuelted ;
  

    

 });
 const coloring = document.getElementById("colo-ring");
 const checkbtn = document.getElementById("check-btn");
 checkbtn.addEventListener("click" , function(){

   let colorchosing = coloring.value ; 

 document.body.style.backgroundColor = colorchosing ;
 });
const linkss = document.getElementById("link-ss");
const fotbtn = document.getElementById("fot-btn");
const resultplay = document.getElementById("result-play");

fotbtn.addEventListener("click", function() { 
    let url = linkss.value;
    let image = document.createElement("img"); 
    image.src = url; 
    image.style.width = "300px";
    image.style.display = "block";

    resultplay.appendChild(image);
});
const number = document.getElementById("num-ber");
const resbtn = document.getElementById("res-btn");
const resulatplaying = document.getElementById("resulat-playing");

resbtn.addEventListener("click" , function()  {
    let valInput =  Number(number .value) ; 
let numberrsult = valInput % 5 ;

resulatplaying.innerText = "Si l'on divise " + valInput + " par 5, le reste est de " + numberrsult;


});
const agenum = document.getElementById("age-num");
const resultbtn = document.getElementById("result-btn");
const resultadplay = document.getElementById("resultad-play");
resultbtn .addEventListener("click" , function() {
 let ageInput = Number (agenum.value);
 let dayresulted = ageInput * 365 ;
 resultadplay.innerText = "Vous avez vécu environ " + dayresulted + " jours.";
});
const agefirst = document.getElementById("age-first");
const agesec = document.getElementById("age-sec");
const chekingbtn = document .getElementById("cheking-btn");
const numberplay = document.getElementById("number-play");
chekingbtn.addEventListener("click" , function() {
   let AgeInput = Number(agefirst.value);
   let age2Input = Number(agesec.value);
   if(age2Input<AgeInput){
    alert ("Error!!")
    return;
   }
   let firstresult = AgeInput * 365 ; 
   let secreslt = age2Input * 365 ; 
  
   numberplay .innerText = "Vous avez vécu " + firstresult  + "jours" +  "Il y a encore " + secreslt + "jours avant vos"+  age2Input + " ans";


});
const btn = document.getElementById("confirmer-d");
const mafoto = document.getElementById("ma-foto");
btn .addEventListener ("click", function(){

    let reponse = confirm("you want foto 1? a (OK ) , Cancel b(no)");
    if (reponse === true){
        mafoto.src = "7d248ff522bfbe29f18b73c07c609add.jpg";
    }else {
        mafoto.src ="Capture d'écran 2026-04-02 005940.png";
    }
});