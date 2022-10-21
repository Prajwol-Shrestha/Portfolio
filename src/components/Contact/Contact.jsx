import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const form = useRef();

  const notifySuccess = () => {
    toast.success("Message Sent!", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyError = () => {
    toast.error("Message Couldn't be Sent!", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_9e9czju",
        "template_tfuhlb8",
        form.current,
        "45TBDmNjoeGpSIAIB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            e.resetForm();
            setSubmit(false);
          }, 2000);
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
          notifyError();
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, e) => {
      sendEmail(e);
      setSubmit(true);
    },
  });

  return (
    <section className="hero-section contact-page">
      <div className="scale-up-center form-container">
        <h2 className="heading"> Get In Touch </h2>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="error"> {formik.errors.name} </p>
            ) : null}
          </div>
          <div className="input-container">
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error"> {formik.errors.email} </p>
            ) : null}
          </div>
          <div className="input-container">
            <textarea
              id="message"
              placeholder="Your Message here..."
              type="text"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="error"> {formik.errors.message} </p>
            ) : null}
          </div>
          <div className="btn-container">
            {submit ? (
              <div className="lds-dual-ring"></div>
            ) : (
              <button className="btn" type="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="scale-up-center contact-info">
        <div className="email-info">
          <h3 className="title"> Email </h3>
          <p className="para"> prajwolshrestha08@gmail.com </p>
        </div>
        <hr />
        <div className="phone-info">
          <h3 className="title"> Phone </h3>
          <p className="para"> +977 9860080185 </p>
        </div>
        <hr />
        <div className="web-info">
          <h3 className="title"> on the web </h3>
          <p className="para">
            {" "}
            <a
              href="https://github.com/Prajwol-Shrestha"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Facebook{" "}
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Prajwol-Shrestha"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
          </p>
        </div>
        <hr />
      </div>
      <ToastContainer />
    </section>
  );
}
