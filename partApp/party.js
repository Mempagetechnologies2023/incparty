let menulistEle=document.getElementById("menulist");
let menuiconEle=document.getElementById("menuicon");
let XmarkEle=document.getElementById("Xmark");
let splashEl=document.getElementById('splash');
let headerEle=document.getElementById('header');
let mainEle=document.getElementById('main');

let buton1Ele1=document.getElementById('buton1');
let buton1Ele2=document.getElementById('buton2');
let buton1Ele3=document.getElementById('buton3');


menuiconEle.addEventListener('click',(e)=>{
    menuiconEle.classList.add("d-none");
    menulistEle.style.left='0';
    menulistEle.classList.remove("d-none");
});
XmarkEle.addEventListener('click',(e)=>{
    menuiconEle.classList.remove("d-none");
    menulistEle.style.left='-160px';
    menulistEle.classList.add("d-none");
})
mainEle.addEventListener('click',(e)=>{
    menulistEle.classList.add("d-none");
    menulistEle.style.left='-160px';
    menuiconEle.classList.remove('d-none');
})

setTimeout(()=>{
    splashEl.classList.add('d-none');
    headerEle.classList.remove('d-none');
    mainEle.classList.remove('d-none');
},2000)



    let slide=function(){
    let i=1;
        const intervalId =setInterval(function(){

          if(i===1){
            buton1Ele1.style.backgroundColor='blue';
            buton1Ele2.style.backgroundColor='white';
            buton1Ele3.style.backgroundColor='white';
          }
          if(i===4){
            buton1Ele1.style.backgroundColor='white';
            buton1Ele2.style.backgroundColor='blue';
            buton1Ele3.style.backgroundColor='white';  
          }
          if(i===7){
            buton1Ele1.style.backgroundColor='white';
            buton1Ele2.style.backgroundColor='white';
            buton1Ele3.style.backgroundColor='blue';  
          }

        let prevcanEle=document.getElementById('can'+i);
        let nextcanEle=document.getElementById('can'+(i+3));
        setTimeout(function(){
         prevcanEle.classList.add('d-none');
         nextcanEle.classList.remove('d-none');
       },1000)
     i=i+1;
},1000);

setTimeout(function() {
 clearInterval(intervalId);
 let firstEle=document.getElementById('can'+1);
 let secEle=document.getElementById('can'+2);
 let thirdEle=document.getElementById('can'+3);
 let lastdEle=document.getElementById('can'+9);
 let lastsecdEle=document.getElementById('can'+8);
 let lastthirddEle=document.getElementById('can'+7);

 firstEle.classList.remove('d-none');
 secEle.classList.remove('d-none');
 thirdEle.classList.remove('d-none');
 lastdEle.classList.add('d-none');
 lastsecdEle.classList.add('d-none');
 lastthirddEle.classList.add('d-none');
 slide();
}, 9000);
}

slide();

