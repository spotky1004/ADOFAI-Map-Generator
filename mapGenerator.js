"use strict";

import ADOFAI from "./ADOFAI-WebModule-master/ADOFAI-WebModule.js";



// math math
function gcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
function calcNumerator(a) {
    let loop = 1;
    let subLoop = 0;
    while (!Number.isInteger(a*10**loop-a*10**subLoop)) {
        subLoop++;
        if (loop === subLoop) {
            loop++;
            subLoop = 0;
        }
    }
    return (10**loop-10**subLoop)/gcd(10**loop-10**subLoop, a*10**loop-a*10**subLoop);
}



const path = ["W", "H", "Q", "G", "q", "U", "o", "T", "E", "J", "p", "R", "A", "M", "C", "B", "Y", "D", "V", "F", "Z", "N", "x", "L"];
function generateMap(musicData) {
    let map = new ADOFAI();
    map.pathData = [];

    map.settings.offset = musicData[0]-40;
    map.settings.trackColor = "debb7b";
    map.settings.backgroundColor = "000000";
    map.settings.songFilename = document.getElementById("audio_file").files[0].name;

    
    let bpmMap = [];
    for (let i = 1, l = musicData.length; i < l; i++) {
        bpmMap.push(60*1000/(musicData[i]-musicData[i-1]));
    }
    

    const intBpm = bpmMap.filter(Number.isInteger);
    let baseBpm = gcd(Math.min(...intBpm), Math.max(...intBpm));
    let isBaseBpmVaild = intBpm.filter(e => Number.isInteger(e/baseBpm) && e/baseBpm < 24).length === intBpm.length;

    
    if (!document.getElementsByName("linearBool")[0].checked && isBaseBpmVaild && baseBpm !== 1) {
        map.settings.bpm = baseBpm;

        let prevPath = 12-1;
        let pathIdx = 1;
        let eventIdx = 0;

        for (let i = 0, l = bpmMap.length; i < l; i++) {
            const tileBpm = bpmMap[i];
            const baseFraction = tileBpm/baseBpm;
            if (Number.isInteger(baseFraction)) {
                prevPath += 12+baseFraction;
                map.pathData.push( new ADOFAI.PathData(path[prevPath%24]) );
                pathIdx++;
            } else {
                map.pathData.push( new ADOFAI.PathData(path[prevPath%24]) );

                if (!map.actions.length || map.actions[map.actions.length-1].floor !== pathIdx) {
                    map.actions.push( new ADOFAI.Action(pathIdx, "SetSpeed") );
                    map.actions[eventIdx].eventValue.speedType = "Multiplier";
                    eventIdx++;
                }
                map.actions[eventIdx-1].eventValue.bpmMultiplier *= tileBpm/baseBpm;

                map.actions.push( new ADOFAI.Action(pathIdx+1, "SetSpeed") );
                map.actions[eventIdx].eventValue.speedType = "Multiplier";
                map.actions[eventIdx].eventValue.bpmMultiplier /= tileBpm/baseBpm;

                pathIdx++;
                eventIdx++;
            }
        }
    } else {
        map.settings.bpm = 60*1000/(musicData[1]-musicData[0]);

        for (let i = 0, l = bpmMap.length; i < l; i++) {
            map.pathData.push( new ADOFAI.PathData("R") );
            map.actions.push( new ADOFAI.Action(i+1, "SetSpeed") );
            map.actions[i].eventValue.beatsPerMinute = bpmMap[i];
        }
    }
    
    map.pathData.push( new ADOFAI.PathData("R") );
    
    document.getElementById("mapOutput").innerHTML = map.Export();
    document.getElementById("configWarper").style.display = "none";
    console.log(map, baseBpm, isBaseBpmVaild);
}

window.calcNumerator = calcNumerator;
window.generateMap = generateMap;