const apear = ()=>{
    let titulo = document.getElementById('sep-prod')    
    windowHeight = window.innerHeight;
    tituloTop = titulo.getBoundingClientRect().top    
    tituloVisible = 200    
    if(tituloTop < windowHeight - tituloVisible){
        titulo.classList.add('visible')    
    } else{
        titulo.classList.remove('visible')
    }
}

const apear2 = () =>{
    let titulo2 = document.getElementById('sep-multi')
    tituloTop2 = titulo2.getBoundingClientRect().top
    tituloVisible2 = 450
    if(tituloTop2 < windowHeight - tituloVisible){
        titulo2.classList.add('visible')
    } else{
        titulo2.classList.remove('visible')
    }

}

window.addEventListener('scroll', apear)
window.addEventListener('scroll', apear2)

apear()
apear2()