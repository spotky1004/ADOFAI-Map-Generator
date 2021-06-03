import ActionValue from "../ActionValue.js";
import SPEEDTYPE from "../data_types/speedtype.js";

/**
 * Class for storing values of SetSpeed action.
 *
 * DO NOT MANUALLY USE STRING IN `speedType` PROPERTY.
 */
class MapEvent_SetSpeed extends ActionValue {
  /**
   * Create a SetSpeed event using these parameters.
   * @param {String} speedType Please use enum instead of manually typing the string. Enum is saved at `speedtype.js`.
   * @param {Number} beatsPerMinute BPM to change as.
   * @param {Number} bpmMultiplier BPM to multiply with previous BPM (Not BPM in this class).
   */
  constructor(speedType, beatsPerMinute, bpmMultiplier) {
    super();
    this.speedType = speedType == null ? this.speedType : speedType;
    this.beatsPerMinute =
      beatsPerMinute == null ? this.beatsPerMinute : beatsPerMinute;
    this.bpmMultiplier =
      bpmMultiplier == null ? this.bpmMultiplier : bpmMultiplier;
  }

  /**
   * Please use enum instead of manually typing the string. Enum is saved at `speedtype.js`.
   */
  speedType = SPEEDTYPE.BPM;

  /**
   * BPM to change as.
   */
  beatsPerMinute = 120;

  /**
   * BPM to multiply with previous BPM (Not this BPM).
   */
  bpmMultiplier = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "speedType": ${JSON.stringify(
      params[0] == null ? this.speedType : params[0]
    )}, "beatsPerMinute": ${JSON.stringify(
      params[1] == null ? this.beatsPerMinute : params[1]
    )}, "bpmMultiplier": ${JSON.stringify(
      params[2] == null ? this.bpmMultiplier : params[2]
    )}`;
  }

  /**
   * Create value by converting from object
   * @param {Object} obj
   */
  static fromObject(obj) {
    var res = new this();
    Object.keys(obj).forEach((key) => {
      res[key] = obj[key];
    });
    return res;
  }
}

export default MapEvent_SetSpeed;
