import React from "react";
import { AdvertBodyContainer, AdvertHeaderContainer, AdvertImage, MainAdvertContainer } from "./Advert.styled";


export const Advert = ({advertDatum}) => {

    const {imageName, heading, description} = advertDatum ?? {};
    
    return (
        <MainAdvertContainer>
        <AdvertImage src={process.env.PUBLIC_URL + `/images/${imageName}`} alt='pic'/>
        <AdvertHeaderContainer>
            <h2>{heading}</h2>
        </AdvertHeaderContainer>
        <AdvertBodyContainer>
            <p>{description}</p>
        </AdvertBodyContainer>
    </MainAdvertContainer>
    )
}
       