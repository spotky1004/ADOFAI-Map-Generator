import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";

/**
 * Class for storing values of Bloom action.
 */
class MapEvent_Bloom extends ActionValue {
  /**
   * Create a Bloom event using these parameters.
   * @param {Boolean} enabled Enabled / Disabled status of the event.
   * @param {Number} threshold Area (threshold) of the bloom effect.
   * @param {Number} intensity Intensity of the event.
   * @param {Color} color Color of the bloom. The Color class is in `color.js`.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(enabled, threshold, intensity, color, angleOffset, eventTag) {
    super();
    this.enabled = enabled == null ? this.enabled : enabled;
    this.threshold = threshold == null ? this.threshold : threshold;
    this.intensity = intensity == null ? this.intensity : intensity;
    this.color = color == null ? this.color : color;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Enabled / Disabled status of the event.
   */
  enabled = true;

  /**
   * Area (threshold) of the bloom effect.
   */
  threshold = 50;

  /**
   * Intensity of the event.
   */
  intensity = 100;

  /**
   * Color of the bloom. The Color class is in `color.js`
   */
  color = new Color();

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

  /**
   * A tag of the event.
   */
  eventTag = "";

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "enabled": ${JSON.stringify(
      (params[0] == null ? this.enabled : params[0]) ? "Enabled" : "Disabled"
    )}, "threshold": ${JSON.stringify(
      params[1] == null ? this.threshold : params[1]
    )}, "intensity": ${JSON.stringify(
      params[2] == null ? this.intensity : params[2]
    )}, "color": ${JSON.stringify(
      params[3] == null ? this.color.toString() : params[3].toString()
    )}, "angleOffset": ${JSON.stringify(
      params[4] == null ? this.angleOffset : params[4]
    )}, "eventTag": ${JSON.stringify(
      params[5] == null ? this.eventTag : params[5]
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

export default MapEvent_Bloom;
