import React from 'react';
import ContactItem from '../components/ContactItem';
import email from '../images/emailme.svg';
import location from '../images/location.svg';
import Title from '../components/Title';
import { FaLinkedin, FaFacebook, FaTwitter, FaGithubSquare, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contat'} />
            </div>
            <div className='ContactPage'>
                <div className="map-sect">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.508701378012!2d88.43786016431935!3d26.696191025805923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441803cc366dd%3A0xc1387363106dfa78!2sBhaktinagar%2C%20Dabgram%2C%20Siliguri%2C%20West%20Bengal%20734004!5e0!3m2!1sen!2sin!4v1643739575872!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={email} text={'chegemoses2@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text={'Pittsburgh, PA, USA'} title={'Location'} />
                </div>
            </div>
            <Title title={'My socials'} span={'Socials'} />
            <div className="icons">
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="">
                        <FaLinkedin size={42} />
                    </a>
                    <span className="tooltiptext">Linkedin</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="">
                        <FaTwitter size={42} />
                    </a>
                    <span className="tooltiptext">Twitter</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="">
                        <FaGithubSquare size={42} />
                    </a>
                    <span className="tooltiptext">Github</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="">
                        <FaInstagram size={42} />
                    </a>
                    <span className="tooltiptext">Instagram</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="">
                        <FaFacebook size={42} />
                    </a>
                    <span className="tooltiptext">Facebook</span>
                </li>
            </div>
        </div>
    );
};

export default ContactPage;
