// import ADOFAI from "./ADOFAI-WebModule";

window.onload = () => {};

// const ADOFAI = window.ADOFAI;

function loadFile() {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt, .json, .adofai";
  input.onchange = function (event) {
    processFile(event.target.files[0]);
  };
  input.click();
}
var loadedMap = null;
function processFile(file) {
  var reader = new FileReader();
  reader.onload = function () {
    loadedMap = reader.result.toString();

    var resultWriter = document.getElementById("txt");
    resultWriter.textContent = "calculating..";

    // let levelstr = `{\n\t"pathData": "RE!RRE!RRE!RRER", \n\t"settings":\n\t{\n\t\t"version": 2, \n\t\t"artist": "아티스트", \n\t\t"specialArtistType": "None", \n\t\t"artistPermission": "", \n\t\t"song": "곡", \n\t\t"author": "만든이", \n\t\t"separateCountdownTime": "Enabled", \n\t\t"previewImage": "", \n\t\t"previewIcon": "", \n\t\t"previewIconColor": "003f52", \n\t\t"previewSongStart": 0, \n\t\t"previewSongDuration": 10, \n\t\t"seizureWarning": "Disabled", \n\t\t"levelDesc": "레벨에 대해 말해보세요!", \n\t\t"levelTags": "", \n\t\t"artistLinks": "", \n\t\t"difficulty": 1,\n\t\t"songFilename": "", \n\t\t"bpm": 100, \n\t\t"volume": 100, \n\t\t"offset": 0, \n\t\t"pitch": 100, \n\t\t"hitsound": "Kick", \n\t\t"hitsoundVolume": 100, \n\t\t"countdownTicks": 4,\n\t\t"trackColorType": "Single", \n\t\t"trackColor": "debb7b", \n\t\t"secondaryTrackColor": "ffffff", \n\t\t"trackColorAnimDuration": 2, \n\t\t"trackColorPulse": "None", \n\t\t"trackPulseLength": 10, \n\t\t"trackStyle": "Standard", \n\t\t"trackAnimation": "None", \n\t\t"beatsAhead": 3, \n\t\t"trackDisappearAnimation": "None", \n\t\t"beatsBehind": 4,\n\t\t"backgroundColor": "000000", \n\t\t"bgImage": "", \n\t\t"bgImageColor": "ffffff", \n\t\t"parallax": [100, 100], \n\t\t"bgDisplayMode": "FitToScreen", \n\t\t"lockRot": "Disabled", \n\t\t"loopBG": "Disabled", \n\t\t"unscaledSize": 100,\n\t\t"relativeTo": "Player", \n\t\t"position": [0, 0], \n\t\t"rotation": 0, \n\t\t"zoom": 100,\n\t\t"bgVideo": "", \n\t\t"loopVideo": "Disabled", \n\t\t"vidOffset": 0, \n\t\t"floorIconOutlines": "Disabled", \n\t\t"stickToFloors": "Disabled", \n\t\t"planetEase": "Linear", \n\t\t"planetEaseParts": 1\n\t},\n\t"actions":\n\t[\n\t\t{ "floor": 4, "eventType": "SetSpeed", "speedType": "Bpm", "beatsPerMinute": 200, "bpmMultiplier": 1 },\n\t\t{ "floor": 8, "eventType": "SetSpeed", "speedType": "Bpm", "beatsPerMinute": 300, "bpmMultiplier": 1 },\n\t\t{ "floor": 12, "eventType": "SetSpeed", "speedType": "Bpm", "beatsPerMinute": 400, "bpmMultiplier": 1 }\n\t]\n}\n`;
    var levelstr = loadedMap;

    // console.log(levelstr);

    // console.log(levelstr.replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t"));

    var level = ADOFAI.Import(levelstr);

    console.log(level.actions.filter((x) => x.floor == 1511));

    // console.log(level.actions.filter((x) => x.eventType == "SetSpeed"));

    resultWriter.textContent = level.Export();
  };
  reader.readAsText(file, /* optional */ "euc-kr");
}
