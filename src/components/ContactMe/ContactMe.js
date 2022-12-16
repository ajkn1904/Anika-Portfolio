import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Fade from 'react-reveal/Reveal';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2p42k4w', 'template_67qbxwv', form.current, 'lSpaElzdqGnerKafb')
            .then((result) => {
                console.log(result.text);
                toast.success("Message Submitted Successfully")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <section className='font-serif py-16' data-theme="cupcake">
            <Fade bottom>
                <div id="contact" className="hero min-h-screen py-10">
                    <div className="w-[85%] md:w-[70%] lg:w-[60%] flex-col">


                        <h1 className="text-center text-4xl font-bold mb-10">Contact Me</h1>


                        <div className="flex-shrink-0 w-full p-5 shadow-2xl bg-[#3b143ed7]">
                            <form className="card-body" ref={form} onSubmit={sendEmail}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-[#e69ceb]">Name</span>
                                    </label>
                                    <input type="text" name="userName" placeholder="name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-[#e69ceb]">Email</span>
                                    </label>
                                    <input type="email" name="userEmail" placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-[#e69ceb]">Message</span>
                                    </label>
                                    <textarea name="message" placeholder="message" className="input input-bordered h-32" />

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Send Message" className="btn glass bg-[#264d43] hover:text-[rgb(230,156,235)] my-4" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ContactMe;