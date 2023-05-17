import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/background1.png";
import BannerImage from "../Assets/background3.png"
import { FiArrowRight } from "react-icons/fi"


const home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='' />
                </div>

                <div className='home-text-section'>


                    <h1 className='primary-heading'>
                        Profe por favor coloquenos un 5 porfa
                    </h1>
                    <p className='primary-text'>
                    Lorem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore 
                    non molestias dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus 
                    blanditiis
                
                    </p>
                    <button className='secondary-button'>
                        Ordene ya su comida! <FiArrowRight/>
                    </button>
                </div>
                <img src={BannerImage} alt='' />
            </div>
        </div>
    )
}

export default home