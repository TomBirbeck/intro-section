const menu = document.querySelector('.menu')
const sideMenu = document.querySelector('.side-menu')
const closeMenu = document.querySelector('.close-menu')
const menuButton = document.querySelector('.menu-button')
// const image = document.querySelector('.menu-img')



const handleMenu = () => {
    
    if (sideMenu.style.opacity === '0'|| sideMenu.style.opacity === ""){
        menu.style.opacity = 0;
        sideMenu.style.opacity = 1;
        closeMenu.style.opacity = 0.6;
    }
    else {
        closeMenu.style.opacity = 0;
        menu.style.opacity = 0.6;
        sideMenu.style.opacity = 0
    }
}

// menu.addEventListener('click', handleMenu)
// closeMenu.addEventListener('click', handleMenu)
menuButton.addEventListener('click', handleMenu)