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
    const channelToanAnalyze = [];
    const channelCount = audioLoaded.numberOfChannels;
    const channels = new Array(channelCount).fill(null).map((e, i) => e = audioLoaded.getChannelData(i));
    for (let i = 0, l = channels[0].length; i < l; i++) {
        channelToanAnalyze.push( channels.reduce((a, _, idx) => a+channels[idx][i], 0)/channelCount );
    }

    const perDt = (Number(document.getElementsByName("analyzeTick")[0].value) || 0.1)*1000;
    const dtPerTick = audioData.duration/channelToanAnalyze.length*1000;
    const per = Math.floor(perDt/dtPerTick);
    console.log(perDt, dtPerTick, per);
    let skippedData = [];
    for (let i = 0, l = Math.min(channelToanAnalyze.length, channelToanAnalyze.length/per); i < l; i++) {
        skippedData.push(channelToanAnalyze.slice(per*i, per*(i+1)).reduce((a, b) => a = Math.max(a, b), 0));
    }

    audioData.beatDetectTime = [];
    audioData.beatDetectRespectively = [];
    let lastData = 0;
    let scanningPeak = -1;
    let min = -1;
    const minimumDifference = Number(document.getElementsByName("minimumDifference")[0].value ?? 0.1);
    for (let i = 0, l = skippedData.length; i < l; i++) {
        if (skippedData[i] > lastData && skippedData[i] > 0.1 && skippedData[i] > min+minimumDifference) {
            scanningPeak = i;
        } else if (scanningPeak !== -1) {
            audioData.beatDetectTime.push(Math.floor(perDt*scanningPeak*1000));
            audioData.beatDetectRespectively.push(skippedData[scanningPeak]);
            min = skippedData[scanningPeak];
            scanningPeak = -1;
        } else {
            min = Math.min(min, skippedData[i]);
        }
        lastData = skippedData[i];
    }

    generateMap(audioData.beatDetectTime.map(e => e/1000));
}
