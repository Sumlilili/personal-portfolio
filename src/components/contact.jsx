import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.table(form);
    // display in console
    nav("/");
  };

  return (
    <section className="contact-page">
      <aside className="contact-panel">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:tli148@my.centennialcollege.ca">tli148@my.centennialcollege.ca</a></p>
        <p>Phone: <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a></p>
        <p>Location: Toronto, Canada</p>
      </aside>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="two-col">
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="two-col">
          <input
            name="phone"
            placeholder="Contact Number"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
        />

        <input type="submit" value="Send Message" className="btn-primary" />
      </form>
    </section>
  );
}
