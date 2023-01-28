import { contact, section5Title, social, Copyright } from '../../profile'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// working and more

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5ts0tyu', 'template_tvfybt7', form.current, '1d-j2JW1QjE-26RcM')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form ">
                <>
                    <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                    </div>
                </>
                <div className="container">
                    <div className="git-cont row ">
                        <div className="col-12 col-sm-6 half  ">
                            <form ref={form} onSubmit={sendEmail} className='form-group text-center mx-auto row ' >
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                                <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                                <textarea className=" mx-auto d-block" id="msg" name="message" placeholder="Message" required></textarea>
                                {/* // center textarea not working */}
                                <button style={{ cursor: 'pointer' }} type="submit" >Send Message</button>
                                {/* fix button  */}
                            </form>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                {contact.pitch}
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                </div>
                                {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy">2023 {Copyright} <strong>{contact.copyrightName}</strong>. All Rights Reserved</p>
        </div>
    )

}

export default Contact


