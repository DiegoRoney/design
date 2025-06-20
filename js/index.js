const $html = document.querySelector('html')
const $checkbox = document.querySelector('#dark')

// Verifica se o usuário já ativou o dark mode antes
if (localStorage.getItem('dark-mode') === 'true') {
    $html.classList.add('dark-mode')
    $checkbox.checked = true
}

// Escuta a mudança do checkbox
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
    // Salva a escolha no localStorage
    localStorage.setItem('dark-mode', $checkbox.checked)
})

