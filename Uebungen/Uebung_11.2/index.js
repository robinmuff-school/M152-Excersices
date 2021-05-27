let player = document.getElementById("video");

document.getElementById("inVolume").addEventListener("change", () => {
    changeVol("0." + document.getElementById("inVolume").value);
});

document.getElementById("inSpeed").addEventListener("change", () => {
    player.playbackRate = document.getElementById("inSpeed").value;
});

document.getElementById("inLoop").addEventListener("change", () => {
    player.loop = document.getElementById("inLoop").checked;
});

document.getElementById("btnplaypause").addEventListener("click", playpause);

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case " ": playpause(); break;
        case "ArrowUp": changeVol(player.volume+0.1); break;
        case "ArrowDown": changeVol(player.volume-0.1); break;
    }
});

function playpause() {
    let button = document.getElementById("btnplaypause");

    if (player.paused) {
        player.play();
        button.innerText = "Pause";
    } else {
        player.pause();
        button.innerText = "Play";
    }
}

function changeVol(val) {
    if (val >= 0 && val <= 1) {
        player.volume = val;
        document.getElementById("inVolume").value = val * 100
    }
}