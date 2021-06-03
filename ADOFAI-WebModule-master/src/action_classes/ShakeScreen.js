import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of ShakeScreen action.
 */
class MapEvent_ShakeScreen extends ActionValue {
  /**
   * Create a ShakeScreen event using these parameters.
   * @param {Number} duration Duration of this action.
   * @param {Number} strength Strength of the shake.
   * @param {Number} intensity Intensity of the shake.
   * @param {Boolean} fadeOut Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(duration, strength, intensity, fadeOut, angleOffset, eventTag) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.strength = strength == null ? this.strength : strength;
    this.intensity = intensity == null ? this.intensity : intensity;
    this.fadeOut = fadeOut == null ? this.fadeOut : fadeOut;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of this action.
   */
  duration = 1;

  /**
   * Strength of the shake.
   */
  strength = 100;

  /**
   * Intensity of the shake.
   */
  intensity = 100;

  /**
   * Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
   */
  fadeOut = true;

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

  /**
   * A tag of the event.
   */
  eventTag = new String();

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "duration": ${JSON.stringify(
      params[0] == null ? this.duration : params[0]
    )}, "strength": ${JSON.stringify(
      params[1] == null ? this.strength : params[1]
    )}, "intensity": ${JSON.stringify(
      params[2] == null ? this.intensity : params[2]
    )}, "fadeOut": ${JSON.stringify(
      (params[3] == null ? this.fadeOut : params[3]) ? "Enabled" : "Disabled"
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

export default MapEvent_ShakeScreen;
