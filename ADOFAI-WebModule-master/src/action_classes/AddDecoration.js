import ActionValue from "../ActionValue.js";
import DECO_RELATIVE_TO from "../data_types/deco_relativeto.js";

/**
 * Class for storing values of AddDecoration action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo` PROPERTY.
 */
class MapEvent_AddDecoration extends ActionValue {
  /**
   * Create a AddDecoration event using these parameters.
   * @param {String} decorationImage Image file location relative to map file.
   * @param {[Number, Number]} position Position of the decoration.
   * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
   * @param {[Number, Number]} pivotOffset Pivot offset of the decoration.
   * @param {Number} rotation Rotation for the decoration.
   * @param {Number} scale Scale of the decoration.
   * @param {Number} depth Depth of the decoration. (Similar to z-order.)
   * @param {String} tag A tag of the decoration.
   */
  constructor(
    decorationImage,
    position,
    relativeTo,
    pivotOffset,
    rotation,
    scale,
    depth,
    tag
  ) {
    super();
    this.decorationImage =
      decorationImage == null ? this.decorationImage : decorationImage;
    this.position = position == null ? this.position : position;
    this.relativeTo = relativeTo == null ? this.relativeTo : relativeTo;
    this.pivotOffset = pivotOffset == null ? this.pivotOffset : pivotOffset;
    this.rotation = rotation == null ? this.rotation : rotation;
    this.scale = scale == null ? this.scale : scale;
    this.depth = depth == null ? this.depth : depth;
    this.tag = tag == null ? this.tag : tag;
  }

  /**
   * Image file location relative to map file.
   */
  decorationImage = "";

  /**
   * Position of the decoration.
   */
  position = [0, 0];

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
   */
  relativeTo = DECO_RELATIVE_TO.TILE;

  /**
   * Pivot offset of the decoration.
   */
  pivotOffset = [0, 0];

  /**
   * Rotation for the decoration.
   */
  rotation = 0;

  /**
   * Scale of the decoration.
   */
  scale = 100;

  /**
   * Depth of the decoration. (Similar to z-order.)
   */
  depth = 0;

  /**
   * A tag of the decoration.
   */
  tag = "";

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "decorationImage": ${JSON.stringify(
      params[0] == null ? this.decorationImage : params[0]
    )}, "position": [${JSON.stringify(
      (params[1] == null ? this.position : params[1])[0]
    )}, ${JSON.stringify(
      (params[1] == null ? this.position : params[1])[1]
    )}], "relativeTo": ${JSON.stringify(
      params[2] == null ? this.relativeTo : params[2]
    )}, "pivotOffset": [${JSON.stringify(
      (params[3] == null ? this.pivotOffset : params[3])[0]
    )}, ${JSON.stringify(
      (params[3] == null ? this.pivotOffset : params[3])[1]
    )}], "rotation": ${JSON.stringify(
      params[4] == null ? this.rotation : params[4]
    )}, "scale": ${JSON.stringify(
      params[5] == null ? this.scale : params[5]
    )}, "depth": ${JSON.stringify(
      params[6] == null ? this.depth : params[6]
    )}, "tag": ${JSON.stringify(params[6] == null ? this.tag : params[6])}`;
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

export default MapEvent_AddDecoration;
