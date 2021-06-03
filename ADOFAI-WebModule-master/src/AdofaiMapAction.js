import AdofaiActionValue from "./ActionValue.js";
import AddDecoration from "./action_classes/AddDecoration.js";
import AnimateTrack from "./action_classes/AnimateTrack.js";
import Bloom from "./action_classes/Bloom.js";
import Checkpoint from "./action_classes/Checkpoint.js";
import ColorTrack from "./action_classes/ColorTrack.js";
import CustomBackground from "./action_classes/CustomBackground.js";
import Flash from "./action_classes/Flash.js";
import HallOfMirrors from "./action_classes/HallOfMirrors.js";
import MoveCamera from "./action_classes/MoveCamera.js";
import MoveDecorations from "./action_classes/MoveDecorations.js";
import MoveTrack from "./action_classes/MoveTrack.js";
import PositionTrack from "./action_classes/PositionTrack.js";
import RecolorTrack from "./action_classes/RecolorTrack.js";
import RepeatEvents from "./action_classes/RepeatEvents.js";
import SetConditionalEvents from "./action_classes/SetConditionalEvents.js";
import SetFilter from "./action_classes/SetFilter.js";
import SetHitsound from "./action_classes/SetHitsound.js";
import SetPlanetRotation from "./action_classes/SetPlanetRotation.js";
import SetSpeed from "./action_classes/SetSpeed.js";
import ShakeScreen from "./action_classes/ShakeScreen.js";
import Twirl from "./action_classes/Twirl.js";

/**
 * Class for easy manipulation of events.
 *
 * Used directly in `actions: [ ... ]`.
 *
 * Contains every actions. Do `AdofaiMapAction.ACTIONS_LIST` to get all list of classes.
 *
 * AdofaiActionValue is in `ActionValue.js`.
 */
class AdofaiMapAction {
  /**
   * Create an event (action) using a constructor.
   * @param {Number} floor Integer deciding the event should occur in which tile.
   * @param {String} eventType Type of event which will decide the eventValue.
   * @param {AdofaiActionValue} eventValue AdofaiActionValue is in `ActionValue.js`. This parameter is used when manually inputting the value.
   */
  constructor(floor, eventType, eventValue = null) {
    this.floor = floor;
    this.eventType = eventType;

    if (eventValue == null) {
      var ThisClass = AdofaiMapAction.ACTIONS_LIST[eventType];

      if (["function", "object"].includes(typeof ThisClass)) {
        this.eventValue = new ThisClass();
      }
    } else {
      this.eventValue = eventValue;
    }
  }

  /**
   * This is an superclass for custom action values depending on the type of action.
   */
  static EmptyActionValue = AdofaiActionValue;

  /**
   * This contains every actions as class.
   *
   * For example, use `new ACTIONS_LIST["SetSpeed"](...);` to create a eventValue for SetSpeed action.
   */
  static ACTIONS_LIST = {
    /**
     * Class for storing values of AddDecoration action.
     *
     * DO NOT MANUALLY USE STRING IN `relativeTo` PARAMETER.
     */
    AddDecoration: AddDecoration,

    /**
     * Class for storing values of AnimateTrack action.
     *
     * DO NOT MANUALLY USE STRING IN `trackAnimation`, `trackDisappearAnimation` PARAMETER.
     */
    AnimateTrack: AnimateTrack,

    /**
     * Class for storing values of Bloom action.
     */
    Bloom: Bloom,

    /**
     * A checkpoint event.
     */
    Checkpoint: Checkpoint,

    /**
     * Class for storing values of ColorTrack action.
     *
     * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PARAMETER.
     */
    ColorTrack: ColorTrack,

    /**
     * Class for storing values of CustomBackground action.
     *
     * DO NOT MANUALLY USE STRING IN `bgDisplayMode` PARAMETER.
     */
    CustomBackground: CustomBackground,

    /**
     * Class for storing values of Flash action.
     *
     * DO NOT MANUALLY USE STRING IN `plane` PARAMETER.
     */
    Flash: Flash,

    /**
     * Class for storing values of HallOfMirrors action.
     */
    HallOfMirrors: HallOfMirrors,

    /**
     * Class for storing values of MoveCamera action.
     *
     * DO NOT MANUALLY USE STRING IN relativeTo, `ease` PARAMETER.
     */
    MoveCamera: MoveCamera,

    /**
     * Class for storing values of MoveDecoration action.
     *
     * DO NOT MANUALLY USE STRING IN `ease` PARAMETER.
     */
    MoveDecorations: MoveDecorations,

    /**
     * Class for storing values of MoveTrack action.
     *
     * DO NOT MANUALLY USE STRING IN `startTile`, `endTile`, `ease` PARAMETER.
     */
    MoveTrack: MoveTrack,

    /**
     * Class for storing values of PositionTrack action.
     */
    PositionTrack: PositionTrack,

    /**
     * Class for storing values of RecolorTrack action.
     *
     * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PARAMETER.
     */
    RecolorTrack: RecolorTrack,

    /**
     * Class for storing values of RepeatEvents action.
     */
    RepeatEvents: RepeatEvents,

    /**
     * Class for storing values of SetConditionalEvents action.
     */
    SetConditionalEvents: SetConditionalEvents,

    /**
     * Class for storing values of SetFilter action.
     *
     * DO NOT MANUALLY USE STRING IN `filter` PARAMETER.
     */
    SetFilter: SetFilter,

    /**
     * Class for storing values of SetHitsound action.
     *
     * DO NOT MANUALLY USE STRING IN `hitsound` PARAMETER.
     */
    SetHitsound: SetHitsound,

    /**
     * Class for storing values of SetPlanetRotation action.
     *
     * DO NOT MANUALLY USE STRING IN `ease` PARAMETER.
     */
    SetPlanetRotation: SetPlanetRotation,

    /**
     * Class for storing values of SetSpeed action.
     */
    SetSpeed: SetSpeed,

    /**
     * Class for storing values of ShakeScreen action.
     */
    ShakeScreen: ShakeScreen,

    /**
     * Class for storing values of Twirl action.
     */
    Twirl: Twirl,
  };

  /**
   * Integer deciding the event should occur in which tile.
   */
  floor = 1;

  /**
   * Type of event which will decide the eventValue.
   */
  eventType = new String();

  /**
   * This value stores lagacy value generated in the constructor.
   *
   * AdofaiActionValue is in `ActionValue.js`.
   */
  eventValue = new AdofaiActionValue();
}

export default AdofaiMapAction;
