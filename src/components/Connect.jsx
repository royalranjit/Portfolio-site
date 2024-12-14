import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



const Connect = () => {

  const formRef = useRef();
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_dvfwb4d', 'template_g8sxnvq', formRef.current, {
      publicKey: 'N0DB3vb7EQ-kOCkvx',
    })
    .then((result) => {
        setSuccess(true)
      },
      (error) => {
        setError(true)
      });
};
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100 }}
      transition={{duration: 0.5 }} 
      className="my-20 text-center text-4xl">CONNECT WITH ME</motion.h1>
      {/* <h6 className="my-20 text-center text-4xl">Let's Make Something Cool Together</h6> */}
      <div 
      className="flex flex-wrap items-center justify-center gap-4">
        <div className="w-full max-w-xl lg:w-1/2 ">
        <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-5">
          <motion.input
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100 }}
          transition={{duration: 1 }} 
          className="bg-transparent text-white rounded-md border border-sky-500" type="text" required placeholder="Name" name="name" />
          <motion.input
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100 }}
          transition={{duration: 1 }} 
          className="bg-transparent text-white rounded-md border border-sky-500" type="text" required placeholder="Email" name="email" />
          <motion.textarea
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100 }}
          transition={{duration: 1 }} 
          className="bg-transparent text-white rounded-md border border-sky-500" rows={8} placeholder="Message" name="message" />
          <motion.button
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100 }}
          transition={{duration: 1 }} 
          className="bg-transparent text-white rounded-md border border-sky-500">Submit</motion.button>
          {error && "Error"}
          {success && "success"}
          </form>
        </div>
      </div>
      </div>
  )
}

export default Connect;

