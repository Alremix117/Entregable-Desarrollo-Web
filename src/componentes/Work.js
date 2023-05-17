import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {

    const workInfoData = [
        {

            image: PickMeals,
            title: "Recoger Comidas",
            text: "orem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore non molestias dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus blanditii",

        },
        {

            image: ChooseMeals ,
            title: "Como Ordenar",
            text: "orem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore non molestias dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus blanditii",

        },
        {

            image: DeliveryMeals,
            title: "Envios rapidos",
            text: "orem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore non molestias dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus blanditii",

        },
    ]

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Trabajo</p>
                <h1 className='primary-heading'>Como Trabajamos</h1>
                <p className='primary-text'>
                orem ipsum dolor sit amet. Est omnis architecto vel recusandae dolore non molestias 
                dolorum non illum incidunt sed velit quas. Hic culpa enim id accusamus blanditii
                </p>
            </div>

            <div className='work-section-bottom'>
                {workInfoData.map((data) => (

                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt=''/>
                        </div>
                        <h2> {data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Work