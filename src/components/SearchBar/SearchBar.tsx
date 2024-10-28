import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <header>
        <form className={s.form} onSubmit={handleSearchSubmit}>
          <input
            className={s.input}
            type="text"
            id="search-input"
            name="searchQuery"
            value={query}
            onChange={handleInput}
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
