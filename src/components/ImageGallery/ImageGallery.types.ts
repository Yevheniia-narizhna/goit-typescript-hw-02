import { Image } from "../App/App.types";

export interface ImagePropGallery {
  pictures: Image[];
  onPictureClick: (picture: Image) => void;
}
