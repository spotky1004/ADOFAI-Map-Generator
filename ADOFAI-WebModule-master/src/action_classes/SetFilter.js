import ActionValue from "../ActionValue.js";
import FILTER from "../data_types/filter.js";

/**
 * Class for storing values of SetFilter action.
 *
 * DO NOT MANUALLY USE STRING IN `filter` PROPERTY.
 */
class MapEvent_SetFilter extends ActionValue {
  /**
   * Create a SetFilter event using these parameters.
   * @param {String} filter Type of filter. Please use enum instead of manually typing the string. Enum is saved at `filter.js`.
   * @param {Boolean} enabled Whether enable or disable the filter.
   * @param {Number} intensity Intensity of the filter.
   * @param {Boolean} disableOthers Disable other filters when this event occurs.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    filter,
    enabled,
    intensity,
    disableOthers,
    angleOffset,
    eventTag
  ) {
    super();
    this.filter = filter == null ? this.filter : filter;
    this.enabled = enabled == null ? this.enabled : enabled;
    this.intensity = intensity == null ? this.intensity : intensity;
    this.disableOthers =
      disableOthers == null ? this.disableOthers : disableOthers;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Type of filter. Please use enum instead of manually typing the string. Enum is saved at `filter.js`.
   */
  filter = FILTER.GRAYSCALE;

  /**
   * Whether enable or disable the filter.
   */
  enabled = true;

  /**
   * Intensity of the filter.
   */
  intensity = 100;

  /**
   * Disable other filters when this event occurs.
   */
  disableOthers = false;

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
    return `, "filter": ${JSON.stringify(
      params[0] == null ? this.filter : params[0]
    )}, "enabled": ${JSON.stringify(
      (params[1] == null ? this.enabled : params[1]) ? "Enabled" : "Disabled"
    )}, "intensity": ${JSON.stringify(
      params[2] == null ? this.intensity : params[2]
    )}, "disableOthers": ${JSON.stringify(
      (params[3] == null ? this.disableOthers : params[3])
        ? "Enabled"
        : "Disabled"
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

export default MapEvent_SetFilter;
