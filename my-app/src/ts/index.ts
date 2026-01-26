import { btnUser } from "../ts/btn-user";
import { cardUser } from "../ts/user-card";
import { audioPlayer } from "../ts/player";
import { volumeWork } from "../ts/volume";
import { tracks } from "./tracks";

window.addEventListener("DOMContentLoaded", () => {
  btnUser();
  cardUser();
  audioPlayer();
  volumeWork();
  tracks()
});
