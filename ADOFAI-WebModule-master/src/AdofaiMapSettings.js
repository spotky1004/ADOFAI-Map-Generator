import Color from "./data_types/color.js";
import HITSOUNDS from "./data_types/hitsound.js";
import TRACK_COLOR_TYPE from "./data_types/trackcolortype.js";
import TRACK_COLOR_PULSE from "./data_types/trackcolorpulse.js";
import TRACK_STYLE from "./data_types/trackstyle.js";
import APPEAR_ANIM from "./data_types/trackappearanim.js";
import DISAPPEAR_ANIM from "./data_types/trackdisappearanim.js";
import BG_DISPLAY_MODE from "./data_types/bgdisplaymode.js";
import RELATIVE_TO from "./data_types/relativeto.js";
import SPECIAL_ARTIST_TYPE from "./data_types/special_artist_type.js";
import EASE from "./data_types/ease.js";

var obj = {
  /**
   * This is the version of the map.
   *
   * Please do not change this manually, unless you are supporting future ADOFAI version or past/legacy version of ADOFAI.
   *
   * Does NOT allow decimals.
   */
  version: 2,

  /**
   * Name of the artist made the music.
   */
  artist: "Composer",

  /**
   * Special situtations you don't need to upload a permission from the artist.
   *
   * Enum is saved at `special_artist_type.js`.
   */
  specialArtistType: SPECIAL_ARTIST_TYPE.NONE,

  /**
   * Location of an image file relative to map file's directory.
   *
   * Image file containing whether you are allowed to this music or not.
   */
  artistPermission: "",

  /**
   * Name of the song.
   */
  song: "Music",

  /**
   * Name of the creator made the map.
   */
  author: "Creator",

  /**
   * I don't know what this is.
   */
  separateCountdownTime: true,

  /**
   * Location of an image file relative to map file's directory.
   *
   * Used on steam workshop preview's portal image.
   */
  previewImage: "",

  /**
   * Location of an image file relative to map file's directory.
   *
   * Used on steam workshop preview's tile selection icon.
   */
  previewIcon: "",

  /**
   * Color of preview icon.
   *
   * Color class is in `color.js`.
   */
  previewIconColor: new Color(),

  /**
   * Music preview's start timing (measured as seconds).
   *
   * Allows decimals.
   */
  previewSongStart: 0,

  /**
   * Music preview's duration (measured as seconds).
   *
   * Allows decimals.
   */
  previewSongDuration: 10,

  /**
   * If this map could cause seizure by playing / watching the map.
   */
  seizureWarning: false,

  /**
   * Description of the level. DO NOT USE NEWLINES.
   */
  levelDesc: "Your level's description! (Created with ADOFAI-WebModule)",

  /**
   * tag of the level
   */
  levelTags: "",

  /**
   * Link to composer's soundcloud profile or youtube channel or anything.
   */
  artistLinks: "",

  /**
   * Difficulty of the map.
   *
   * (Minimum 1 ~ Maximum 10) Does NOT allow decimals.
   */
  difficulty: 1,

  /**
   * Location of an sound file relative to map file's directory.
   *
   * Music file containing the music played when playing the level.
   */
  songFilename: "",

  /**
   * BPM of the music.
   *
   * Decides planet spinning speed.
   *
   * Allows decimals.
   */
  bpm: 120,

  /**
   * Volume of the music.
   *
   * (Minimum 0 ~ Maximum 100) Allows decimals.
   */
  volume: 100,

  /**
   * Offset of the music.
   *
   * Allows decimals, but not suggested.
   */
  offset: 0,

  /**
   * Pitch of the music. (Changes speed.)
   *
   * (Minimum > 0 ~ Maximum 2147483647) Allows decimals.
   */
  pitch: 100,

  /**
   * Hitsound of the tile.
   *
   * Enum is saved at `hitsound.js`.
   */
  hitsound: HITSOUNDS.KICK,

  /**
   * Volume of hitsounds.
   *
   * (Minimum 0 ~ Maximum 100) Allows decimals.
   */
  hitsoundVolume: 100,

  /**
   * Countdown tick right before playing the level.
   *
   * Does NOT allow decimals.
   */
  countdownTicks: 4,

  /**
   * Type of track coloring.
   *
   * Enum is saved at `trackcolortype.js`.
   */
  trackColorType: TRACK_COLOR_TYPE.SINGLE,

  /**
   * Color of the track.
   *
   * Color class is in `color.js`.
   */
  trackColor: new Color(),

  /**
   * Secondary color of the track.
   *
   * Color class is in `color.js`.
   */
  secondaryTrackColor: new Color(),

  /**
   * Track color animation's duration.
   *
   * Allows decimals.
   */
  trackColorAnimDuration: 2,

  /**
   * Type of track color's pulse.
   *
   * Enum is saved at `trackcolorpulse.js`.
   */
  trackColorPulse: TRACK_COLOR_PULSE.NONE,

  /**
   * Length (Timing) of total track color pulse cycle.
   *
   * Allows decimals.
   */
  trackPulseLength: 10,

  /**
   * Style (Shape) of the track.
   *
   * Enum is saved at `trackstyle.js`.
   */
  trackStyle: TRACK_STYLE.STANDARD,

  /**
   * Type of track's appear animation.
   *
   * Enum is saved at `trackappearanim.js`.
   */
  trackAnimation: APPEAR_ANIM.NONE,

  /**
   * Beats ahead to show track's appearing animation.
   *
   * Allows decimals.
   */
  beatsAhead: 8,

  /**
   * Type of track's disappear animation.
   *
   * Enum is saved at `trackdisappearanim.js`.
   */
  trackDisappearAnimation: DISAPPEAR_ANIM.NONE,

  /**
   * Beats behind to show track's disappearing animation.
   *
   * Allows decimals.
   */
  beatsBehind: 1,

  /**
   * Background color of the map when not using the custom image file.
   *
   * Color class is in `color.js`.
   */
  backgroundColor: new Color(),

  /**
   * Location of an sound file relative to map file's directory.
   *
   * Image file for this map's background.
   */
  bgImage: "",

  /**
   * Color of the image in background. Use `#FFFFFF` for default.
   *
   * Color class is in `color.js`.
   */
  bgImageColor: new Color(),

  /**
   * Parallax of the image file.
   */
  parallax: [100, 100],

  /**
   * Type of background display mode when using custom image file for the background.
   *
   * Enum is saved at `bgdisplaymode.js`.
   */
  bgDisplayMode: BG_DISPLAY_MODE.FIT_TO_SCREEN,

  /**
   * Whether lock the rotation of an image or not.
   */
  lockRot: false,

  /**
   * Whether loop the image in background or not.
   */
  loopBG: false,

  /**
   * Unscaled size of the image.
   *
   * (Minimum 0 ~ Maximum 100) Allows decimals.
   */
  unscaledSize: 100,

  /**
   * Type of camera's position relativity.
   *
   * Enum is saved at `relativeto.js`.
   */
  relativeTo: RELATIVE_TO.PLAYER,

  /**
   * Position of the camera.
   */
  position: [0, 0],

  /**
   * Rotation of the camera.
   *
   * Allows decimals.
   */
  rotation: 0,

  /**
   * Zoom of the camera.
   *
   * Allows decimals.
   */
  zoom: 160,

  /**
   * Location of an video file relative to map file's directory.
   *
   * Use this if you have background as video file.
   */
  bgVideo: "",

  /**
   * Whether loop the video in the background or not.
   */
  loopVideo: false,

  /**
   * Video's timing offset.
   *
   * Allows decimals, but not suggested.
   */
  vidOffset: 0,

  /**
   * Whether give tile event's icon outline or not.
   */
  floorIconOutlines: false,

  /**
   * Whether player is stuck to the tiles (so they move too when moving the tile) or not.
   */
  stickToFloors: false,

  /**
   * Planet's movement easing.
   *
   * Enum is saved at `ease.js`.
   */
  planetEase: EASE.LINEAR,

  /**
   * Planet's easing part.
   *
   * Allows decimals.
   */
  planetEaseParts: 1,
};

export default obj;
