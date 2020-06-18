import {
  Account,
  Ad,
  AdBreak,
  Authentication,
  Beacon,
  Browse,
  Chapter,
  Error,
  Form,
  Interaction,
  Playback,
  Purchase,
  Search,
  Session
} from "@discovery/clients-js-events-lib";

// TODO: why is this not on the main export
import { ActionTypes as VideoPlayerActionTypes } from "@discovery/clients-js-events-lib/lib/VideoPlayer";

/**
 * these are all the potential actions that generate an eventstream event
 * - these will serve as the canonical action type, send through the store.dispatch / log methods
 * - eg: log(TYPES.ACTION.PLAYBACK.STREAM_START, {...})
 */
export const ActionTypes = {
  ACTION: {
    ACCOUNT: Account.ActionTypes,
    AD: Ad.ActionTypes,
    AD_BREAK: AdBreak.ActionTypes,
    AUTHENTICATION: Authentication.ActionTypes,
    BEACON: Beacon.ActionTypes,
    BROWSE: Browse.ActionTypes,
    CHAPTER: Chapter.ActionTypes,
    ERROR: Error.ActionTypes,
    FORM: Form.ActionTypes,
    INTERACTION: Interaction.ActionTypes,
    PLAYBACK: Playback.ActionTypes,
    PURCHASE: Purchase.ActionTypes,
    SEARCH: Search.ActionTypes,
    SESSION: Session.ActionTypes,
    VIDEO_PLAYER: VideoPlayerActionTypes
  }
};
