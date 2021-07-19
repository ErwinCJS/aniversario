window.addEventListener("scroll",function(){
    let animation = document.getElementById('my-animation')
    let positionObj = animation.getBoundingClientRect().top//nos muestra el scroll cuando esta por el elemento a quien le vamos a dar la animacion
    let sizescreen = window.innerHeight/2.5
    if(positionObj < sizescreen){
        animation.style.animation = 'move 1s ease-out'
    }
})