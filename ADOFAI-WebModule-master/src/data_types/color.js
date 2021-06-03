/**
 * Class for managing customizable hexadecimal color.
 */
class Color {
  /**
   * Create a color using constructor.
   * @param {String | Number} val Original hexadecimal string or number to set color. ex) 'ff0000', 0xabcdef, 567890.
   */
  constructor(val) {
    switch (typeof val) {
      case "string":
        if (val.length != 0) {
          val = val.replace("#", "");
          var c = val.repeat(6).substr(0, 6);
          this.R = parseInt(c.substr(0, 2), 16);
          this.G = parseInt(c.substr(2, 2), 16);
          this.B = parseInt(c.substr(4, 2), 16);
        }
        break;

      case "number":
        val = Math.abs(val);
        var c = "000000" + val.toString(16);
        c = c.substr(val.length - 6, 6);
        this.R = parseInt(c.substr(0, 2), 16);
        this.G = parseInt(c.substr(2, 2), 16);
        this.B = parseInt(c.substr(4, 2), 16);
        break;
    }
  }

  /**
   * R is an integer between 0 ~ 255 deciding capacity of Red in the color.
   *
   * You can use `color.R = 0;` to set its color.
   */
  R = 255;

  /**
   * G is an integer between 0 ~ 255 deciding capacity of Green in the color.
   *
   * You can use `color.G = 0;` to set its color.
   */
  G = 255;

  /**
   * B is an integer between 0 ~ 255 deciding capacity of Blue in the color.
   *
   * You can use `color.B = 0;` to set its color.
   */
  B = 255;

  /**
   * Returns a value converted to HEX string. DOES NOT INCLUDE #.
   */
  toString() {
    let arr = Object.keys(this).filter((x) => x.length == 1);
    for (var i = 0; i < 3; i++) {
      if (this[arr[i]] < 0) this[arr[i]] = 0;
      if (this[arr[i]] > 255) this[arr[i]] = 255;
    }
    var _r = Math.floor(this.R).toString(16);
    var _g = Math.floor(this.G).toString(16);
    var _b = Math.floor(this.B).toString(16);
    if (_r.length != 2)
      _r = _r.length > 2 ? _r.substr(0, 2) : "0".repeat(2 - _r.length) + _r;
    if (_g.length != 2)
      _g = _g.length > 2 ? _g.substr(0, 2) : "0".repeat(2 - _g.length) + _g;
    if (_b.length != 2)
      _b = _b.length > 2 ? _b.substr(0, 2) : "0".repeat(2 - _b.length) + _b;
    return `${_r}${_g}${_b}`;
  }

  /**
   * Returns a value converted to a number.
   */
  toNumber() {
    return Number(this.toString());
  }
}

export default Color;
