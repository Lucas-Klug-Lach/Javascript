function verificar(){
    //Area de Variáveis
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //Parte dos ifs

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var  img = document.createElement('img')      
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'assets/img/criança-M.png')
            }else if (idade < 21){
                //Adolescente
                img.setAttribute('src', 'assets/img/Adolescente-M.png')

            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'assets/img/Adulto-M.png')
            }else{
                //Idoso
                img.setAttribute('src', 'assets/img/Idoso-M.png')
            }

            //Parte do genero feminino
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'assets/img/criança-F.png')
            }else if (idade < 21){
                //Adolescente
                img.setAttribute('src', 'assets/img/Adolescente-F.png')

            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'assets/img/Adulto-F.png')
            }else{
                //Idoso
                img.setAttribute('src', 'assets/img/Idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img) 
    }
}
