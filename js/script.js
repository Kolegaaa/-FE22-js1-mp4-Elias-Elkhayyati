const myAnimation = {
  targets : '.div-container',
  translateX: 1150 ,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 2000,
  delay: 800,
  autoplay:false
  // display: block

}

const animeH4 ={
  targets: 'h4',
  translateX: 770,
  direction: 'alternate',
  loop: true,
  delay: function(el, i, l) {
    return i * 100;
  }
}

const eyesbrownAnime = {
  targets: '.eyesbrown',
  width: '-10%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay:false
}

const eyeAnime = {
  targets: '.eyes',
  translateX: 35,
  direction: 'alternate',
  loop: true,
  easing: 'steps(6)',
  autoplay : false
}

// Deklarerar variblar som kalllar på animationer
const animeEye = anime(eyeAnime)
const animeEyesbrown= anime(eyesbrownAnime)
const animeH44 = anime(animeH4)
const myAnime = anime(myAnimation);

// Deklarerar variablar som selectar buttons/element
const playBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const restartBtn = document.querySelector('#restart');
const h4 = document.querySelector('.myh4')
const secretBtn =document.querySelector('#secretb')
const div = document.querySelector('.div-container')


playBtn.addEventListener('click',function(){
  myAnime.play();
  animeH44.play();
  autoplay:true;
  h4.style.opacity = 1,5;
  secretBtn.style.visibility= 'visible'
});
pauseBtn.addEventListener('click', function(){
  myAnime.pause();
  animeH44.pause();
  animeEye.pause()
  animeEyesbrown.pause()
  secretBtn.style.visibility= 'visible'
  div.style.backgroundColor= ''
});
restartBtn.addEventListener('click',function(){
    myAnime.restart();
    myAnime.pause();
    h4.style.opacity = 0;
    secretBtn.style.visibility= 'hidden'
    animeEye.restart()
    animeEye.pause()
    animeEyesbrown.restart()
    animeEyesbrown.pause()
    div.style.backgroundColor= ''
});

secretBtn.addEventListener('click', function(){
  console.log(secretBtn);
  animeEyesbrown.play()
  animeEye.play()
  autoplay:true
  div.style.backgroundColor = 'green'
});

if (secretBtn){
  secretBtn.style.visibility= 'hidden'
}