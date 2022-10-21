const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch-shadow')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})