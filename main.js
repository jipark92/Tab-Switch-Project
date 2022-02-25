const btns = document.querySelectorAll('button');
const documents = document.querySelector('.info');

console.log(btns);

let numA = 0;



function tabs (){
    btns.forEach( btn => btn.addEventListener('click', ()=> {
        documents.textContent = 3;

        numA = parseInt(documents.textContent);

        console.log(numA);
    }))
       
}
tabs();