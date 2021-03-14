import React from "react";
import "./contacts-form.css"


const ContactsForm = () => {
    return (
        <div className="contact">
            <h2 className="contact__title">
                <span className="contact__title-pos">Contact form</span>
            </h2>
            <div>
                <form className="contact__form">
                    <div>
                        <input type="text" name="username" placeholder="Name" className="input"
                               required/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email"
                               className="input" required/>
                    </div>
                    <div>
                        <input type="tel" name="phone" placeholder="Phone"
                               className="input" required/>
                    </div>
                    <div>
                        <textarea
                            name="messages" placeholder="Message"
                            className="input text__area">
                    </textarea>
                    </div>
                    <div>
                        <input type="submit" name="submit" value="SUBMIT" className="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactsForm