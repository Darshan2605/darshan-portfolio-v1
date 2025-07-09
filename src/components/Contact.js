export default function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.556060432204!2d73.847784314892!3d18.5204306874007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c068d0a6b791%3A0x2b6a1b0a1b0a1b0a!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1647608789441!5m2!1sen!2sin"
            width="400" height="300" loading="lazy"></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
          <button className="form-btn" type="submit" disabled data-form-btn>
            <i className="fas fa-paper-plane"></i>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
} 