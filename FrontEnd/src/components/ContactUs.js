import "../style/contactUs.css";

function Contact() {
  return (
    <>
      <ContactForm />
      <Map />
    </>
  );
}

function ContactForm() {
  return (
    <section className="contact-us-section">
      <div className="container">
        <ContactInfo />
        <Form />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <h1 className="contact-title">Contact Information</h1>
      <div className="information">
        <Info title={"Office Address:"}>
          <p className="info-text">
            Bulls 02, Level 12. Saturns Tropic Comar 218 <br /> New Elephant
            Road, Dhaka - 1205
          </p>
        </Info>
        <Info title={"Phone Number:"}>
          <p className="info-text">
            +8801678170593, 01919-264687 <br />
            02-9611936
          </p>
        </Info>
        <Info title={"Email Address:"}>
          <p className="info-text">support@LabArtisan</p>
        </Info>
        <Info title={"Website Address:"}>
          <p className="info-text">http://LabArtisan</p>
        </Info>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form action="" className="contact-form">
      <h1 className="contact-title">We Love to Hear From You</h1>
      <input type="email" name="email" id="email" placeholder="Your Email" />
      <input type="text" name="phone" id="phone" placeholder="Phone Number" />
      <input type="text" name="subject" id="subject" placeholder="Subject" />
      <textarea
        name="message"
        id="message"
        placeholder="Write a message..."
      ></textarea>
      <button type="submit">
        Send Message <i className="fas fa-angle-right"></i>
      </button>
    </form>
  );
}

function Info({ children, title }) {
  return (
    <div className="info">
      <h3 className="info-title">{title}</h3>
      {children}
    </div>
  );
}

function Map() {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33664977927!2d31.217178888838248!3d30.05955628998108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1725390199498!5m2!1sen!2seg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Contact;
