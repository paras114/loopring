const menuOpenBtn=document.querySelector('.toggle_menu-btn');
const menuCloseBtn=document.querySelector('.toggle_menu-close');
const menuContainer=document.querySelector('.toggle_menu-container');
const overlay=document.querySelector('.overlay');

menuOpenBtn.addEventListener('click',()=>{
    overlay.style.setProperty('display','block')
    menuContainer.classList.add('open')
})

const closeMenu=()=>{
    overlay.style.setProperty('display','none')
    menuContainer.classList.remove('open')
}
menuCloseBtn.addEventListener('click',closeMenu)
overlay.addEventListener('click',closeMenu)