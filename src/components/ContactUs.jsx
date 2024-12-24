import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] p-4">
      <h3 className="text-3xl font-semibold text-gray-300 mb-6">
        Get in Touch
      </h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#14FB9E] focus:border-blue-500"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#14FB9F] text-black py-3 rounded-lg shadow-md hover:bg-[#14FB72]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
