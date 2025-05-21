let soundeffect = document.querySelector("#sound-effect");
let soundbtn = document.querySelector("#play");
let pausebtn = document.querySelector("#pause");
let volumeSlider = document.querySelector("#volume");


soundbtn.addEventListener('click', function () {
    soundeffect.play();
});


pausebtn.addEventListener('click', function () {
    soundeffect.pause();
});


volumeSlider.addEventListener('input', function () {
    soundeffect.volume = this.value;
});
