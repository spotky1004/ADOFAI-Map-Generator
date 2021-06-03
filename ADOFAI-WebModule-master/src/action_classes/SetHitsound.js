import ActionValue from "../ActionValue.js";
import HITSOUNDS from "../data_types/hitsound.js";

/**
 * Class for storing values of SetHitsound action.
 *
 * DO NOT MANUALLY USE STRING IN `hitsound` PROPERTY.
 */
class MapEvent_SetHitsound extends ActionValue {
  /**
   * Create a SetHitsound event using these parameters.
   * @param {String} hitsound Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
   * @param {Number} hitsoundVolume Volume of hitsound.
   */
  constructor(hitsound, hitsoundVolume) {
    super();
    this.hitsound = hitsound == null ? this.hitsound : hitsound;
    this.hitsoundVolume =
      hitsoundVolume == null ? this.hitsoundVolume : hitsoundVolume;
  }

  /**
   * Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
   */
  hitsound = HITSOUNDS.KICK;

  /**
   * Volume of hitsound.
   */
  hitsoundVolume = 100;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "hitsound": ${JSON.stringify(
      params[0] == null ? this.hitsound : params[0]
    )}, "hitsoundVolume": ${JSON.stringify(
      params[1] == null ? this.hitsoundVolume : params[1]
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

export default MapEvent_SetHitsound;
