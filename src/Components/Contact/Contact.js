import { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
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
                    console.log('SUCCESS!');
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
                                <div class="app-contact">Developed by Arif Adnan</div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    {/* <div class="app-form-group">
                                        <input class="app-form-control" placeholder="NAME" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="CONTACT NO" />
                                    </div>
                                    <div class="app-form-group message">
                                        <textarea class="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">SEND</button>
                                    </div> */}

                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className='app-form-group'>
                                            <input type="text" name="user_name" className='app-form-control' placeholder='NAME' required/>
                                        </div>

                                        <div className='app-form-group'>
                                            <input type="email" name="user_email" className='app-form-control' placeholder='E-MAIL' required/>
                                        </div>
                                        <div className='app-form-group'>
                                            <input type="text" name="subject" className='app-form-control' placeholder='SUBJECT' required/>
                                        </div>
                                        <div className='app-form-group message'>
                                            <textarea name="message" className='app-form-control' placeholder='MESSAGE' required/>
                                        </div>

                                        <div className='app-form-group'>
                                            <input type="submit" value="Send" className='app-form-button'/>
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
