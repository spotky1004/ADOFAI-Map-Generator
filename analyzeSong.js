"use strict";

/** @type {AudioBuffer} */
let audioLoaded = null;
let audioData = {
    duration: null,
    beatDetectTime: null,
    beatDetectRespectively: null
};

function audioAccepted(file, t) {
    let reader = new FileReader();
    
    reader.addEventListener("load", function () {
        // to data
        const audioContext = new AudioContext()
        audioContext.decodeAudioData(reader.result, function(arrayBuffer) {
            audioLoaded = arrayBuffer;
            audioData.duration = arrayBuffer.duration;
            analyzeSong();
        });
    }, false);

    if (file) {
        reader.readAsArrayBuffer(file);
    }
}


function analyzeSong() {
    const channelToanAnalyze = [...audioLoaded.getChannelData(0)];
    const per = 4000;
    const perDt = audioData.duration/(channelToanAnalyze.length/per)*1000;
    let skippedData = [];
    for (let i = 0, l = channelToanAnalyze.length/per; i < l; i++) {
        skippedData.push(channelToanAnalyze.slice(per*i, per*(i+1)).reduce((a, b) => a = Math.max(a, b), 0));
    }

    audioData.beatDetectTime = [];
    audioData.beatDetectRespectively = [];
    let beatDetectIdx = [];
    let lastData = 0;
    let isAlreadyPeak = false;
    for (let i = 0, l = skippedData.length; i < l; i++) {
        if (skippedData[i] > lastData) {
            if (!isAlreadyPeak) {
                audioData.beatDetectTime.push(Math.floor(perDt*i));
                audioData.beatDetectRespectively.push(skippedData[i]);
                beatDetectIdx.push(i);
                isAlreadyPeak = true;
            }
        } else {
            isAlreadyPeak = false;
        }
        lastData = skippedData[i];
    }

    generateMap(audioData.beatDetectTime);
}