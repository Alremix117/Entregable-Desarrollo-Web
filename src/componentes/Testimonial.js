import React from 'react'
import ProfilePic from "../Assets/master.png"
import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheadinf'>Testimonios</p>
                <h1 className='primary-heading'>Que dice Wendy?</h1>
                <p className='primary-text'>orem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore non molestias
                    dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus blanditii
                </p>
            </div>

            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt='' />
                <p>orem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore non molestias
                    dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus blanditii
                </p>
                <div className='testimonial-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Colaboradores: Alexander Olivero Zapata - Hanner Alejandro Herrera - Johan Sebastián Cañas Cardona</h2>
            </div>
        </div>
    )
}

export default Testimonial