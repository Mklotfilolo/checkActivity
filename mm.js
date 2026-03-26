"use strict"
// local storage 



//tool and nav bar
let header=document.getElementsByClassName('header')[0];
let navBar=document.getElementsByClassName("navBar")[0];
let closeb=document.getElementsByClassName("close")[0];
let slideb=document.getElementsByClassName("slide")[0];


 closeb.classList.add("hideTooleBar");
 navBar.classList.add("hideTooleBar");


 slideb.addEventListener('click',function(){
  closeb.classList.remove("hideTooleBar");
  navBar.classList.remove("hideTooleBar");
  slideb.classList.add("hideTooleBar");
  header.style.flexDirection='row';
 });

 closeb.addEventListener('click',function(){
  closeb.classList.add("hideTooleBar");
  navBar.classList.add("hideTooleBar");
  slideb.classList.remove("hideTooleBar");
 });
//card info
const inputnme= document.getElementById('texU');
const inputdateb= document.getElementById('birthU');
const inputage= document.getElementById('ageU');
const inputmajor= document.getElementById('majorU');

let nameEl=document.getElementsByClassName('nameEl')[0];
let ageEl=document.getElementsByClassName('ageEl')[0];
let birthEl=document.getElementsByClassName('birthDayEl')[0];
let majorEl=document.getElementsByClassName('majorEl')[0];

window.onload=function(){
  inputnme.focus();
}

inputnme.addEventListener('keyup',function(){
  nameEl.textContent='Full name : ' +inputnme.value;
});
inputage.addEventListener('keyup',function(){
  ageEl.textContent='Age : ' +inputage.value;
});
inputdateb.addEventListener('click',function(){
  inputdateb.addEventListener('mouseout',function(){
  birthEl.textContent='Birth day : '+ inputdateb.value;
  });
});
inputmajor.addEventListener('click',function(){
  majorEl.textContent='Majore : ' +inputmajor.value;
});



let infoUserObject=[];



const user= function(){
const inputnmeva= inputnme.value;
const inputdatebva= inputdateb.value;
const inputageva= inputage.value;
const inputmajorva= inputmajor.value;

let infoUSER ={
  name:inputnmeva,
  age:inputageva,
  deteB:inputdatebva,
  majore:inputmajorva,
}
console.log('**************');
 console.log('user name : '+ infoUSER.name);
 console.log('user age : '+ infoUSER.age);
 console.log( 'user birthday : '+infoUSER.deteB);
 console.log('user major ' + infoUSER.majore);
 console.log('**************');

return infoUSER;
};


// user cards
let divp = document.getElementsByClassName('cardUsers')[0];
let divs=document.createElement('div')
// customize divs elements

document.body.appendChild(divp);


function cards(names,ages){
    let card = document.createElement('div');
    let title = document.createElement('p');
    let age = document.createElement('h3');
    let img = document.createElement('img');
     
    //style css
     card.style.display='inline-block';
     card.style.flexDirection='column';
     card.style.alignItems='center';
     card.style.justifyItems='center';
     card.style.background=' linear-gradient(60deg,rgba(122, 181, 201, 0.934),rgba(60, 193, 236, 0.662))';
     card.style.width='200px';
     card.style.height='auto';
     card.style.borderRadius='20px';
     card.style.borderLeft="4px inset rgb(129, 10, 198) ";
     card.style.borderBottom="2px inset rgb(129, 10, 198) ";
     card.style.padding='10px';
     card.style.margin='10px';
     card.className='AllCards';
     card.style.animationDelay='0s';
     img.style.aspectRatio = '16/9';
     title.style.fontSize='1.3rem';
     title.style.borderRadius='20px';
     title.style.padding='5px';
     title.style.boxSizing='border-box';
       
     //conact
     title.innerText=names;
     age.innerText=ages;   
     
     //add
     card.appendChild(title);
     card.appendChild(age);
     card.appendChild(img);
     divp.appendChild(card);
}
let names=['lotfi','ahmed','student','riyad','tota','mari','soad','lo'];
let ages=[20,40,5,60,72,56,42,55,2];

function checkLenth(){
    if(ages.length < names.length)return ages.length;
    else return names.length;
}
let checkFunctionRESULTE=checkLenth();

for(let i=0;i<checkFunctionRESULTE;i+=1){
    cards(names[i],ages[i]);
}


