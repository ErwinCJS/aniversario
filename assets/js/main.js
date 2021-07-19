AOS.init();

let linksheader = document.querySelector('.links-header')
let traffic = true

document.querySelector('.button-menu').addEventListener("click",function(){
    if(traffic == true){
        document.querySelector('.button-menu').style.color= '#fff'
        traffic = false
    }else{
        document.querySelector('.button-menu').style.color= '#000'
        traffic = true
    }
    linksheader.classList.toggle("menuEffect")
})


let locationWindow = window.pageYOffset//me muestra en que parte se encuentra la ventana principal

window.addEventListener("scroll",function(){
    let displacementCurrent = window.pageYOffset
    if(locationWindow >= displacementCurrent){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    locationWindow = displacementCurrent
})