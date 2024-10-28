import { useDispatch, useSelector } from "react-redux";
import AuthNavigate from "../AuthNavigate/AuthNavigate";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function Header() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn && <h2 className={s.welcome}>Welcome, {user.name}</h2>}
      {!isLoggedIn && <AuthNavigate />}
      {isLoggedIn && (
        <button onClick={() => dispatch(logout())} className={s.btnexit}>
          Exit
        </button>
      )}
    </header>
  );
}
