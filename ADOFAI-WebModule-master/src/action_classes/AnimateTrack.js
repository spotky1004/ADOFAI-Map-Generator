import ActionValue from "../ActionValue.js";
import APPEAR_ANIM from "../data_types/trackappearanim.js";
import DISAPPEAR_ANIM from "../data_types/trackdisappearanim.js";

/**
 * Class for storing values of AnimateTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackAnimation`, `trackDisappearAnimation` PROPERTY.
 */
class MapEvent_AnimateTrack extends ActionValue {
  /**
   * Create a AnimateTrack event using these parameters.
   * @param {String} trackAnimation Please use enum instead of manually typing the string. Enum's filename is `trackappearanim.js`.
   * @param {Number} beatsAhead Beats ahead to show track appearing animation.
   * @param {String} trackDisappearAnimation Please use enum instead of manually typing the string. Enum's filename is `trackdisappearanim.js`.
   * @param {Number} beatsBehind Beats behind to show track disappearing animation.
   */
  constructor(
    trackAnimation,
    beatsAhead,
    trackDisappearAnimation,
    beatsBehind
  ) {
    super();
    this.trackAnimation =
      trackAnimation == null ? this.trackAnimation : trackAnimation;
    this.beatsAhead = beatsAhead == null ? this.beatsAhead : beatsAhead;
    this.trackDisappearAnimation =
      trackDisappearAnimation == null
        ? this.trackDisappearAnimation
        : trackDisappearAnimation;
    this.beatsBehind = beatsBehind == null ? this.beatsBehind : beatsBehind;
  }

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackappearanim.js`.
   */
  trackAnimation = APPEAR_ANIM.NONE;

  /**
   * Beats ahead to show track appearing animation.
   */
  beatsAhead = 8;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackdisappearanim.js`.
   */
  trackDisappearAnimation = DISAPPEAR_ANIM.NONE;

  /**
   * Beats behind to show track disappearing animation.
   */
  beatsBehind = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "trackAnimation": ${JSON.stringify(
      params[0] == null ? this.trackAnimation : params[0]
    )}, "beatsAhead": ${JSON.stringify(
      params[1] == null ? this.beatsAhead : params[1]
    )}, "trackDisappearAnimation": ${JSON.stringify(
      params[2] == null ? this.trackDisappearAnimation : params[2]
    )}, "beatsBehind": ${JSON.stringify(
      params[3] == null ? this.beatsBehind : params[3]
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

export default MapEvent_AnimateTrack;
