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
    let channels = [];
    const channelCount = audioLoaded.numberOfChannels;
    for (let i = 0; i < channelCount; i++) {
        channels.push(audioLoaded.getChannelData(i));
    }
    let audioData = [];
    for (let i = 0, l = channels[0].length; i < l; i++) {
        audioData.push( channels.reduce((a, b) => a+b[i], 0)/channelCount );
    }

    musicTempo = new MusicTempo(audioData);

    generateMap(musicTempo);
}
