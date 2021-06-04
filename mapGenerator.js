"use strict";

import ADOFAI from "./ADOFAI-WebModule-master/ADOFAI-WebModule.js";

function generateMap(musicData) {
    let map = new ADOFAI();
    map.pathData = [];

    map.settings.offset = musicData[0];
    map.settings.trackColor = "debb7b";
    map.settings.backgroundColor = "000000";
    map.settings.songFilename = document.getElementById("audio_file").files[0].name;

    map.settings.bpm = 60*1000/(musicData[1]-musicData[0]);
    
    const o = 1;
    for (let i = o, l = musicData.length; i < l; i++) {
        map.pathData.push( new ADOFAI.PathData("R") );
        map.actions.push( new ADOFAI.Action(i, "SetSpeed") );
        map.actions[i-1].eventValue.beatsPerMinute = 60*1000/(musicData[i]-musicData[i-1]);
    }
    map.pathData.push( new ADOFAI.PathData("R") );
    
    document.getElementById("mapOutput").innerHTML = map.Export();
    document.getElementById("configWarper").style.display = "none";
    console.log(map);
}

window.generateMap = generateMap;