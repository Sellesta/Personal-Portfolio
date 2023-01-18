import React from 'react';
import fire from '../images/about.jpg';

const ImageSection = () => {
    return (
        <div className='ImageSection'>
            <div className="img">
                <img src={fire} alt="profile img" />
            </div>
            <div className="about-info">
                <p className='about-text'>
                    I am a Frontend Web3 Developer from PA, Pittsburgh. With a Bachelor's in IT from Kibabii University while looking for opportunities in the field of Web development. Currently I am learning Solidity and Web3 in order to become a full stack block chain developer.
                </p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: <span>Moses Chege</span></p>
                        <p>: 29</p>
                        <p>: Kenyan</p>
                        <p>: German, French, English</p>
                        <p>: PA, Pittsburgh</p>
                    </div>
                </div>
                <button className="btn">
                    <a href="https://rxresu.me/rapidmilesltd/moses-chege" target="_blank" rel="noreferrer">My Resume</a>
                </button>
            </div>
        </div>
    );
};

export default ImageSection;
