"use strict";

import ADOFAI from "./ADOFAI-WebModule-master/ADOFAI-WebModule.js";

const path = ["W", "H", "Q", "G", "q", "U", "o", "T", "E", "J", "p", "R", "A", "M", "C", "B", "Y", "D", "V", "F", "Z", "N", "x", "L"];

function generateMap(musicData) {
    let map = new ADOFAI();
    // let bpmFactor = 1;

    map.pathData = [];

    map.settings.offset = (musicData.beats[0])*1000;
    map.settings.trackColor = "debb7b";
    map.settings.backgroundColor = "000000";
    map.settings.songFilename = document.getElementById("audio_file").files[0].name;

    map.settings.bpm = 60/musicData.beats[0];
    
    for (let i = 1, l = musicData.beats.length; i < l; i++) {
        map.pathData.push( new ADOFAI.PathData("R") );
        map.actions.push( new ADOFAI.Action(i+1, "SetSpeed") );
        map.actions[i].eventValue.beatsPerMinute = 60/(musicData.beats[i]-(musicData.beats[i-1] ?? 0));
    }

    /*l et pathAcc = 180/15-1;
    for (let i = 1, l = musicData.beats.length; i < l; i++) {
        console.log((musicData.beats[i]-musicData.beats[i-1])/musicData.beatInterval/bpmFactor);
        const toAdd = Math.round((musicData.beats[i]-musicData.beats[i-1])/musicData.beatInterval*360/15/bpmFactor);
        if (i < 10 && ![6, 12].includes(1)) {
            //i--;
            //continue;
        }

        pathAcc += toAdd+180/15;
        map.pathData.push( new ADOFAI.PathData(path[pathAcc%path.length]) );
    }*/
    
    document.getElementById("mapOutput").innerHTML = map.Export();
    console.log(map);
}

window.generateMap = generateMap;