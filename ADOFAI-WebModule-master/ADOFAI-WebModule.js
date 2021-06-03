/**
 * This API uses MIT License.
 *
 * Copyright ⓒ CrackThrough 2020.
 * All rights reserved.
 *
 * ===================================================== [ WARNING ] =====================================================
 * BASED ON v1.11.3 (r70) VERSION OF "A DANCE OF FIRE AND ICE". (BETA BUILD)
 * USING THE LATER VERSION MIGHT MAKE BIG DIFFERECE BETWEEN ORIGINAL ADOFAI'S DATA AND THE DATA GENERATED FROM THIS API.
 * USING THE OLDER VERSION MIGHT CAUSE SOME ISSUES, BUT I WILL NOT SUPPORT IT.
 * ===================================================== [ WARNING ] =====================================================
 *
 * Missing a value? Contact to @CrackThrough#5067 (OR USER ID "543672901585469441") on Discord or post a issue on github.
 *
 * Pull requests are ALWAYS appreciated.
 */

import AdofaiMapPathData from "./src/AdofaiMapPathData.js";
import AdofaiMapSettings from "./src/AdofaiMapSettings.js";
import AdofaiMapAction from "./src/AdofaiMapAction.js";
import Enums from "./src/data_types/init.js";
import Color from "./src/data_types/color.js";

/**
 * A class holding the entire ADOFAI map data.
 */
