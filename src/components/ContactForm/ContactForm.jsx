import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
// import { addContact } from "../../redux/contacts/contactsOps";

const phoneRe = /(\+)?(\(?\d+\)?)(([\s-]+)?(\d+)){0,}/g;
const nameRe = /[a-zA-Z]+$/;
const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(nameRe, "Incorrect name")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(phoneRe, "Phone number is not valid")
    .required("Required"),
});

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
    id: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validSchema}
      >
        <Form className={s.formik}>
          <label htmlFor="name" className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label htmlFor="number" className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="text" name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
