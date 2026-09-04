import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <p className="contact-label">DEMO GYM / CONTACT</p>

        <h1>
          LET'S
          <br />
          CONNECT.
        </h1>

        <p className="contact-intro">
          Have a question about memberships, training or
          our facilities? Send us a message.
        </p>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-content">

        {/* CONTACT INFORMATION */}
        <div className="contact-info">

          <p className="contact-label">GET IN TOUCH</p>

          <div className="contact-detail">
            <span>PHONE</span>
            <h3>1234567890</h3>
          </div>

          <div className="contact-detail">
            <span>EMAIL</span>
            <h3>eg@gmail.com</h3>
          </div>

          <div className="contact-detail">
            <span>LOCATION</span>
            <h3>DEMO GYM</h3>
          </div>

          <div className="contact-detail">
            <span>OPENING HOURS</span>
            <h3>05:00 AM — 11:00 PM</h3>
          </div>

        </div>


        {/* FORM */}
        <div className="contact-form-wrapper">

          <p className="contact-label">SEND A MESSAGE</p>

          {submitted ? (
            <div className="success-message">
              <h2>MESSAGE SENT.</h2>
              <p>
                Thank you for contacting DEMO GYM.
                We'll get back to you soon.
              </p>

              <button onClick={() => setSubmitted(false)}>
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>MESSAGE</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button type="submit">
                SEND MESSAGE →
              </button>

            </form>
          )}

        </div>

      </section>


      {/* BOTTOM */}
      <section className="contact-bottom">

        <p className="contact-label">DEMO GYM</p>

        <h2>
          YOUR TRAINING.
          <br />
          STARTS HERE.
        </h2>

      </section>

    </main>
  );
}