import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true); // Set button to loading state
    console.log("Form Data:", data);

    // Simulating form submission (replace with actual API or EmailJS logic)
    setTimeout(() => {
      setIsSubmitting(false); // Enable button after submission
      setIsModalOpen(true); // Show modal on success
      reset(); // Reset form fields
    }, 1000);
  };

  // Automatically close the modal after 5 seconds
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false); // Close modal
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isModalOpen]);

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <motion.div
            className="flex-1"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-12 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form 
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-4 p-6 items-start bg-gray-800 text-white"
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Input */}
            <div className="w-full">
              <input
                aria-label="Your name"
                className={`bg-gray-700 border-b py-3 outline-none w-full placeholder:text-gray-400 text-white focus:border-accent transition-all ${
                  errors.name ? "border-red-500" : "border-gray-500"
                }`}
                type="text"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="w-full">
              <input
                aria-label="Your email"
                className={`bg-gray-700 border-b py-3 outline-none w-full placeholder:text-gray-400 text-white focus:border-accent transition-all ${
                  errors.email ? "border-red-500" : "border-gray-500"
                }`}
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div className="w-full">
              <textarea
                aria-label="Your message"
                className={`bg-gray-700 border-b py-3 outline-none w-full placeholder:text-gray-400 text-white focus:border-accent resize-none transition-all ${
                  errors.message ? "border-red-500" : "border-gray-500"
                }`}
                placeholder="Your message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-lg bg-accent text-white py-3 px-6 rounded-lg transition-all ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-accent-dark"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Message Sent
            </h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully!
            </p>
            <button
              onClick={() => setIsModalOpen(false)} // Close modal
              className="btn bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent-dark transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
