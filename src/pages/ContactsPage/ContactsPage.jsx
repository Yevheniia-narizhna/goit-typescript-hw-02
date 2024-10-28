import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { motion } from "framer-motion";
import { slideFrom } from "../../components/motion";
export default function ContactsPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={slideFrom()}>
      <div>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </motion.div>
  );
}
