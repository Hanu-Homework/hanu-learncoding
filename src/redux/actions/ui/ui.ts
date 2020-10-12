import { TOGGLE_DRAWER_OPENED } from "../../actionTypes";

export function setDrawerOpened(open: boolean) {
  return {
    type: TOGGLE_DRAWER_OPENED,
    open: open,
  };
}
