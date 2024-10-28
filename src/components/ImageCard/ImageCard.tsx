import s from "./ImageCard.module.css";
import { ImagePropCard } from "./ImageCard.types";

const ImageCard: React.FC<ImagePropCard> = ({ picture, onClick }) => {
  return (
    <div className={s.imageCard} onClick={() => onClick(picture)}>
      <img src={picture.urls.small} alt={picture.alt_description} />
    </div>
  );
};

export default ImageCard;
