import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of SetConditionalEvents action.
 */
class MapEvent_SetConditionalEvents extends ActionValue {
  /**
   * Create a SetConditionalEvents event using these parameters.
   * @param {String} perfectTag Event to execute with certain tag when input judgement is "Perfect".
   * @param {String} hitTag Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
   * @param {String} barelyTag Event to execute with certain tag when input judgement is "Early!" / "Late!".
   * @param {String} missTag Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
   * @param {String} lossTagEvent Event to execute with certain tag when player is "Dead".
   */
  constructor(perfectTag, hitTag, barelyTag, missTag, lossTag) {
    super();
    this.perfectTag = perfectTag == null ? this.perfectTag : perfectTag;
    this.hitTag = hitTag == null ? this.hitTag : hitTag;
    this.barelyTag = barelyTag == null ? this.barelyTag : barelyTag;
    this.missTag = missTag == null ? this.missTag : missTag;
    this.lossTag = lossTag == null ? this.lossTag : lossTag;
  }

  /**
   * Event to execute with certain tag when input judgement is "Perfect".
   */
  perfectTag = new String();

  /**
   * Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
   */
  hitTag = new String();

  /**
   * Event to execute with certain tag when input judgement is "Early!" / "Late!".
   */
  barelyTag = new String();

  /**
   * Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
   */
  missTag = new String();

  /**
   * Event to execute with certain tag when player is "Dead".
   */
  lossTag = new String();

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "perfectTag": ${JSON.stringify(
      params[0] == null ? this.perfectTag : params[0]
    )}, "hitTag": ${JSON.stringify(
      params[1] == null ? this.hitTag : params[1]
    )}, "barelyTag": ${JSON.stringify(
      params[2] == null ? this.barelyTag : params[2]
    )}, "missTag": ${JSON.stringify(
      params[3] == null ? this.missTag : params[3]
    )}, "lossTag": ${JSON.stringify(
      params[4] == null ? this.lossTag : params[4]
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

export default MapEvent_SetConditionalEvents;
