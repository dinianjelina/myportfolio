import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q3ex5mh', 'template_ch87odk', form.current, 'UE_KipEr3P9euCheV').then(
      (result) => {
        alert('Pesan terkirim');
        console.log(result.text);
      },
      (error) => {
        alert('Pesan tidak terkirim');
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dinianjelina12@gmail.com</h5>
            <a href="mailto:dinianjelina12@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Dini Anjelina</h5>
            <a href="https://m.me/dini.anjelina.794" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>081272247620</h5>
            <a href="https://api.whatsapp.com/send?phone=081272247620" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Masukkan nama" required />
            <input type="email" name="email" placeholder="Masukkan email" required />
            <textarea name="message" rows="7" placeholder="Masukkan pesan" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
