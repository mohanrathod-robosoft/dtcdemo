import { EventTypes } from "@discovery/clients-js-events-lib";

// map event type keys
export const EventsTypes = {
  EVENT: EventTypes,
  EVENTS: {
    SESSION_ID: "EVENTS_SESSION_ID"
  }
};

/**
 *  EventTypes
 *
  AUTHENTICATION = "authentication",
  PLAYBACK = "playback",
  CHAPTER = "chapter",
  AD = "ad",
  AD_BREAK = "adBreak",
  VIDEO_PLAYER = "videoPlayer",
  BROWSE = "browse",
  INTERACTION = "interaction",
  SESSION = "session",
  USER_PROFILE = "userProfile",
  FORM = "form",
  ACCOUNT = "account",
  SEARCH = "search",
  PURCHASE = "purchase",
  ERROR = "error",
  BEACON = "beacon"
 */

/**
 * Note: consider option to sort js lib types into TYPES enum like so:
 *
 * ```
 *  import Account, Ad, AdBreak ... from "@discovery/clients-js-events-lib";
 *
 *  const eventTypes = {
 *    ACCOUNT: {
 *      CATEGORY: Account.CategoryTypes
 *    },
 *    AD: {
 *      CAST: Ad.CastTypes,
 *      PLAYBACK: Ad.PlaybackTypes,
 *      STREAM: Ad.StreamTypes
 *    },
 *    AD_BREAK: {
 *      CAST: AdBreak.CastTypes,
 *      PLAYBACK: AdBreak.PlaybackTypes
 *    },
 *  // etc ..
 *  }
 * ```
 */
