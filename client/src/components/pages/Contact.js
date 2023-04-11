import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function Contact() {
    const notify = () => {
        toast('Email sent!')
    }

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_rgh658x', 'template_jk0ogmk', e.target, 'user_5siGv8EVrjS5Pxk1dMwDw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();

    }
    return (
        <ContactContainer>
            <h1 className="intro text-center">Contact Me</h1>
            <h4 className="title-text text-center">Have a question or want to work together?</h4>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 pb-3 mx-auto text-center">
                            <input type="submit" className="btn button primary-button mr-4 text-uppercase" value="Send Message" onClick={notify}></input>
                        </div>
                    </div>
                </form>

                <div className="bottomInfo text-center py-4">
                    <p>
                        <a href="tel:+19254781747">
                            <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
                        </a>
                        <span className="phoneInfo">(925)478-1747</span>
                     </p>
                    <p>
                        <i className="fa fa-envelope-square" aria-hidden="true" onClick={() => {window.location.href = 'mailto:joeidelson@gmail.com';}}></i>&nbsp;
                        <span className="emailInfo">joeidelson@gmail.com</span>
                    </p>
                </div>
            </div>
        </ContactContainer>
    )
}

export default Contact;

const ContactContainer = styled.div`
    .button{
        padding: 1.5rem 2.2rem;
        font: normal 500 16px/20px var(--roboto);
        position: relative;
        border: 2px solid #854fee;
        border-radius: 4px;
    }
    .button.primary-button{
        background: var(--gradient-color);
        background-clip: padding-box;
        color: whitesmoke;
        transition: background .6s ease;
        box-shadow: var(--box-shadow);
    }
    .button.primary-button:hover{
        background:whitesmoke;
        background-clip: padding-box;
        color: black;
    }
    .intro{
        padding-top: 2%;
        font: normal bold 50px/72px var(--roboto);
        font-weight: 500;
    }
    .title-text{
        font: normal 30px/72px var(--roboto);
    }
    .fa.fa-phone{
        font-size: 4rem;   
    }
    .fa.fa-envelope-square{
        font-size: 4rem;
        cursor: pointer;
    }
    .fa.fa-envelope-square:hover{
        color: turquoise;
    }
    .phoneInfo{
        font-size:50px;
    }
    .emailInfo{
        font-size:30px;
    }
`;