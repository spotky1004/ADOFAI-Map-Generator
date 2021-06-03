"use strict";

/** @type {AudioBuffer} */
let audioLoaded = null;
let musicTempo = null;
const audioPlayer = document.getElementById("audio_player");

function audioAccepted(file, t) {
    let reader = new FileReader();
    
    reader.addEventListener("load", function () {
        // to data
        const audioContext = new AudioContext()
        audioContext.decodeAudioData(reader.result, function(arrayBuffer) {
            audioLoaded = arrayBuffer;
            analyzeSong();
        });
    }, false);

    if (file) reader.readAsArrayBuffer(file);
}

function analyzeSong() {
    const channel1 = audioLoaded.getChannelData(0);
    const channel2 = audioLoaded.getChannelData(1);
    let audioData = [];
    for (let i = 0, l = channel1.length; i < l; i++) {
        audioData.push( (channel1[i]+channel2[i])/2 );
    }

    musicTempo = new MusicTempo(audioData);

    generateMap(musicTempo);
}
