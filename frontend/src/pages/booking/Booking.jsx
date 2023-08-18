// Booking.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Booking.css"; 
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const initialValues = {
    userId: sessionStorage.getItem("userId") || 1212,
    fullName: "",
    email: "",
    country: "",
    DOB: "",
    noOfSeats: null,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    country: Yup.string(),
    DOB: Yup.string(),
    noOfSeats: Yup.number()
      .min(0, "Must be a positive number")
      .required("Number of Seats is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    try {
    sessionStorage.setItem("bookingValues", JSON.stringify(values));
    navigate("/payment");
    } catch (error) {
      console.error("Error adding booking", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="booking-container">
      <h2 className="heading">Reserve Your Seat for an Amazing Ride</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <Field type="text" placeholder="Full Name" name="fullName" className="form-field" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" placeholder="Email Address" name="email" className="form-field" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Field type="text" placeholder="Country" name="country" className="form-field" />
            </div>
            <div className="form-group">
              <label htmlFor="DOB">Date of Birth</label>
              <Field
                type="date"
                name="DOB"
                placeholder="Date of Birth"
                className="form-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="noOfSeats">Number of Seats</label>
              <Field
                type="number"
                name="noOfSeats"
                placeholder="Number of Seats"
                className="form-field"
              />
              <ErrorMessage name="noOfSeats" component="div" className="error" />
            </div>
            <button type="submit" className="button" disabled={isSubmitting}>
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Booking;
