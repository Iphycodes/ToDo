import axios from "axios";
import React, { useEffect, useState } from "react";
import { Advert } from "../Advert/Advert.component";
import { AdvertButton, AdvertButtonsContainer, AdvertPreviewContainer } from "./AdvertPreview.styled";


export const AdvertPreview = () => {

    const [advertData, setAdvertData] = useState(null)
    const [current, setCurrent] = useState(0)
    const [newId, setNewId] = useState(0)


    useEffect(() => {
        axios.get('/ADVERT_DATA.json')
        .then(response => {
            setAdvertData(response?.data)
        })
    }, [])

    // useEffect(() => {
    //     setInterval(slideTimeFunctiion, 1000)
    // }, [current])

    const slideTimeFunctiion = () => {
        current < 2 ? setCurrent(current + 1) : setCurrent(0)
    }

    // setInterval(() => {current < 2 ? setCurrent(current + 1) : setCurrent(0)}, 3000)

    // setInterval(slideTimeFunctiion, 4000)

    return (
        <>
        <AdvertPreviewContainer>
            {
                <Advert advertDatum={advertData?.[current]}/>
            }
            
            <AdvertButtonsContainer>
                {
                    advertData?.map(({id}) => (
                        <span key={id} ><AdvertButton onClick= {()=>setCurrent(id)}/></span>
                    ))
                }
            </AdvertButtonsContainer>
        </AdvertPreviewContainer>
        </>
        
    )
}