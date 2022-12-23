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

function formDivisao(){
    let result = window.document.querySelector('div#result')
    let school = window.document.querySelector('input#iSchool')
    let theme = window.document.getElementsByName('theme')
    let date = window.document.querySelector('input#iDate')

    const bigdate = new Date()
    year = bigdate.getFullYear()
    month = bigdate.getMonth() + 1
    day = bigdate.getDay()

    if (result.style.display == 'block'){
        result.style.display = 'none'

    }else{
        result.style.display = 'block'

    }

    result.innerHTML = `O colégio <strong>${school.value}</strong>, Solicita palestra da Divisão de Ensino da Guarda Municipal de Altamira, para realizar a palestra sobre <strong>${theme[0].value}</strong> no dia <strong>${date.value}</strong>"Ver datas disponíveis", no turno <strong>"Manhã/Tarde"</strong>, com as turmas "Ex: 5° ano, 6°ano". Aguardo retorno no número "(93)xxxx-xxxx", falar com "Nome do requerente ${year} ${month} ${day}`
}
