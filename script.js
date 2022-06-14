function titleFlex(){
    var name = window.document.querySelector('h1#main')
    var width = window.document.body.clientWidth
    
    if (width <= 700)
        name.innerHTML = `GCM`
}

function metadata(){
    var name = window.document.querySelector('input#name')
    var cpf = window.document.querySelector('input#cpf')
    var contact = window.document.querySelector('input#contact')
    var email = window.document.querySelector('input#email')
    var service = window.document.getElementsByName('typeaten')
    var result = window.document.querySelector('div.result')
    var error = window.document.querySelector('div.error')

    if (name.value <= 3){
        window.alert('Atenção, digite um nome válido.')
    }

    if (name.value.length >= 3 && cpf.value.length >= 11 && service.value != undefined){
        result.innerHTML = `Parabéns Sr(a) ${name.value}, portador do CPF/CNPJ ${cpf.value}, do contato ${contact.value} e do email ${email.value} sua ocorrência foi registrada com sucesso para atender os serviços: ${service.value}. Tenha um bom dia.`
    }else {
        window.alert('Atenção, preencha todos os dados antes de enviar.')
    }
}