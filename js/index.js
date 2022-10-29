const $html = document.querySelector('html')
const $checkbox = document.querySelector('#dark')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})