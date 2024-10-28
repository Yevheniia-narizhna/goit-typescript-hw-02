import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImagePropGallery } from "./ImageGallery.types";

const ImageGallery: React.FC<ImagePropGallery> = ({
  pictures,
  onPictureClick,
}) => {
  return (
    <div className={s.gallery}>
      {pictures.map((picture) => (
        <div
          className={s.galleryItem}
          key={picture.id}
          onClick={() => onPictureClick(picture)}
        >
          <ImageCard picture={picture} onClick={onPictureClick} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
