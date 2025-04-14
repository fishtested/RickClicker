let ricks = 0;

function rickClick() {
    var clickaudio = document.getElementById("clickaudio");
        clickaudio.play();
    ricks = ricks + 1;
    document.title = `${ricks} Ricks - RickClicker`;
}
