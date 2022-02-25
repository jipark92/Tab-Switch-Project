const btns = document.querySelectorAll('button');

console.log(btns);

function tabs (){
    btns.forEach( btn => btn.addEventListener('click', ()=> {
        console.log('clicked');
    }))
       
}
tabs();