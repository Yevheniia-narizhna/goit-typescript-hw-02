import { NavLink } from "react-router-dom";
import s from "./AuthNavigate.module.css";
export default function AuthNavigate() {
  return (
    <div className={s.authnavigate}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
