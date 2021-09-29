import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title';
import PrimaryButton from "../components/PrimaryButton";
import { InnerLayout, MainLayout } from '../styles/LayoutStyles';
import ContactItem from '../components/ContactItem';


import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function ContactsPage() {

    const phone = <PhoneIcon />;
    const email = <EmailIcon />;
    const location = <LocationOnIcon />;

    return (
        <MainLayout>
            <Title title={"Contacts"} span={"Contacts"} />
            <ContactsPageStyled>
                <InnerLayout className="contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get in Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name">Enter your name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter your email</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Type the subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter text</label>
                                <textarea name="textarea" placeholder="Enter something here" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={"Send Email"} />
                            </div>
                        </form>

                    </div>
                    <div className="right-content">
                        <ContactItem icon={phone} title={"Phone"} contact1={"+254 703 393 400"} contact2={"+966 01 234 567"} />
                        <ContactItem icon={email} title={"Email"} contact1={"rogerus.madaki22@gmail.com"} contact2={"randomemail@yahoo.com"} />
                        <ContactItem icon={location} title={"Address"} contact1={"Al Murooj, Riyadh - SA"} contact2={"Nairobi, Kenya"} />
                    </div>
                </InnerLayout>
            </ContactsPageStyled>
        </MainLayout>
    )
}


const ContactsPageStyled = styled.div`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        .left-content {
            text-align: left;

            .contact-title {
                h4 {
                    color: var(--white-color);
                    font-size: 1.8rem;
                    padding: 1rem 0;
                }
            }

            .form {
                width: 100%;

                .form-field {
                    margin-top: 2rem;
                    position: relative;
                    width: 100%;
                    
                    label {
                        /* font-size: 1.1rem; */
                        color: var(--white-color);
                        position: absolute;
                        top: -12px;
                        left: 20px;
                        display: inline-block;
                        background-color: var(--background-dark-color);
                        padding: 5px .5rem;
                    }

                    input {
                        border: 1px solid var(--border-color);
                        outline: none;
                        font-size: 1rem;
                        padding: 15px 15px 5px 15px;
                        background-color: transparent;
                        width: 100%;
                        margin-top: .5rem;
                        color: var(--white-color);
                    }

                    textarea {
                        width: 100%;
                        margin-top: .5rem;
                        background-color: transparent;
                        border: 1px solid var(--border-color);
                        outline: none;
                        color: inherit;
                        padding: .8rem 1rem;
                    }
                }

            }
        }


        .right-content {
            display: flex;
            flex-direction: column;
        }

    }
`

export default ContactsPage
