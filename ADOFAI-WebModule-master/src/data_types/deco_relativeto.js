/**
 * Enum for easy manage of a decoration's relative position.
 */
const DECO_RELATIVE_TO = {};

Object.defineProperty(DECO_RELATIVE_TO, "TILE", {
  value: "Tile",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(DECO_RELATIVE_TO, "GLOBAL", {
  value: "Global",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(DECO_RELATIVE_TO, "REDPLANET", {
  value: "RedPlanet",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(DECO_RELATIVE_TO, "BLUEPLANET", {
  value: "BluePlanet",
  writable: false,
  enumerable: true,
  configurable: false,
});

export default DECO_RELATIVE_TO;
