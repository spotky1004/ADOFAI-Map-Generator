import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import BG_DISPLAY_MODE from "../data_types/bgdisplaymode.js";

/**
 * Class for storing values of CustomBackground action.
 *
 * DO NOT MANUALLY USE STRING IN `bgDisplayMode` PROPERTY.
 */
class MapEvent_CustomBackground extends ActionValue {
  /**
   * Create a CustomBackground event using these parameters.
   * @param {Color} color Color of the background (without image). The Color class is in `color.js`.
   * @param {String} bgImage Location of the image file relative to the map file.
   * @param {Color} imageColor Color of the background (with image). The Color class is in `color.js`.
   * @param {[Number, Number]} parallax Parallax of the image.
   * @param {String} bgDisplayMode Please use enum instead of manually typing the string. Enum's filename is `bgdisplaymode.js`.
   * @param {Boolean} lockRot Whether lock rotation of an image or not.
   * @param {Boolean} loopBG Whether looping a background image or not.
   * @param {Number} unscaledSize Size of an image when unscaled.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    color,
    bgImage,
    imageColor,
    parallax,
    bgDisplayMode,
    lockRot,
    loopBG,
    unscaledSize,
    angleOffset,
    eventTag
  ) {
    super();
    this.color = color == null ? this.color : color;
    this.bgImage = bgImage == null ? this.bgImage : bgImage;
    this.imageColor = imageColor == null ? this.imageColor : imageColor;
    this.parallax = parallax == null ? this.parallax : parallax;
    this.bgDisplayMode =
      bgDisplayMode == null ? this.bgDisplayMode : bgDisplayMode;
    this.lockRot = lockRot == null ? this.lockRot : lockRot;
    this.loopBG = loopBG == null ? this.loopBG : loopBG;
    this.unscaledSize = unscaledSize == null ? this.unscaledSize : unscaledSize;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Color of the background (without image). The Color class is in `color.js`.
   */
  color = new Color();

  /**
   * Location of the image file relative to the map file.
   */
  bgImage = new String();

  /**
   * Color of the background (with image). The Color class is in `color.js`.
   */
  imageColor = new Color();

  /**
   * Parallax of the image.
   */
  parallax = [0, 0];

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `bgdisplaymode.js`.
   */
  bgDisplayMode = BG_DISPLAY_MODE.FIT_TO_SCREEN;

  /**
   * Whether lock rotation of an image or not.
   */
  lockRot = false;

  /**
   * Whether looping a background image or not.
   */
  loopBG = false;

  /**
   * Size of an image when unscaled.
   */
  unscaledSize = 100;

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
    return `, "color": ${JSON.stringify(
      (params[0] == null ? this.color : params[0]).toString()
    )}, "bgImage": ${JSON.stringify(
      params[1] == null ? this.bgImage : params[1]
    )}, "imageColor": ${JSON.stringify(
      (params[2] == null ? this.imageColor : params[2]).toString()
    )}, "parallax": [${JSON.stringify(
      (params[3] == null ? this.parallax : params[3])[0]
    )}, ${JSON.stringify(
      (params[3] == null ? this.parallax : params[3])[1]
    )}], "bgDisplayMode": ${JSON.stringify(
      params[4] == null ? this.bgDisplayMode : params[4]
    )}, "lockRot": ${JSON.stringify(
      this.lockRot ? "Enabled" : "Disabled"
    )}, "loopBG": ${JSON.stringify(
      (params[5] == null ? this.loopBG : params[5]) ? "Enabled" : "Disabled"
    )}, "unscaledSize": ${JSON.stringify(
      params[6] == null ? this.unscaledSize : params[6]
    )}, "angleOffset": ${JSON.stringify(
      params[7] == null ? this.angleOffset : params[7]
    )}, "eventTag": ${JSON.stringify(
      params[8] == null ? this.eventTag : params[8]
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

export default MapEvent_CustomBackground;
