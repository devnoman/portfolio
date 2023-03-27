let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar1')
let navlist = document.querySelector('.navlist')


burger.addEventListener('click', () =>{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    })

navlist.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav'); 
})



   