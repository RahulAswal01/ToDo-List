import { atom } from "recoil";

const updateIdTracker = atom({
  key: "updateIdTracker",
  default: null,
});

export default updateIdTracker;
