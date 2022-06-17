import React from 'react'
import { MainBackgroundContainer } from '../Login/Login.styled'
import { HomePageContainer, HomePageTextContainer } from './HomePage.styled'
import { ShortLine } from './HomePage.styled'


const HomePage = () => {

    return (
        <MainBackgroundContainer>
            <HomePageContainer>
                <HomePageTextContainer>
                    <h1>Monday</h1>
                    <ShortLine/>
                    <p>May 18th, 2022</p>
                </HomePageTextContainer>
            </HomePageContainer>
           


        </MainBackgroundContainer>
    )
}

export default HomePage;