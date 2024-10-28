import s from "./LoadMoreBtn.module.css";
import { LoadMoBtnProps } from "./LoadMoreBtn.types";
const LoadMoreBtn: React.FC<LoadMoBtnProps> = ({ onClick }) => {
  return (
    <button className={s.loading} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
