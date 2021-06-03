// color class is imported separately.
// why cant i use defineProperties to make a list of values at once vscode is so bad it cant read array so theres no autocomplete at all help
import BG_DISPLAY_MODE from "./bgdisplaymode.js";
import DECO_RELATIVETO from "./deco_relativeto.js";
import EASE from "./ease.js";
import FILTER from "./filter.js";
import HITSOUNDS from "./hitsound.js";
import PLANE from "./plane.js";
import RELATIVETO from "./relativeto.js";
import SPECIAL_ARTIST_TYPE from "./special_artist_type.js";
import SPEEDTYPE from "./speedtype.js";
import TILE_RANGE from "./tilerange.js";
import APPEAR_ANIM from "./trackappearanim.js";
import DISAPPEAR_ANIM from "./trackdisappearanim.js";
import TRACK_COLOR_PULSE from "./trackcolorpulse.js";
import TRACK_COLOR_TYPE from "./trackcolortype.js";
import TRACK_STYLE from "./trackstyle.js";

var obj = {};

Object.defineProperty(obj, "BG_DISPLAY_MODES", {
  value: BG_DISPLAY_MODE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "DECO_RELATIVETO", {
  value: DECO_RELATIVETO,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "EASES", {
  value: EASE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "FILTERS", {
  value: FILTER,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "HITSOUNDS", {
  value: HITSOUNDS,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "PLANES", {
  value: PLANE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "RELATIVETO", {
  value: RELATIVETO,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "SPECIAL_ARTIST_TYPE", {
  value: SPECIAL_ARTIST_TYPE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "SPEEDTYPE", {
  value: SPEEDTYPE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "TILE_RANGE_TYPES", {
  value: TILE_RANGE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "TRACK_APPEAR_ANIMATIONS", {
  value: APPEAR_ANIM,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "TRACK_DISAPPEAR_ANIMATIONS", {
  value: DISAPPEAR_ANIM,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "TRACK_COLOR_PULSE_TYPES", {
  value: TRACK_COLOR_PULSE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "TRACK_COLOR_TYPES", {
  value: TRACK_COLOR_TYPE,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(obj, "TRACK_STYLES", {
  value: TRACK_STYLE,
  writable: false,
  enumerable: true,
  configurable: false,
});

export default obj;
