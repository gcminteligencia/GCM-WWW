let menu = window.document.querySelector('menu#options')

function titleFlex(){
    var name = window.document.querySelector('h1#main')
    var width = window.innerWidth
    
    if (width <= 700)
        name.innerHTML = `GCM`
}


function showMenu(){
    let icon = window.document.querySelector('span#mBurguer')

    if (menu.style.display == 'block'){
        menu.style.display = 'none'
        icon.innerHTML = 'menu'
    }else {
        menu.style.display = 'block'
        icon.innerHTML = 'menu_open'
    }
}

function keepMenu(){
    let widthScreen = window.innerWidth

    if (widthScreen >= 768){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}


/* A "Nome da Escola", Solicita palestra da Divisão de Ensino da Guarda Municipal de Altamira, para realizar a palestra sobre "Tema Sugerido" no dia "Ver datas disponíveis", no turno "Manhã/Tarde", com as turmas "Ex: 5° ano, 6°ano". Aguardo retorno no número "(93)xxxx-xxxx", falar com "Nome do requerente"*/