"use strict";

import ADOFAI from "./ADOFAI-WebModule-master/ADOFAI-WebModule.js";

const path = ["W", "H", "Q", "G", "q", "U", "o", "T", "E", "J", "p", "R", "A", "M", "C", "B", "Y", "D", "V", "F", "Z", "N", "x", "L"];

function generateMap(musicData) {
    let map = new ADOFAI();
    const bpmFactor = 2;


    map.pathData = [];

    map.settings.offset = musicData.beats[0]*1000;
    map.settings.trackColor = "debb7b";
    map.settings.backgroundColor = "000000";
    map.settings.bpm = musicData.tempo*bpmFactor;


    let pathAcc = 180/15-1;
    for (let i = 1, l = musicData.beats.length; i < l; i++) {
        const toAdd = Math.round((musicData.beats[i]-musicData.beats[i-1])/musicData.beatInterval*360/bpmFactor/15);
        console.log(toAdd);
        pathAcc += toAdd+180/15;
        map.pathData.push( new ADOFAI.PathData(path[pathAcc%path.length]) );
    }
    
    console.log(map.Export());
}

window.generateMap = generateMap;