function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    const img = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        img.setAttribute('src', 'assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito de oculos escuro com fundo azul')
    }else{
        img.setAttribute('src', 'assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo')
    }
}
