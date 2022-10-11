import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// import { validateEmail } from '../../src/utils/validateEmail.js'
import BaseLayout from "../layouts/BaseLayout";
import "semantic-ui-css/semantic.min.css";
import css from "./Contact.module.css";
import css1 from "./About.module.css";

// const SERVICE_ID = "**************";
// const TEMPLATE_ID = "*******";
// const USER_ID = "****************";
// const emailCheck = (e) => {
//     if (e.target.name === 'user_email') {
//         const isValidEmail = validateEmail(e.target.value);
//         if (isValidEmail) {
            
//         }
//     }
// }

// const [user_email, setMessage] = useState('');
// const [error, setError] = useState(null);

// function isValidEmail(email) {
//   return /\S+@\S+\.\S+/.test(email);
// }

// const handleChange = event => {
//   if (!isValidEmail(event.target.value)) {
//     setError('Email is invalid');
//   } else {
//     setError(null);
//   }

//   setMessage(event.target.value);
// };







export default function Contact() {
    
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z4w7u7f', 'template_gio5517', form.current, '9OsoxDn8wiD5lJeLU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("email sent!, I will be in touch :)");
    };
  return (
    <BaseLayout>
    <section className={css1.hero}>
        <form className={css.formStyle4} ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder='Enter Your Name Here' required= 'true' />
            <label>Email</label>
            <input type="email" name="user_email" placeholder='Enter Your Email' required= 'true' />
            <label>Message</label>
            <textarea name="user_message" />
            <input type="submit" value="Send" placeholder='Enter Your Message Here' required= 'true' />
        </form>
    </section>

    </BaseLayout>
  );
}
