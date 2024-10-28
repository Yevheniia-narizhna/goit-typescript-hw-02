import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={s.contact}>
      <div className={s.item}>
        <p className={s.name}>
          <IoPersonSharp className={s.icon} />
          {name}
        </p>
        <p className={s.name}>
          <FaPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
