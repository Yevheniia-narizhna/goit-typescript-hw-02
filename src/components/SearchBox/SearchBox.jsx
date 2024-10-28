import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeSearch } from "../../redux/filters/slice";

export default function SearchBox({ inputValue }) {
  const dispatch = useDispatch();

  return (
    <div className={s.searchbox}>
      <label className={s.lable} htmlFor="search-input">
        <span className={s.text}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={inputValue}
          onChange={(e) => dispatch(changeSearch(e.target.value))}
        />
      </label>
    </div>
  );
}
