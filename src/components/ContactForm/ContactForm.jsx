import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

function ContactForm() {
  const form = useRef();

  const [formStatus, setFormStatus] = useState({
    color : '',
    message : ''
  });
  const [emailMsg, setEmailMsg] = useState('');

  const [formSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    object: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'user_email') {
      isEmailValid(e.target.value)
    }

  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailMsg(emailRegex.test(email) ? '' : 'Entrez un email valide !')
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    // console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    // console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)
    // console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)

    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.object || !formData.message || emailMsg) {
      setFormSent(false);
      setFormStatus({
        color : 'text-red-400',
        message: 'Remplissez tous les champs'
      })
      return;
    }
    else if (formSent) {
      setFormStatus({
        color: 'text-orange-400',
        message: 'Vous avez déjà envoyé un mail !'
      })
      return;
    }
    else {
      
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        form.current, 
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
        setFormSent(true);
        setFormStatus({
          color: 'text-green-400',
          message : 'Email envoyé !'
        })
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log("message not sent")
        console.log(error.text);
      });
    }

  };

  return (
    <form ref={form} onSubmit={handleSubmit} id="contact-form">
      <label>
        Nom :
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        <div className='flex gap-2'>E-mail : <p id="email_msg" className='mb-0 text-red-400'>{emailMsg}</p></div>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Objet :
        <input type="text" name="object" value={formData.object} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message :
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button className='button button__left__right' type='submit'>
        Envoyer
      </button>
      {formStatus.message && <p className={formStatus.color}>{formStatus.message}</p>}
      
    </form>
  )
}

export default ContactForm