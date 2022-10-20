import React, {useMemo, useRef, useState} from 'react';
import home from '../home/Home.module.css';
import app from '../../App.module.css';
import about from '../about/About.module.css';
import contacts from './Contacts.module.css'
import {ButtonUniversal} from '../ButtonUniversal';
import {SocialSvgComponent} from '../SocialSVGComponent';
import {Maps} from '../Maps';
import emailjs from '@emailjs/browser';
import {ModalSuccessWindow} from '../modalWindows/ModalSuccessWindow';
import modal from '../modalWindows/ModalSuccessWindow.module.css'

export const Contacts = () => {
    // const [modalSuccess, setModalSuccess] = useState(false);
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_4rckvrl', 'template_alqt1da', form.current, '5P2r9ws9F8l4LYYq8')
            .then((result) => {
                alert(result.text)
                // <ModalSuccessWindow res={result.text} />
                // <div className={modal.wrapper}>{result.text}</div>
                // setModalSuccess(true)
            }, (error) => {
                alert(error.text);
            });
        e.target.reset()
    };

    return (
        <>
            {/*{modalSuccess && <div className={contacts.modal_success}>{'success'}</div>}*/}
            <div className={contacts.title_box}>
                <span className={home.text}>Feel Free To Contact Me Anytimes</span>
                <h2 className={`${app.title} ${contacts.title}`}>My<span className={about.style_text}> Contacts</span>
                </h2>
            </div>
            <div className={contacts.block}>
                <div className={contacts.contact_me}>
                    <h3 className={contacts.subtitle}>Contact Me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={contacts.inner}>
                            <input
                                name={'name'}
                                className={`${contacts.input} ${contacts.input_size}`}
                                placeholder={'Name'}/>
                            <input
                                name={'email'}
                                className={`${contacts.input} ${contacts.input_size}`}
                                placeholder={'Email'}/>
                        </div>
                        <input
                            name={'subject'}
                            className={`${contacts.input} ${contacts.message}`}
                            placeholder={'Subject'}/>
                        <textarea
                            name={'message'}
                            className={contacts.text}
                            placeholder={'Message'}></textarea>
                        <div className={contacts.btn}>
                            <ButtonUniversal title={'Send Message'} href={'???'}/>
                        </div>

                    </form>
                </div>

                <div className={contacts.contact_info}>
                    <h3 className={contacts.subtitle}>Contact Info</h3>
                    <p className={home.text}>
                        Always available for communication. Do not hesitate to contact me!
                    </p>
                    <ul className={contacts.list}>
                        <li className={`${contacts.item} ${contacts.item_name}`}>
                            <div className={contacts.title_color}>Name</div>
                            <div className={about.style_text}>Mysliatska Svitlana</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_location}`}>
                            <div className={contacts.title_color}>Location</div>
                            <div className={about.style_text}>29007, Calle Marmoles. Spain, Malaga</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_call}`}>
                            <div className={contacts.title_color}>Call Me</div>
                            <div className={about.style_text}>+34 624 89 10 54</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_email}`}>
                            <div className={contacts.title_color}>Email Me</div>
                            <div className={about.style_text}>svtlnlily@gmail.com</div>
                        </li>
                    </ul>
                    <div className={about.social}>
                        <SocialSvgComponent/>
                    </div>

                    {/*<Maps />*/}
                    {/*<Maps mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />*/}
                </div>
            </div>
            <div>
                {/*const center = useMemo(() => ({lat: 36.721275, lng: -4.421399}), [])*/}
            </div>
        </>
    );
};
