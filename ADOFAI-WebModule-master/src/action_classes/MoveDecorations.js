import ActionValue from "../ActionValue.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of MoveDecoration action.
 *
 * DO NOT MANUALLY USE STRING IN `ease` PROPERTY.
 */
class MapEvent_MoveDecoration extends ActionValue {
  /**
   * Create a MoveDecoration event using these parameters.
   * @param {Number} duration Duration of decoration movement.
   * @param {String} tag Tag of the decoration.
   * @param {[Number, Number]} positionOffset Decoration's destinated position.
   * @param {Number} rotationOffset Decoration's destinated rotation.
   * @param {Number} scale Scale of the decoration.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} ease Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    duration,
    tag,
    positionOffset,
    rotationOffset,
    scale,
    angleOffset,
    ease,
    eventTag
  ) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.tag = tag == null ? this.tag : tag;
    this.positionOffset =
      positionOffset == null ? this.positionOffset : positionOffset;
    this.rotationOffset =
      rotationOffset == null ? this.rotationOffset : rotationOffset;
    this.scale = scale == null ? this.scale : scale;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.ease = ease == null ? this.ease : ease;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of decoration movement.
   */
  duration = 1;

  /**
   * Tag of the decoration.
   */
  tag = new String();

  /**
   * Decoration's destinated position.
   */
  positionOffset = [0, 0];

  /**
   * Decoration's destinated rotation.
   */
  rotationOffset = 0;

  /**
   * Scale of the decoration.
   */
  scale = 100;

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   */
  ease = EASE.LINEAR;

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
    )}, "tag": ${JSON.stringify(
      params[1] == null ? this.tag : params[1]
    )}, "positionOffset": [${JSON.stringify(
      (params[2] == null ? this.positionOffset : params[2])[0]
    )}, ${JSON.stringify(
      (params[2] == null ? this.positionOffset : params[2])[1]
    )}], "rotationOffset": ${JSON.stringify(
      params[3] == null ? this.rotationOffset : params[3]
    )}, "scale": ${JSON.stringify(
      params[4] == null ? this.scale : params[4]
    )}, "angleOffset": ${JSON.stringify(
      params[5] == null ? this.angleOffset : params[5]
    )}, "ease": ${JSON.stringify(
      params[6] == null ? this.ease : params[6]
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

export default MapEvent_MoveDecoration;
