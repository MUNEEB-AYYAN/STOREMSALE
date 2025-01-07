import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, 
        [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-800 text-white ">
      <h1 className="font-bold py-4 text-center  ">Contact Us</h1>
      <p className="mb-4 text-center">We would love to hear from you! Fill out the form below and we will get back to you as soon as possible.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col pl-80 gap-8 w-full">
          <div className=" flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-8/12 px-10 bg-slate-500 py-1 border-2"
            />
          </div>

          <div className=" flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-8/12 px-10 py-1 bg-slate-500 border-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
              className=" h-56 w-8/12 bg-slate-500  border-2"
            ></textarea>
          </div>
          <button type="submit" className="px-4 w-8/12 py-2 bg-green-500">
            Send Message
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your message has been sent. We will get back to you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
