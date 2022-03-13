console.log("hello")

let box = document.querySelector('#box')
let boxP = document.querySelector('#box-p')
let arr = ['STUDENT','PROGRAMMER','DEVELOPER']
setInterval(function(){
    let random = arr[Math.trunc(Math.random()*3)]
    let i_1 =`<i class="fa-solid fa-graduation-cap"></i>`
    let i_2 = `<i class="fa-solid fa-code"></i>`
    let i_3 = `<i class="fa-solid fa-laptop-code"></i>`
    let color = Math.floor(Math.random()*16777215).toString(16)
    boxP.setAttribute('style',`color: #${color}`)
    if(random == arr[0]){
    boxP.innerHTML = i_1 + random    
    }
    if(random == arr[1]){
        boxP.innerHTML = i_2 + random    
    }
    if(random == arr[2]){
        boxP.innerHTML = i_3 + random    
    }
}, 1500)

let item1 = document.querySelector('.item-1')
let item2 = document.querySelector('.item-2')
let item3 = document.querySelector('.item-3')


item1.innerHTML = `<h2>1000 HOURS FOR JAVASCRİPT</h2>`
item2.innerHTML = `<h2>1000 HOURS FOR HTML/CSS</h2>`

item3.innerHTML = `<h2>1000 HOURS FOR PYTHON</h2>`


let tech = document.querySelector('#tech')
let languages =['CSS','HTML','JAVASCRİPT']

setInterval(function(){
    let color = Math.floor(Math.random()*16777215).toString(16)
    let language = languages[Math.trunc(Math.random()*3)]
    tech.setAttribute('style',`color: #${color}`)
    tech.innerHTML = `<h1>${language}</h1>`
  }, 3000);

