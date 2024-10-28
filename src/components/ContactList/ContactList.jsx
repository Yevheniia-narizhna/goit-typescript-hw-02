import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
// import { selectFilteredContacts } from "../../redux/contacts/slice";
import { useEffect } from "react";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { deleteContact } from "../../redux/contacts/contactsOps";

export default function ContactList() {
  const filteredContact = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={s.contactlist}>
        {filteredContact.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={() => dispatch(deleteContact(contact.id))}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
