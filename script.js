const centerEl=document.querySelector('.center-item')
const menu=document.querySelector('.menu')

centerEl.addEventListener('mouseover',()=>{
    menu.classList.add("change")
})

menu.addEventListener('mouseleave',()=>{
    menu.classList.remove("change")
})