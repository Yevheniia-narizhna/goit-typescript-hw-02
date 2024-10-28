import { Image } from "../App/App.types";

export interface ImagePropCard {
  picture: Image;
  onClick: (item: Image) => void;
}
