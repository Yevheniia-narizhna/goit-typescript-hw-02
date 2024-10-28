import { Image } from "../App/App.types";

export interface ImageModProp {
  picture: Image | null;
  onClose: () => void;
}
