"use strict";

import ADOFAI from "./ADOFAI-WebModule-master/ADOFAI-WebModule.js";



// math math
function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
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
        bpmMap.push( 60*1000/(musicData[i]-musicData[i-1]) );
        console.assert(musicData[i] !== musicData[i-1] , musicData[i], musicData[i-1])
    }

    let counter = {};
    for (let i = 0, l = bpmMap.length; i < l; i++) {
        const tileBpm = bpmMap[i];
        if (!counter[tileBpm]) counter[tileBpm] = 0;
        counter[tileBpm]++;
    }

    let counterPer = {};
    for (const bpm in counter) {
        counterPer[bpm] = counter[bpm]/bpmMap.length;
    }

    counterPer = Object.entries(counterPer);
    const maxCountPer = Math.max(...counterPer.map(e => e[1]));
    counterPer = counterPer.filter(e => e[1] > maxCountPer/12);
    const filteredBpmList = counterPer.map(e => Number(e[0]));

    const primeFactor24 = [1, 2, 3, 4, 6, 8, 12, 24];
    let samples = [];
    for (let i = 0, l = filteredBpmList.length; i < l; i++) {
        const samplingBaseBpm = filteredBpmList[i];
        for (const factor of primeFactor24) {
            const samplingBpm = samplingBaseBpm/factor;
            const samplingBpmList = primeFactor24.map(e => (samplingBpm*12/e).toFixed(7));
            let accury = 0;
            let canChangePaths = [];
            let pathIncrements = [];
            bpmMap.some((tileBpm, i) => {
                if (samplingBpmList.includes(tileBpm.toFixed(7))) {
                    accury += 1/bpmMap.length;
                    canChangePaths.push(i);
                    pathIncrements.push(samplingBpmList.findIndex(e => e === tileBpm.toFixed(7)));
                }
            });
            samples.push({
                bpm: samplingBpm,
                canChangePaths: canChangePaths,
                pathIncrements: pathIncrements,
                accury: accury
            });
        }
    }

    const bestSample = samples.sort((a, b) => b.accury - a.accury)[0];
    console.log(bestSample);

    
    if (!document.getElementsByName("linearBool")[0].checked && bestSample.bpm > 0) {
        map.settings.bpm = bestSample.bpm;

        let prevPath = 12-1;
        let pathIdx = 1;
        let eventIdx = 0;

        let changeablePathIdx = 0;

        for (let i = 0, l = bpmMap.length; i < l; i++) {
            if (bestSample.canChangePaths[changeablePathIdx] === i) {
                prevPath += Math.floor(bpmMap[i]/bestSample.bpm*12);
                map.pathData.push( new ADOFAI.PathData(path[prevPath%24]) );

                changeablePathIdx++;

                pathIdx++;
            } else {
                const baseFraction = bpmMap[i]/bestSample.bpm;

                map.pathData.push( new ADOFAI.PathData(path[prevPath%24]) );

                if (!map.actions.length || map.actions[map.actions.length-1].floor !== pathIdx) {
                    map.actions.push( new ADOFAI.Action(pathIdx, "SetSpeed") );
                    map.actions[eventIdx].eventValue.speedType = "Multiplier";
                    eventIdx++;
                }
                map.actions[eventIdx-1].eventValue.bpmMultiplier *= baseFraction;

                map.actions.push( new ADOFAI.Action(pathIdx+1, "SetSpeed") );
                map.actions[eventIdx].eventValue.speedType = "Multiplier";
                map.actions[eventIdx].eventValue.bpmMultiplier /= baseFraction;

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
    console.log(map);
}

window.calcNumerator = calcNumerator;
window.generateMap = generateMap;
