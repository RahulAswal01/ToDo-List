import { atom } from "recoil";

const addTaskAtom = atom({
  key: "addTaskAtom",
  default: "",
});

export default addTaskAtom;
