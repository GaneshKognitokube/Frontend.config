'use client'

import { useForm } from "react-hook-form";

import ContactInfoItem from "../Pages/Contact/ContactInfoItem";
import contactData from "@/data/pages/contact.json";

const FormContact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="contact-title">Contact info</h3>
                        {contactData &&
                            contactData.map((item, index) => (
                                <ContactInfoItem
                                    key={index}
                                    iconClass={item.iconClass}
                                    title={item.title}
                                    detail={item.detail}
                                />
                            ))}
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="contact-title">Get in touch</h3>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-validator">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        {...register('name', { required: true })}
                                    />
                                </div>
                                <div className="input-validator">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        {...register('email', { required: true })}
                                    />
                                </div>
                                <div className="input-validator">
                                    <textarea
                                        name="message"
                                        id=""
                                        cols="30"
                                        rows="3"
                                        placeholder="Message"
                                    />
                                </div>
                                <button className="btn -dark">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12">
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormContact