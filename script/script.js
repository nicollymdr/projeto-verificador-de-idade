function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','imagens/babyboy.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescentman.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/youngman.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldman.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/babygirl.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescentwoman.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/youngwoman.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}