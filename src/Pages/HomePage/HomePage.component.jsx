import React from 'react'
import { TaskInput } from '../../Components/TaskInput/TaskInput.component'
import { MainBackgroundContainer } from '../Login/Login.styled'
import { HomePageContainer, HomePageTextContainer, LongLine, TodoContainer } from './HomePage.styled'
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

                <TodoContainer>
                    <TaskInput placeholder='Add a Task' name='task'/>
                </TodoContainer>
                <LongLine/>
            </HomePageContainer>
        </MainBackgroundContainer>
    )
}

export default HomePage;