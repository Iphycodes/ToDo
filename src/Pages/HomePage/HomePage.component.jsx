import React from 'react'
import { TaskInput } from '../../Components/TaskInput/TaskInput.component'
import { TaskItemBox } from '../../Components/TaskItemBox/TaskItemBox.component'
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
                    <LongLine/>

                    <div className='unDoneTasks'>
                    <TaskItemBox description='Go to the market' time='9:45pm' isDone={false}/>
                    <TaskItemBox description='Study the Bible' time='10:00pm' isDone={false}/>
                    </div>

                
                    <div className="doneTasks">
                    <p>Completed</p>
                    <LongLine/>
                    <TaskItemBox description='Go to the market' time='9:45pm' isDone={true}/>
                    <TaskItemBox description='Study the Bible' time='10:00pm' isDone={true}/>
                    </div>


                </TodoContainer>
                
            </HomePageContainer>
        </MainBackgroundContainer>
    )
}

export default HomePage;