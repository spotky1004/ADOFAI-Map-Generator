/**
 * Class for easy manipulation of paths.
 *
 * Used directly in `pathData: "..."`.
 *
 * Contains every types of path. Do `Object.keys(AdofaiMapPathData.PATH_LIST)` to get all list of Path in String.
 */

class AdofaiMapPathData {
  /**
   * Create a path using a constructor.
   * @param {String | Number} val Base value to create a instance of.
   *
   * When you input String: You are creating a path using a **Tile Code**.
   *
   * When you input Number: You are creating a path using a **Absolute Angle of the tile**. If you want to get a twirled one's angle, input `360 - angle`.
   *
   * Inputting number might return instance with empty values when no corresponding tile is found.
   *
   * @param {{findNearestTileByAngle: boolean, useSmallerAngleOnOverlapping: boolean, fallback: String | null}} settings Customizable settings to generate a tile.
   */
  constructor(
    val,
    settings = {
      /**
       * Whether to try to find the most closest angle when the given angle does not exist
       */
      findNearestTileByAngle: false,

      /**
       * Whether to use the tile with a higher (<-- false) or smaller (<-- true) angle when difference of nearest angle is both the same.
       */
      useSmallerAngleOnOverlapping: true,

      /**
       * Use this to return a specific tile as a "fallback tile" instead of empty class.
       *
       * You should input a tile code here.
       */
      fallback: null,
    }
  ) {
    if (!settings || Object.keys(settings || {}).length != 3)
      settings = {
        findNearestTileByAngle: false,
        useSmallerAngleOnOverlapping: true,
        fallback: null,
      };

    if (settings.fallback) {
      if (!AdofaiMapPathData.PATH_LIST.includes(settings.fallback)) {
        settings.fallback = null;
      }
    }

    switch (typeof val) {
      case "string":
        var tilecode = val[0];

        if (AdofaiMapPathData.PATH_LIST.includes(tilecode)) {
          this.code = tilecode;
          this.absoluteAngle =
            AdofaiMapPathData.ABSOLUTE_ANGLE_LIST[
              AdofaiMapPathData.PATH_LIST.indexOf(tilecode)
            ];
          if (this.code == null || this.absoluteAngle == null)
            return new AdofaiMapPathData(settings.fallback);
        } else if (settings.fallback != null) {
          return new AdofaiMapPathData(settings.fallback);
        }

        break;
      case "number":
        if (AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.includes(val)) {
          this.absoluteAngle = val;
          this.code =
            AdofaiMapPathData.PATH_LIST[
              AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.indexOf(val)
            ];
          if (this.code == null || this.absoluteAngle == null)
            return new AdofaiMapPathData(settings.fallback);
        } else {
          if (settings.findNearestTileByAngle) {
            var sorted = AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.sort();
            var nearest = 0;
            var dist = Infinity;
            sorted.forEach((n) => {
              var d = Math.abs(nearest - val);
              if (d < dist) {
                dist = d;
                nearest = n;
              } else if (d == dist && n != nearest)
                nearest = settings.useSmallerAngleOnOverlapping
                  ? n > nearest
                    ? nearest
                    : n
                  : n < nearest
                  ? nearest
                  : n;
            });
            var index = AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.indexOf(nearest);
            if (index != null) {
              this.code = AdofaiMapPathData.PATH_LIST[index];
              this.absoluteAngle = nearest;
              if (this.code == null || this.absoluteAngle == null)
                return new AdofaiMapPathData(settings.fallback);
            } else return new AdofaiMapPathData(settings.fallback);
          } else {
            if (settings.fallback != null) {
              return new AdofaiMapPathData(settings.fallback);
            }
          }
        }
        break;
    }
  }

  /**
   * Code of the path.
   */
  code = new String();

  /**
   * Absolute angle of the path.
   */
  absoluteAngle = NaN;

  /**
   * List of the path type as String.
   */
  static PATH_LIST = [
    "U",
    "R",
    "L",
    "D",
    "E",
    "C",
    "Q",
    "Z",
    "H",
    "G",
    "T",
    "J",
    "M",
    "B",
    "F",
    "N",
    "!",
    "5",
    "6",
    "7",
    "8",
    "q",
    "W",
    "x",
    "V",
    "Y",
    "A",
    "p",
    "o",
  ];

  /**
   * List of the path's absolute angle as Number. (Use same index with PATH_LIST to get the path key)
   */
  static ABSOLUTE_ANGLE_LIST = [
    90,
    180,
    360,
    270,
    135,
    225,
    45,
    315,
    30,
    60,
    120,
    150,
    210,
    240,
    300,
    330,
    0,
    108,
    252,
    900 / 7,
    1620 / 7,
    75,
    15,
    345,
    285,
    255,
    195,
    165,
    105,
  ];

  /**
   * Calculate the Angle between tiles. THIS IS NOT FOR ! TILES.
   * ! Tile can be calculated differently rather than getting relative angle.
   * For example, String `RD!R`'s R.A is 180, 270, (0, ) 270.
   * You can do `360 - TileD.absoluteAngle` and use its angle to create and use a temporary tile to calculate angle between `D!` and `R`.
   *
   * Correct Usage:
   * GetRelativeAngle(tileA, tileB, false);
   * GetRelativeAngle(tileA.code + "5768888755786", tileB, true);
   *
   * @param {AdofaiMapPathData | String} thisTile First tile to be a base for second tile's angle. (Input String when calculating all of 5, 6, 7, 8. They should be calculated at once)
   * @param {AdofaiMapPathData} nextTile Second tile to base on the first tile.
   * @param {Boolean} twirled Whether the planet is twirled or not.
   */
  static GetRelativeAngle(thisTile, nextTile, twirled) {
    let absTiles = ["5", "6", "7", "8"];
    var t, n;
    if (absTiles.includes(nextTile.code)) {
      n = nextTile.absoluteAngle;
    } else {
      // normal calculation
      if (typeof thisTile == "string") {
        // calc as 5 6 7 8 str
        var lastChar = thisTile[thisTile.length - 1];
        if (absTiles.includes(lastChar)) {
          // it ends with 5 6 7 8
          var numbers = [];
          for (var i = 0; i < 4; i++) {
            var regex = new RegExp(`[^${i + 5}]`, "g");
            numbers.push(thisTile.replace(regex, "").length);
          }
          t =
            (72 * numbers[0] +
              288 * numbers[1] +
              (900 / 7) * numbers[2] +
              (1620 / 7) * numbers[3]) %
            360;
        } else {
          // it does not end with 5 6 7 8
          var simulatedTile = new this(lastChar);
          if (isNaN(simulatedTile.absoluteAngle)) {
            // fallback, return NaN
            return NaN;
          } else t = simulatedTile.absoluteAngle;
        }
      } else t = thisTile.absoluteAngle;
    }

    var r = (n - t + 540) % 360;
    0 == r && 0 != n && (r = 360),
      twirled && (r = 360 - r),
      0 == r && (r = 360);
    return r;
  }

  /**
   * Calculate the milliseconds between 2 tiles.
   * @param {Number} Angle Angle between 2 tiles.
   * @param {Number} BPM BPM on that specific tile.
   */
  static GetMsBetweenTile(Angle, BPM) {
    return (1000 * Angle) / (3 * BPM);
  }
}

export default AdofaiMapPathData;
