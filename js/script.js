// боковое меню навигации
var mobileMenuActiveClass = 'nav_mobile-active'
var burgerButton = document.querySelector('.burger_btn')
var mobileMenu = document.querySelector('.nav_mobile')
var mobileMenuBg = document.querySelector('.nav_mobile__bg')
var navLinks = document.querySelectorAll('.head_nav__link')

function showMenu () {
    mobileMenu.classList.add(mobileMenuActiveClass)
}

function hideMenu () {
    mobileMenu.classList.remove(mobileMenuActiveClass)
}

burgerButton.addEventListener('click', showMenu)
mobileMenuBg.addEventListener('click', hideMenu)

//  плавный переход по якорям (не работает)
for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i]
    var href = link.getAttribute('href')
    var id = href.substring(1)

    app.scrollTo(link)
}
