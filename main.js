const menu = document.querySelector('.menu')
const sideMenu = document.querySelector('.side-menu')
const closeMenu = document.querySelector('.close-menu')

console.log(sideMenu.style.display)

const handleMenu = () => {
    
    if (sideMenu.classList.contains('hidden')){
        menu.classList.add('hidden')
        sideMenu.classList.remove('hidden')
        closeMenu.classList.remove('hidden')
    }
    else {
        closeMenu.classList.add('hidden')
        menu.classList.remove('hidden')
        sideMenu.classList.add('hidden')
    }
    // if (sideMenu.style.display !== 'none'){
    //     sideMenu.style.display = 'none'
    //     closeMenu.style.display = 'none'
    //     menu.style.display = 'block'
    // }
    // else {
    //     sideMenu.style.display = 'flex'
    //     menu.style.display = 'none'
    //     closeMenu.style.display = 'block'
    // }
}

menu.addEventListener('click', handleMenu)
closeMenu.addEventListener('click', handleMenu)