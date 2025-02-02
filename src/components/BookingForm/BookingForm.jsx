import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import ModalNotification from "../ModalNotification/ModalNotification";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string().max(300, "Max 300 characters"),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    setIsSubmitted(true);
    resetForm();
  };

  return (
    <div className={css.form_container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.field_wrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.field_wrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.field_wrapper}>
              <Field
                type="text"
                name="bookingDate"
                placeholder="Booking date*"
                className={css.input}
              />
              <CiCalendar className={css.calendar_icon} />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.field_wrapper}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ModalNotification
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
        message="Your booking request has been submitted."
      />
    </div>
  );
};

export default BookingForm;