const ADOFAI = class {
  /**
   * Create a map data by using a constructor.
   * @param {AdofaiMapPathData[]} pathData An array of pathData.
   * @param {Object} settings A settings object.
   * @param {AdofaiMapAction[]} actions An array of actions (or events).
   */
  constructor(
    pathData = [
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
    ],
    settings = AdofaiMapSettings,
    actions = []
  ) {
    this.pathData = pathData == null ? this.pathData : pathData;
    this.settings = settings == null ? this.settings : settings;
    this.actions = actions == null ? this.actions : actions;
  }

  /**
   * An array of pathData.
   */
  pathData = [new AdofaiMapPathData()];

  /**
   * A settings object.
   */
  settings = AdofaiMapSettings;

  /**
   * An array of actions (or events).
   */
  actions = [new AdofaiMapAction()];

  /**
   * Converts the entire map to string and returns it.
   *
   * @returns {String} String(As file content).
   */
  Export() {
    var res = "";
    var path = "";
    this.pathData.forEach((p) => {
      path += p.code;
    });

    var stg = "";
    Object.keys(this.settings).forEach((k, i) => {
      var v = this.settings[k];
      switch (typeof v) {
        case "object":
          if (Array.isArray(v)) {
            var s = "";
            v.forEach((_v, _i) => {
              var isLast = _i + 1 == v.length;
              switch (typeof _v) {
                case "string":
                  s += '"' + JSON.stringify(_v) + (isLast ? '"' : '", ');
                  break;
                case "undefined":
                  s += isLast ? "null" : "null, ";
                  break;
                default:
                  s += JSON.stringify(_v) + (isLast ? "" : ", ");
                  break;
              }
            });
            v = `[ ${s} ]`;
          } else v = `"${v.toString()}"`;
          break;
        case "number":
        case "string":
          v = JSON.stringify(v);
          break;
        case "boolean":
          v = `"${v ? "Enabled" : "Disabled"}"`;
          break;
        case "undefined":
          v = null;
          break;
      }
      stg += `"${k}": ${v}${
        i + 1 == Object.keys(this.settings).length ? "" : ", \n\t\t"
      }`;
    });

    stg = `\n\t"settings": {\n\t\t${stg}\n\t}, `;

    var ats = `\n\t"actions":\n\t[\n\t`;

    for (var i = 0; i < this.actions.length; i++) {
      if (!this.actions[i].eventType) this.actions[i] = null;
    }

    this.actions = this.actions.filter((x) => x);

    this.actions.forEach((e, i) => {
      var isLast = i == this.actions.length - 1;
      if (e.eventType == "Twirl") {
        ats += e.eventValue.DoubleTwirled
          ? `\t{ "floor": ${e.floor}, "eventType": "${
              e.eventType
            }" }, \n\t\t{ "floor": ${e.floor}, "eventType": "${e.eventType}" }${
              isLast ? "\n\t" : ", \n\t"
            }`
          : `\t{ "floor": ${e.floor}, "eventType": "${e.eventType}" }${
              isLast ? "\n\t" : ", \n\t"
            }`;
      } else {
        ats += `\t{ "floor": ${e.floor}, "eventType": "${
          e.eventType
        }"${e.eventValue.asJsonPart()} }${isLast ? "\n\t" : ", \n\t"}`;
      }
    });
    res = `{\n\t"pathData": "${path}", ${stg}${ats}]\n}`;
    return res;
  }

  /**
   * Sorts action[] by floor number and action name
   * @param {Boolean} dontSortByName Whether not to sort events by name at all, and just sort by floor numbers. (default: false)
   */
  SortActions(dontSortByName = false) {
    this.actions = this.actions.sort((a, b) => a.floor - b.floor);
    if (!dontSortByName)
      for (var i = 0; i < this.actions.length; i++) {
        var filtered = this.actions.filter(
          (x) => x.floor == this.actions[i].floor
        );
        var temp = [];
        for (var j = 0; j < filtered.length; j++) {
          var nameIndex = Object.keys(ADOFAI.Action.ACTIONS_LIST).indexOf(
            this.actions[i].eventType
          );
          temp.push(nameIndex);
        }
        var tmp = temp;
        temp = temp.sort((a, b) => a - b);
        tmp.forEach((e) => {
          var k = temp.indexOf(e);
          this.actions[i + k] = temp[k];
        });
        i += filtered.length;
      }
    return this;
  }

  /**
   * Converts a map value from String and returns instance of this class.
   *
   * Might throw an Error trying to parse. Use this in trycatch or tryfinally block.
   *
   * @param {String} str Content of the .adofai file.
   *
   * @returns {ADOFAI} Class(As ADOFAI Class).
   */
  static Import(str) {
    var res = new ADOFAI([], {}, []); // init new level to return
    var lines = str.replace(/[\r]/g, "").split("\n");
    var location = "path"; // divide by location and fill each import functions
    var f = false; // flag for finding settings
    lines.forEach((line, index) => {
      index++; // using index as line count, so i added 1
      // line = line.replace(/(\t+(?=[^\t\n]))+/g, "");
      switch (location) {
        case "path": // on path
          if (line.includes("pathData")) {
            // get pathdata
            var val = line
              .substr(
                line.indexOf(":") + 1,
                line.lastIndexOf(",") - line.indexOf(":") - 1
              )
              .trim();
            val = val.substr(1, val.length - 2); // remove quotes
            if (typeof val != "string")
              throw new Error(
                `Expected pathData value to be a string in line ${index} but recieved: '${val}'.`
              );
            location = "stg"; // change location and generate path one by one
            val.split("").forEach((p, i) => {
              if (AdofaiMapPathData.PATH_LIST.includes(p)) {
                res.pathData.push(new AdofaiMapPathData(p));
              } else
                throw new Error(
                  `Unknown path type in line ${index}: '${p}' in index ${i} of "${val}".`
                );
            });
          }
          break;
        case "stg": // on settings
          if (f) {
            if (line.replace(/[ \t]/g, "").endsWith("},")) {
              location = "ats"; // change location
            }
            if (line.includes(":") && line.includes('"')) {
              if (line.includes(","))
                line = line.substr(0, line.lastIndexOf(","));
              var i = line.indexOf(":");
              var s = [line.substr(0, i), line.substr(i + 1, Infinity)];
              i = s[0].indexOf('"');
              var k = s[0].substr(i + 1, s[0].lastIndexOf('"') - i - 1);
              try {
                var v = new Function(
                  `return ${
                    s[1].trim().endsWith(",") // remove one , because of this line: ["": 1, ,]
                      ? s[1].trim().substr(0, s[1].trim().length - 1)
                      : s[1].trim()
                  };`
                );
                res.settings[k] =
                  [
                    // switch to boolean
                    "separateCountdownTime",
                    "seizureWarning",
                    "lockRot",
                    "loopBG",
                    "loopVideo",
                    "floorIconOutlines",
                    "stickToFloors",
                  ].includes(k) && ["Enabled", "Disabled"].includes(v())
                    ? v() == "Enabled"
                    : typeof v() == "string"
                    ? [
                        // switch to color
                        "previewIconColor",
                        "trackColor",
                        "secondaryTrackColor",
                        "backgroundColor",
                        "bgImageColor",
                      ].includes(k)
                      ? new Color(v())
                      : v()
                    : v();
              } catch (err) {
                throw new Error(
                  `An error occurred in line ${index} while parsing the value:\n\n${err.message}`
                );
              }
            }
          } else {
            if (line.includes("settings")) f = true; // enable flag
          }
          break;
        case "ats":
          if (line.includes("{")) {
            line = line.trim();
            var indexobj = {
              comma: line.lastIndexOf(","),
              closeb: line.lastIndexOf("}"),
              endstr: line.lastIndexOf('"'),
            };
            if (indexobj.comma > indexobj.closeb) {
              line = line.substr(0, indexobj.closeb + 1);
              indexobj.comma = line.lastIndexOf(",");
            }
            if (
              indexobj.comma > indexobj.endstr &&
              indexobj.closeb > indexobj.comma
            ) {
              line = line.substr(0, indexobj.comma) + "}";
            }

            var actionraw = {};
            try {
              actionraw = JSON.parse(line);
            } catch (err) {
              throw new Error(
                `An error occurred in line ${index} while parsing the value:\n\n${err.message}\n\nactionraw string: '${line}'.`
              );
            }

            function canSetToBoolean(actionraw, k) {
              if (
                [
                  "Bloom",
                  "CustomBackground",
                  "HallOfMirrors",
                  "PositionTrack",
                  "SetFilter",
                  "ShakeScreen",
                ].includes(actionraw.eventType)
              ) {
                switch (actionraw.eventType) {
                  case "HallOfMirrors":
                  case "Bloom":
                    return ["enabled"].includes(k);
                  case "CustomBackground":
                    return ["lockRot", "loopBG"].includes(k);
                  case "PositionTrack":
                    return ["editorOnly"].includes(k);
                  case "SetFilter":
                    return ["enabled", "disableOthers"].includes(k);
                  case "ShakeScreen":
                    return ["fadeOut"].includes(k);
                }
              }
              return false;
            }

            var actionrawFiltered = Object.assign({}, actionraw);
            delete actionrawFiltered.floor;
            delete actionrawFiltered.eventType;
            Object.keys(actionrawFiltered).forEach((k) => {
              if (
                ["Enabled", "Disabled"].includes(actionrawFiltered[k]) &&
                canSetToBoolean(actionraw, k)
              ) {
                actionrawFiltered[k] = actionrawFiltered[k] == "Enabled";
              }
            });
            var valid = Object.keys(AdofaiMapAction.ACTIONS_LIST).includes(
              actionraw.eventType
            );
            if (!valid)
              throw new Error(
                `Unknown action '${actionraw.eventType}' in line ${index}.\n\nFull line: '${line}'.`
              );
            var action = new AdofaiMapAction(
              actionraw.floor || 0,
              actionraw.eventType,
              AdofaiMapAction.ACTIONS_LIST[actionraw.eventType].fromObject(
                actionrawFiltered
              )
            );

            res.actions.push(action);
          }

          break;
      }
    });
    if (!f) {
      throw new Error(`Could not find any settings object in the map file.`);
    }
    if (res.actions.length) {
      /**
       * @param {AdofaiMapAction[]} arr
       * @param {AdofaiMapAction} e
       */
      function getAmount(arr, e) {
        return arr.filter((x) => x.floor == e.floor).length;
      }

      var twirls = res.actions
        .filter((x) => x.eventType == "Twirl")
        .sort((a, b) => a.floor - b.floor);
      for (var i = 0; i < twirls.length; i++) {
        var amount = getAmount(twirls, twirls[i]);
        if (amount > 1) {
          for (var j = 0; j < amount; j++) {
            if (j != amount - 1) {
              res.actions.splice(res.actions.indexOf(twirls[i]), 1);
            } else if (amount % 2 == 0) {
              var index = -1;
              // cant use indexOf() because constructor is different
              for (var k = 0; k < res.actions.length; k++) {
                if (
                  res.actions[k].eventType == "Twirl" &&
                  res.actions[k].floor == twirls[i].floor
                )
                  index = k;
              }
              res.actions[index].eventValue.DoubleTwirled = true;
            }
          }
          i += amount;
        }
      }
    }
    return res;
  }

  /**
   * Class for managing customizable hexadecimal color.
   */
  static Color = Color;

  /**
   * This contains every enums needed for you.
   *
   * This is supposed to be read-only but if I create this property by `Object.defineProperty()`, I cannot create this comment.
   *
   * So please avoid making any changes into this if you don't know what you are doing.
   */
  static Enums = Enums;

  /**
   * Class for easy manipulation of paths.
   *
   * Used directly in `pathData: "..."`.
   *
   * Contains every types of path. Do `Object.keys(AdofaiMapPathData.PATH_LIST)` to get all list of Path in String.
   */
  static PathData = AdofaiMapPathData;

  /**
   * This is default settings for an ADOFAI Map.
   */
  static Settings = AdofaiMapSettings;

  /**
   * Class for easy manipulation of events.
   *
   * Used directly in `actions: [ ... ]`.
   *
   * Contains every actions. Do `AdofaiMapAction.ACTIONS_LIST` to get all list of classes.
   *
   * AdofaiEventType is in `AdofaiEventType.js`.
   */
  static Action = AdofaiMapAction;
};

export default ADOFAI;
