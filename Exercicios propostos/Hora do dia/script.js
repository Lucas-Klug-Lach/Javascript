function carregar(){
    //Pegar as divs
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    //Pegar a hora do sistema
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    //Manda a a mensagem falando a hora
    msg.innerText = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'imagens/Manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/Tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#515154'
    }

}



