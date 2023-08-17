import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Booking() {
  const initialValues = {
    userId: sessionStorage.getItem("userId") || 1212,
    fullName: "",
    email: "",
    country: "",
    DOB: "",
    noOfSeats: 0,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string(),
    DOB: Yup.string(),
    noOfSeats: Yup.number()
      .min(0, "Must be a positive number")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post("http://localhost:8070/booking/addBooking", values);
      console.log("Booking added");
      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error adding booking", error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Reserve your seat for an amazing ride</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="fullName" placeholder="Full Name" />
              <ErrorMessage name="fullName" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="text" name="country" placeholder="Country" />
            </div>
            <div>
              <Field type="date" name="DOB" placeholder="Date of Birth" />
            </div>
            <div>
              <Field
                type="number"
                name="noOfSeats"
                placeholder="Number of Seats"
              />
              <ErrorMessage name="noOfSeats" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Booking;
