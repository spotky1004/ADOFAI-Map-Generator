import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import PLANE from "../data_types/plane.js";

/**
 * Class for storing values of Flash action.
 *
 * DO NOT MANUALLY USE STRING IN `plane` PROPERTY.
 */
class MapEvent_Flash extends ActionValue {
  /**
   * Create a Flash event using these parameters.
   * @param {Number} duration Duration of flash effect.
   * @param {String} plane Please use enum instead of manually typing the string. Enum's filename is `plane.js`.
   * @param {Color} startColor Color of the flash when the effect starts.
   * @param {Number} startOpacity Opacity of the flash when the effect starts.
   * @param {Color} endColor Color of the flash when the effect ends.
   * @param {Number} endOpacity Opacity of the flash when the effect ends.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    duration,
    plane,
    startColor,
    startOpacity,
    endColor,
    endOpacity,
    angleOffset,
    eventTag
  ) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.plane = plane == null ? this.plane : plane;
    this.startColor = startColor == null ? this.startColor : startColor;
    this.startOpacity = startOpacity == null ? this.startOpacity : startOpacity;
    this.endColor = endColor == null ? this.endColor : endColor;
    this.endOpacity = endOpacity == null ? this.endOpacity : endOpacity;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of flash effect.
   */
  duration = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `plane.js`.
   */
  plane = PLANE.BACKGROUND;

  /**
   * Color of the flash when the effect starts.
   */
  startColor = new Color();

  /**
   * Opacity of the flash when the effect starts.
   */
  startOpacity = 100;

  /**
   * Color of the flash when the effect ends.
   */
  endColor = new Color();

  /**
   * Opacity of the flash when the effect ends.
   */
  endOpacity = 0;

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
    )}, "plane": ${JSON.stringify(
      params[1] == null ? this.plane : params[1]
    )}, "startColor": ${JSON.stringify(
      (params[2] == null ? this.startColor : params[2]).toString()
    )}, "startOpacity": ${JSON.stringify(
      params[3] == null ? this.startOpacity : params[3]
    )}, "endColor": ${JSON.stringify(
      (params[4] == null ? this.endColor : params[4]).toString()
    )}, "endOpacity": ${JSON.stringify(
      params[5] == null ? this.endOpacity : params[5]
    )}, "angleOffset": ${JSON.stringify(
      params[6] == null ? this.angleOffset : params[6]
    )}, "eventTag": ${JSON.stringify(
      params[7] == null ? this.eventTag : params[7]
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

export default MapEvent_Flash;
