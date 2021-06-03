/**
 * Enum for easy manage of background's display mode.
 */
const BG_DISPLAY_MODE = {};

Object.defineProperty(BG_DISPLAY_MODE, "FIT_TO_SCREEN", {
  value: "FitToScreen",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(BG_DISPLAY_MODE, "UNSCALED", {
  value: "Unscaled",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(BG_DISPLAY_MODE, "TILED", {
  value: "Tiled",
  writable: false,
  enumerable: true,
  configurable: false,
});

export default BG_DISPLAY_MODE;
