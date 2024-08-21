const cursor= document.querySelector(".cursor");
const holes = Array.from(document.querySelectorAll(".hole"));
const board = document.querySelector(".board");
let score=0;

const sound= new Audio ('./smash.mp3')
const scoreEl = document.querySelector(".score span")

function run(){
    const i = Math.floor(Math.random() * holes.length);
    const y = Math.floor(Math.random() * holes.length);
    const j = Math.floor(Math.random() * 3);
    const hole = holes[i]
    const bombP = holes[y]
    const bomb2P = holes[j]
    let timer=null
    let timer2=null
    let timer3=null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = './mole.png'


    const bomb = document.createElement('img')
    bomb.classList.add('bomb')
    bomb.src = './download.jpeg'

    const bomb2 = document.createElement('img')
    bomb2.classList.add('bomb')
    bomb2.src = './download.jpeg'
    
    img.addEventListener('click',() =>{
        score+=10;
        sound.play()
        scoreEl.textContent=score
        img.src ='./mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() =>{
            hole.removeChild(img)
            run()
        },500)
    })

    bomb.addEventListener('click',stop)
    bomb2.addEventListener('click',stop)

    hole.appendChild(img)
    bombP.appendChild(bomb)
    bomb2P.appendChild(bomb2)

    timer = setTimeout(() =>{
        hole.removeChild(img)
        run()
    },1500)

    timer2 = setTimeout(() =>{
        bombP.removeChild(bomb)
    },1500)

    timer3 = setTimeout(() =>{
        bomb2P.removeChild(bomb2)
    },1500)
}
run()

function stop(){
    
    board.style.display = 'none'
    scoreEl.textContent=score
    const reset = document.createElement('input')
    document.classList.add('reset')
    setTimeout(() =>{
    },500)
}
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY +'px'
    cursor.style.left = e.pageX +'px'
})
window.addEventListener('mousedown', ()=>{
    cursor.classList.add('active')
})
window.addEventListener('mouseup', ()=>{
    cursor.classList.remove('active')
})