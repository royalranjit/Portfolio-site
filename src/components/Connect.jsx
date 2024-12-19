import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Connect = () => {
  const formRef = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dvfwb4d', 'template_g8sxnvq', formRef.current, {
        publicKey: 'N0DB3vb7EQ-kOCkvx',
      })
      .then(
        (result) => {
          // Success toast
          toast.success('Your message has been sent successfully!');
          // Optionally reset form fields
          formRef.current.reset();
        },
        (error) => {
          // Error toast
          toast.error('Oops! Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        CONNECT WITH ME
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="w-full max-w-xl lg:w-1/2">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-transparent text-white rounded-md border border-sky-500"
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="bg-transparent text-white rounded-md border border-sky-500"
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <motion.textarea
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-transparent text-white rounded-md border border-sky-500"
              rows={8}
              required
              placeholder="Message"
              name="message"
            />
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-transparent text-white rounded-md border border-sky-500"
              type="submit"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>

      {/* Toast Container: This is where the toasts will appear */}
      <ToastContainer
        position="top-center"
        autoClose={2000}  // Auto close after 2 seconds
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Connect;
