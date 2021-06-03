/**
 * Enum for easy manage of an ADOFAI object's relative position.
 */
const RELATIVE_TO = {};

Object.defineProperty(RELATIVE_TO, "PLAYER", {
  value: "Player",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(RELATIVE_TO, "TILE", {
  value: "Tile",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(RELATIVE_TO, "GLOBAL", {
  value: "Global",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(RELATIVE_TO, "LAST_POSITION", {
  value: "LastPosition",
  writable: false,
  enumerable: true,
  configurable: false,
});

export default RELATIVE_TO;
