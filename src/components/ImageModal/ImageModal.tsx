import Modal from "react-modal";
import "./ImageModal.css";
import { ImageModProp } from "./ImageModal.types";
Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModProp> = ({ picture, onClose }) => {
  if (!picture) return null;

  return (
    <Modal
      isOpen={!!picture}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={picture.urls.regular}
        alt={picture.alt_description}
        className="modal-image"
      />
    </Modal>
  );
};

export default ImageModal;
