import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/background2.png'
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
    return (
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt='' />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt='' />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>Acerca</p>
                <h1 className='primary-heading'>
                Profe por favor coloquenos un 5 porfa
                </h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore
                    non molestias dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus
                    blanditiis
                </p>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore
                    non molestias dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus
                    blanditiis
                </p>    
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Leer mas</button>
                    
                </div>
            </div>


        </div>
    )
}

export default About