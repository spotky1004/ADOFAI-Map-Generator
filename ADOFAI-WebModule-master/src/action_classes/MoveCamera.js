import ActionValue from "../ActionValue.js";
import EASE from "../data_types/ease.js";
import RELATIVE_TO from "../data_types/relativeto.js";

/**
 * Class for storing values of MoveCamera action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo`, `ease` PROPERTY.
 */
class MapEvent_MoveCamera extends ActionValue {
  /**
   * Create a MoveCamera event using these parameters.
   * @param {Number} duration Duration of the camera movement.
   * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `relativeto.js`.
   * @param {[Number, Number]} position Position of the camera's destination.
   * @param {Number} rotation Rotation of the camera's destination.
   * @param {Number} zoom Zoom of the camera's destination.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} ease Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    duration,
    relativeTo,
    position,
    rotation,
    zoom,
    angleOffset,
    ease,
    eventTag
  ) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.relativeTo = relativeTo == null ? this.relativeTo : relativeTo;
    this.position = position == null ? this.position : position;
    this.rotation = rotation == null ? this.rotation : rotation;
    this.zoom = zoom == null ? this.zoom : zoom;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.ease = ease == null ? this.ease : ease;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of the camera movement.
   */
  duration = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `relativeto.js`.
   */
  relativeTo = RELATIVE_TO.PLAYER;

  /**
   * Position of the camera's destination.
   */
  position = [0, 0];

  /**
   * Rotation of the camera's destination.
   */
  rotation = 0;

  /**
   * Zoom of the camera's destination.
   */
  zoom = 160;

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
    )}, "relativeTo": ${JSON.stringify(
      params[1] == null ? this.relativeTo : params[1]
    )}, "position": [${JSON.stringify(
      (params[2] == null ? this.position : params[2])[0]
    )}, ${JSON.stringify(
      (params[2] == null ? this.position : params[2])[1]
    )}], "rotation": ${JSON.stringify(
      params[3] == null ? this.rotation : params[3]
    )}, "zoom": ${JSON.stringify(
      params[4] == null ? this.zoom : params[4]
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

export default MapEvent_MoveCamera;
