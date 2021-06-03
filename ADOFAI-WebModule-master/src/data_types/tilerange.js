/**
 * Enum for easy manage of tile range for moving a track / tracks.
 */
const TILE_RANGE = {};

Object.defineProperty(TILE_RANGE, "THIS", {
  value: "ThisTile",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(TILE_RANGE, "FIRST", {
  value: "Start",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(TILE_RANGE, "LAST", {
  value: "End",
  writable: false,
  enumerable: true,
  configurable: false,
});

export default TILE_RANGE;
