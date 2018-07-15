/*jshint esversion: 6 */
console.log("its working");
window.addEventListener('keydown',function (e){
    console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);

    //ifthereisnoaudioreturnfromhere
    if(!audio) return;
    //ifthereisaudioplayit
    audio.currentTime=0;
    audio.play();


});