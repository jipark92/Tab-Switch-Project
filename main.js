const historyBtns = document.querySelector('.history-btn');
const visionBtns = document.querySelector('.vision-btn');
const goalsBtns = document.querySelector('.goals-btn');

const infoBoard = document.querySelector('.info');

historyBtns.addEventListener ('click', ()=>{
    infoBoard.textContent = "HISTORY Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam explicabo cumque distinctio quia consectetur consequuntur delectus iure eius. Ea."
    infoBoard.textContent += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam explicabo cumque distinctio quia consectetur consequuntur delectus iure eius. Ea."
})


visionBtns.addEventListener ('click', ()=>{
    infoBoard.textContent += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam explicabo cumque distinctio quia consectetur consequuntur delectus iure eius. Ea."
    infoBoard.textContent += "VISION Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam explicabo cumque distinctio quia consectetur consequuntur delectus iure eius. Ea."
})


goalsBtns.addEventListener ('click', ()=>{
    infoBoard.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam explicabo cumque distinctio quia consectetur consequuntur delectus iure eius. Ea."
    infoBoard.textContent += "GOALS Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam explicabo cumque distinctio quia consectetur consequuntur delectus iure eius. Ea."
})
