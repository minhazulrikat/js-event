let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let input = document.querySelector('.input');

inc.addEventListener('click',()=>{
    if(Number(input.value)+1<5){
        input.value=Number(input.value)+1;
        inc.style.cursor="pointer";
    }
    else{
        inc.style.cursor="not-allowed";
    }
})
dec.addEventListener('click',()=>{
    if(Number(input.value)>1){
        input.value=Number(input.value)-1;
        dec.style.cursor="pointer";
    }
    else{
        dec.style.cursor="not-allowed";
    }
})

let icon = document.querySelector('.nav-icon');
let aside = document.querySelector('aside');
let xBtn= document.querySelector('.x-btn');

icon.addEventListener('click',()=>{
    aside.classList.add('active');
})
xBtn.addEventListener('click',()=>{
    aside.classList.remove('active');
})
aside.addEventListener('click',(e)=>{
    if(e.target.classList.contains('active')){
        aside.classList.remove('active');
    }

})