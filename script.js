/*jshint esversion: 6 */
console.log("its working");
window.addEventListener('keydown',function(e){
    console.log(e.keyCode);

    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    //console.log(key);

    //ifthereisnoaudioreturnfromhere
    if(!audio) return;
    //ifthereisaudioplayit
    audio.currentTime=0;//rewind to the start
    audio.play();
    key.classList.add('rockit');
}); 

const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (e) => {
   // console.log(e);
    e.target.classList.remove('rockit');
})
);

