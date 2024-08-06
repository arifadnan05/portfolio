import { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GrMail } from 'react-icons/gr';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pmnhtsg', 'template_5uphcma', form.current, {
                publicKey: 'hx_wkwGviF7ez0r91',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Awesome!",
                        text: "Your message was sent successful",
                        icon: "success"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <h1 className='AboutTextHeading Heading'>Get In Touch</h1>
            <div class="background">

                <div class="container">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT US</span>
                                </div>
                                <div className='app-body'>
                                    <h2>Social Link</h2>
                                </div>
                                <div className='app-body-border'></div>
                                <div className='Contact-style'>
                                    <div className='footerLinks'>
                                        <a href="https://github.com/arifadnan05" target='_blank' rel="noreferrer"><FaGithub /></a>
                                        <a href="https://www.linkedin.com/in/arifadnan05/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                                        <a href='mailTo:arifahamedadnan@gmail.com' target='_blank' rel="noreferrer"><GrMail /></a>
                                    </div>
                                </div>
                                <div class="app-contact">Developed by Arif Adnan</div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">

                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className='app-form-group'>
                                            <input type="text" name="user_name" className='app-form-control' placeholder='NAME' required />
                                        </div>

                                        <div className='app-form-group'>
                                            <input type="email" name="user_email" className='app-form-control' placeholder='E-MAIL' required />
                                        </div>
                                        <div className='app-form-group'>
                                            <input type="text" name="subject" className='app-form-control' placeholder='SUBJECT' required />
                                        </div>
                                        <div className='app-form-group message'>
                                            <textarea name="message" className='app-form-control' placeholder='MESSAGE' required />
                                        </div>

                                        <div className='app-form-group'>
                                            <input type="submit" value="Send" className='app-form-button' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
