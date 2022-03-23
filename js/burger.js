window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav-burger').addEventListener('click', function() {
        document.querySelector('#nav-burger__menu').classList.toggle("menu-is-active")
    })
})

function myFunction(x) {
    x.classList.toggle("rotate");
  }