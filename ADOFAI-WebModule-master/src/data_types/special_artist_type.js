/**
 * Enum for types of special cases you don't need proof for artist's permission.
 */
const SPECIAL_ARTIST_TYPE = {};

Object.defineProperty(SPECIAL_ARTIST_TYPE, "NONE", {
  value: "None",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(SPECIAL_ARTIST_TYPE, "AUTHOR_IS_ARTIST", {
  value: "AuthorIsArtist",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperty(SPECIAL_ARTIST_TYPE, "PUBLIC_LICENSE", {
  value: "PublicLicense",
  writable: false,
  enumerable: true,
  configurable: false,
});

export default SPECIAL_ARTIST_TYPE;
