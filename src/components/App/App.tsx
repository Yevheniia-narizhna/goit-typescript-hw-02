import { useEffect, useState } from "react";
// import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchPictures } from "../Api/Api";
import ImageGallery from "../ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Image } from "./App.types";

function App() {
  const [pictures, setPictures] = useState<Image[]>([]); //Зберігання списку зображень//
  const [isLoading, setIsLoading] = useState<boolean>(false); //Для відображення контенту//
  const [error, setError] = useState<boolean>(false); //Для відображення помилки//
  const [page, setPage] = useState<number>(1); //Зберігання поточноі сторінки//
  const [query, setQuery] = useState<string>(""); //Для зберігання пошукового запиту//
  const [selectedPicture, setSelectedPicture] = useState<Image | null>(null); //Для зберігання вибраного зображення для модалки//
  const [loadingMore, setLoadingMore] = useState<boolean>(false); //Для відображення додаткового контенту//

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPictures(query, page);
        setIsLoading(false);
        setPictures((prev) => [...prev, ...data.results]);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
        setLoadingMore(false);
      }
    };
    getData();
  }, [query, page]);

  const handlePictureClick = (picture: Image) => {
    setSelectedPicture(picture);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage((prev) => prev + 1);
  };

  const handleSearchSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setPictures([]);
  }; // Видалення минулих картинок, сторінки при сабміті//

  const handleCloseModal = () => {
    setSelectedPicture(null);
  };

  return (
    <>
      <header>
        <SearchBar onSubmit={handleSearchSubmit} />
      </header>
      {isLoading && !loadingMore && <Loader />}
      {!!pictures.length && (
        <ImageGallery pictures={pictures} onPictureClick={handlePictureClick} />
      )}
      {isLoading && !loadingMore && <Loader />}
      {error && <ErrorMessage message={error} />}
      {loadingMore ? (
        <Loader />
      ) : (
        pictures.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedPicture && (
        <ImageModal picture={selectedPicture} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
