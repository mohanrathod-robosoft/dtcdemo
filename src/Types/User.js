import { UserProfile } from "@discovery/clients-js-events-lib";

// NOTE: may need to augment this with app-specific enums
export const UserTypes = {
  USER: {
    PROFILE: "USER_PROFILE",
    CATEGORY: UserProfile.CategoryTypes
  }
};
