import React from 'react';
import emailjs from 'emailjs-com';
import ReactWhatsapp from 'react-whatsapp';
import { useState } from 'react';

import './styles.scss';

export const ContactUs = () => {
    const [messages, setMessages] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ts8mivtasda', 'template_obs88mk', e.target, 'm6MXi-5C8-mX0ZrnJ')
            .then((result) => {
                setMessages(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

        setTimeout(() => {
            setMessages(false)
        }, 4000);

    }
    return (
        <div>
            <div className='header'>
                <h1>Emre Güleç İletişim</h1>
                <h5>Öneri, görüş ve geri bildirimlerinizi benimle paylaşın!</h5>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="İsim" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Mail" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Konu" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" style={{ height: 100 }} placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            {!messages && <div className="pb-3 mx-auto text-success h4">Mesajınız Gönderildi!</div>}
                            <input type="submit" className="btn mb-5 btn-info" value="Mesajı Gönder"></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className='whatsappWrapper pb-5 d-flex justify-content-lg-end justify-content-center'>
                <ReactWhatsapp number="5318105767" message="Merhaba" className='whatsapp d-flex flex-column mr-5' >
                    <i class="fab fa-whatsapp"></i>
                    <span>Bana whatsaptan ulaşabilirsiniz</span>
                </ReactWhatsapp></div>
        </div>
    );
};