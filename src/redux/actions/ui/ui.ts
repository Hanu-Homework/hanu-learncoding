import { SET_DRAWER_OPENED } from "../../actionTypes";

export function setDrawerOpenend(isDrawerOpened: boolean) {
  return {
    type: SET_DRAWER_OPENED,
    isDrawerOpened: isDrawerOpened,
  };
}
