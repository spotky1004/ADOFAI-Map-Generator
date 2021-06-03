"use strict";

import ADOFAI from "./ADOFAI-WebModule-master/ADOFAI-WebModule.js";

function generateMap(musicData) {
    let map = new ADOFAI();
    // let bpmFactor = 1
    map.pathData = [];

    map.settings.offset = musicData[1];
    map.settings.trackColor = "debb7b";
    map.settings.backgroundColor = "000000";
    map.settings.songFilename = document.getElementById("audio_file").files[0].name;

    map.settings.bpm = 60*1000/audioData.beatDetectTime[1];
    
    for (let i = 2, l = musicData.length-1; i < l; i++) {
        map.pathData.push( new ADOFAI.PathData("R") );
        map.actions.push( new ADOFAI.Action(i-1, "SetSpeed") );
        map.actions[i-2].eventValue.beatsPerMinute = 60*1000/(musicData[i]-musicData[i-1]);
    }
    map.pathData.push( new ADOFAI.PathData("R") );
    
    document.getElementById("mapOutput").innerHTML = map.Export();
    console.log(map);
}

window.generateMap = generateMap;