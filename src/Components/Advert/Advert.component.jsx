import React from "react";
import { AdvertBodyContainer, AdvertHeaderContainer, AdvertImage, MainAdvertContainer } from "./Advert.styled";


export const Advert = ({advertDatum}) => {

    
    return (
        <MainAdvertContainer>
        <AdvertImage src={process.env.PUBLIC_URL + `/images/${advertDatum?.imageName}`} alt='pic'/>
        <AdvertHeaderContainer>
            <h2>{advertDatum?.heading}</h2>
        </AdvertHeaderContainer>
        <AdvertBodyContainer>
            <p>{advertDatum?.description}</p>
        </AdvertBodyContainer>
    </MainAdvertContainer>
    )
}
       