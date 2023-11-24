import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const notifySucess = (successMsg) => toast.success(successMsg, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });

  const notifyError = (errorMsg) => toast.error(errorMsg, {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "dark",
                                      });
  const form = useRef();

  const [formSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    object: '',
    message: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formSent) {
      notifyError('Vous avez déjà envoyé un mail !');
      return;
    }
    else if (!formData.name) {
      notifySucess("yep")
      // emailjs.sendForm(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      //   form.current, 
      //   process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      //   )
      //   .then((result) => {
      //   setFormSent(true);
      //   notifySucess("Mail envoyé, merci !");
      // }, (error) => {
      //   notifyError("Le mail n'a pas pu être envoyé :(");
      // });
    }

  };

  return (
    <form ref={form} onSubmit={handleSubmit} id="contact-form">
      <label>
        Nom complet :
        <input type="text" name="user_name" required value={formData.user_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        <div className='flex gap-2'>E-mail :</div>
        <input type="email" name="user_email" required value={formData.user_email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Objet :
        <input type="text" name="object" required value={formData.object} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message :
        <textarea name="message" required value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <label>
        <input type="text" name="name" autoComplete='off' className='opacity-0 absolute top-0 left-0 h-0 w-0 z-0' value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <button className='button button__left__right' type='submit'>
        Envoyer
      </button>
      
    </form>

  )
}

export default ContactForm