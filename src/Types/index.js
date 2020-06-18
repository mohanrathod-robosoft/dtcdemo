import { ActionTypes } from "./Action";
import { AppTypes } from "./App";
import { AuthTypes } from "./Auth";
import { ButtonTypes } from "./Button";
import { EventsTypes } from "./Events";
import { IconTypes } from "./Icon";
import { ImageTypes } from "./Image";
import { LogoTypes } from "./Logo";
import { RouteTypes } from "./Route";
import { ScreenTypes } from "./Screen";
import { TextTypes } from "./Text";
import { UserTypes } from "./User";
import { ToastTypes } from "./Toast";

// combine types
export const TYPES = {
  ...ActionTypes,
  ...AppTypes,
  ...AuthTypes,
  ...ButtonTypes,
  ...EventsTypes,
  ...IconTypes,
  ...ImageTypes,
  ...LogoTypes,
  ...RouteTypes,
  ...ScreenTypes,
  ...TextTypes,
  ...UserTypes,
  ...ToastTypes
};

console.log("TYPES: %o", TYPES);
