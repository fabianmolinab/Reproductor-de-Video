var video = document.getElementById('video'),
    btnPlay = document.getElementById('btnPlay'),
    volumen = document.getElementById('volumen'),
    icono = document.getElementById('icono'),
    tiempo = document.getElementById('tiempo')
    
tiempo.setAttribute('max', video.duration)
btnPlay.addEventListener('click',function(){
    if (icono.className === 'fa fa-play'){
        video.play()
        let intervalo = setInterval(barraTiempo, 1)
    } else {
        video.pause()
    }
    //Alternar las clases del play y pause
    icono.classList.toggle('fa-play')
    icono.classList.toggle('fa-pause')
})

tiempo.addEventListener('change', function(){
    video.currentTime = tiempo.value
})

function barraTiempo(){
    tiempo.value = video.currentTime
    if(video.ended){
        icono.className = 'fa fa-play'
    }
}

volumen.addEventListener('change', function(){
    video.volume = volumen.value 
})
