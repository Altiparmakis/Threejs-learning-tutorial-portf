import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  //service_mt0931i
  //template_zekvig5
  //pUiI_tR8Ake1w67fH

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_mt0931i",
        "template_zekvig5",
        {
          from_name: form.name,
          to_name: "Kostas",
          from_email: form.email,
          to_email: "kwnstantinosalti@gmail",
          message: form.message,
        },
        "pUiI_tR8Ake1w67fH",
      );
      setLoading(false);
      alert("Your message has been sent successfully.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <section className="c-space my-20 xl:mx-auto xl:w-3/4" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&#39;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&#39;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&#39;m here
            to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="field-label">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="field-label">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="kwnstantinosalti@gmail.com"
              />
            </label>
            <label className="field-label">
              <span className="field-label">Your message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I&#39;m interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
