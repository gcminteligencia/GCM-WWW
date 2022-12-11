function titleFlex(){
    var name = window.document.querySelector('h1#main')
    var width = window.document.body.clientWidth
    
    if (width <= 700)
        name.innerHTML = `GCM`
}

function formDivisao(){
    let school = window.document.querySelector('input#iSchool')
    let theme = window.focument.getElementByName('theme')


}


window.alert(`Hello, ${school.value}!`)
/* A "Nome da Escola", Solicita palestra da Divisão de Ensino da Guarda Municipal de Altamira, para realizar a palestra sobre "Tema Sugerido" no dia "Ver datas disponíveis", no turno "Manhã/Tarde", com as turmas "Ex: 5° ano, 6°ano". Aguardo retorno no número "(93)xxxx-xxxx", falar com "Nome do requerente"*/