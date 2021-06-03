import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import TRACK_COLOR_TYPE from "../data_types/trackcolortype.js";
import TRACK_COLOR_PULSE from "../data_types/trackcolorpulse.js";
import TRACK_STYLE from "../data_types/trackstyle.js";

/**
 * Class for storing values of ColorTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PROPERTY.
 */
class MapEvent_ColorTrack extends ActionValue {
  /**
   * Create a ColorTrack event using these parameters.
   * @param {String} trackColorType Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
   * @param {Color} trackColor 1st Color of the track. The Color class is in `color.js`.
   * @param {Color} secondaryTrackColor 2nd Color of the track. The Color class is in `color.js`.
   * @param {Number} trackColorAnimDuration The duration of the color animation.
   * @param {String} trackColorPulse Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
   * @param {Number} trackPulseLength The tile length of track pulse.
   * @param {String} trackStyle Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
   */
  constructor(
    trackColorType,
    trackColor,
    secondaryTrackColor,
    trackColorAnimDuration,
    trackColorPulse,
    trackPulseLength,
    trackStyle
  ) {
    super();
    this.trackColorType =
      trackColorType == null ? this.trackColorType : trackColorType;
    this.trackColor = trackColor == null ? this.trackColor : trackColor;
    this.secondaryTrackColor =
      secondaryTrackColor == null
        ? this.secondaryTrackColor
        : secondaryTrackColor;
    this.trackColorAnimDuration =
      trackColorAnimDuration == null
        ? this.trackColorAnimDuration
        : trackColorAnimDuration;
    this.trackColorType =
      trackColorPulse == null ? this.trackColorPulse : trackColorPulse;
    this.trackColorType =
      trackPulseLength == null ? this.trackPulseLength : trackPulseLength;
    this.trackColorType = trackStyle == null ? this.trackStyle : trackStyle;
  }

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
   */
  trackColorType = TRACK_COLOR_TYPE.SINGLE;

  /**
   * 1st Color of the track. The Color class is in `color.js`
   */
  trackColor = new Color();

  /**
   * 2nd Color of the track. The Color class is in `color.js`
   */
  secondaryTrackColor = new Color();

  /**
   * The duration of the color animation.
   */
  trackColorAnimDuration = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
   */
  trackColorPulse = TRACK_COLOR_PULSE.NONE;

  /**
   * The tile length of track pulse.
   */
  trackPulseLength = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
   */
  trackStyle = TRACK_STYLE.STANDARD;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "trackColorType": ${JSON.stringify(
      params[0] == null ? this.trackColorType : params[0]
    )}, "trackColor": ${JSON.stringify(
      (params[1] == null ? this.trackColor : params[1]).toString()
    )}, "secondaryTrackColor": ${JSON.stringify(
      (params[2] == null ? this.secondaryTrackColor : params[2]).toString()
    )}, "trackColorAnimDuration": ${JSON.stringify(
      params[3] == null ? this.trackColorAnimDuration : params[3]
    )}, "trackColorPulse": ${JSON.stringify(
      params[4] == null ? this.trackColorPulse : params[4]
    )}, "trackPulseLength": ${JSON.stringify(
      params[5] == null ? this.trackPulseLength : params[5]
    )}, "trackStyle": ${JSON.stringify(
      params[6] == null ? this.trackStyle : params[6]
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

export default MapEvent_ColorTrack;
