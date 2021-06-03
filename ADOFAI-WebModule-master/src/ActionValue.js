/**
 * Class for making instance of the specific event value.
 *
 * In most cases, you won't need to use this class. It's actually an empty class.
 *
 * However, when you are making a new class for an event or need to get all of the types in one class, this is what you are looking for.
 */
class AdofaiActionValue {
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
  fromObject(obj) {
    return new this();
  }
}

export default AdofaiActionValue;
