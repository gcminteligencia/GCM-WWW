function titleFlex(){
    var name = window.document.querySelector('h1#main')
    var width = window.innerWidth
    
    if (width <= 700)
        name.innerHTML = `GCM`
}

function formDivisao(){
    let school = window.document.querySelector('input#iSchool')
    let theme = window.focument.getElementByName('theme')


}

function showMenu() {
    menu = window.document.querySelector('menu#options')
    icon = window.document.querySelector('span#mBurguer')

    if (menu.style.display == 'block'){
        menu.style.display = 'none'
        icon.innerHTML = 'menu'
    }else {
        menu.style.display = 'block'
        icon.innerHTML = 'menu_open'
    }
}



/* A "Nome da Escola", Solicita palestra da Divisão de Ensino da Guarda Municipal de Altamira, para realizar a palestra sobre "Tema Sugerido" no dia "Ver datas disponíveis", no turno "Manhã/Tarde", com as turmas "Ex: 5° ano, 6°ano". Aguardo retorno no número "(93)xxxx-xxxx", falar com "Nome do requerente"*/