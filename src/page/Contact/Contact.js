import "./Contact.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
function Contact() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <h1 className="contact-hero__title">LIÊN HỆ VỚI CHÚNG TÔI</h1>
        <p className="contact-hero__subtitle">
          Chúng tôi luôn sẵn sàng hỗ trợ!
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="name">
            Tên khách hàng
          </label>
          <input
            id="name"
            type="text"
            className="field"
            placeholder="Tên khách hàng"
          />

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="field"
            placeholder="Email"
          />

          <label className="sr-only" htmlFor="message">
            Nội dung
          </label>
          <textarea
            id="message"
            className="field field--textarea"
            placeholder="Nội dung"
          />
        </form>
      </div>
    </section>
  );
}
export default Contact;
