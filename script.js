function titleFlex(){
    var name = window.document.querySelector('h1#main')
    var width = window.document.body.clientWidth
    
    if (width <= 700)
        name.innerHTML = `GCM`
}

function metadata(){
    var name = window.document.querySelector('input#name')
    var result = window.document.querySelector('div.result')
    result.innerHTML = `Parabens ${name}`
}