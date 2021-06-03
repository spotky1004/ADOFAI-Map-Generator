import ActionValue from "../ActionValue.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of SetPlanetRotation action.
 *
 * DO NOT MANUALLY USE STRING IN `ease` PROPERTY.
 */
class MapEvent_SetPlanetRotation extends ActionValue {
  /**
   * Create a SetPlanetRotation event using these parameters.
   * @param {String} ease Please use enum instead of manually typing the string. Enum is saved at `ease.js`.
   * @param {Number} easeParts Planet's easing part.
   */
  constructor(ease, easeParts) {
    super();
    this.ease = ease == null ? this.ease : ease;
    this.easeParts = easeParts == null ? this.easeParts : easeParts;
  }

  /**
   * Please use enum instead of manually typing the string. Enum is saved at `ease.js`.
   */
  ease = EASE.LINEAR;

  /**
   * Planet's easing part.
   */
  easeParts = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "ease": ${JSON.stringify(
      params[0] == null ? this.ease : params[0]
    )}, "easeParts": ${JSON.stringify(
      params[1] == null ? this.easeParts : params[1]
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

export default MapEvent_SetPlanetRotation;
