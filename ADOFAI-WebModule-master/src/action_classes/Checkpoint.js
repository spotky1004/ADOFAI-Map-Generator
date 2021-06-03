import ActionValue from "../ActionValue.js";

/**
 * A checkpoint event.
 */
class MapEvent_Checkpoint extends ActionValue {
  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return ``;
  }

  /**
   * Create value by converting from object
   * @param {Object} obj
   */
  static fromObject(obj) {
    return new this();
  }
}

export default MapEvent_Checkpoint;
