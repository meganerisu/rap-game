function Sound(name) {
    var audio = document.getElementById(name);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function Loop(name) {
    var audio = document.getElementById(name);
    audio.pause();
    audio.currentTime = 0;
    audio.play();

    audio.onended = function () {
        this.play();
    }
}