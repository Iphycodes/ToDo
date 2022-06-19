import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from '../../Components/TaskInput/TaskInput.component'
import { TaskItemBox } from '../../Components/TaskItemBox/TaskItemBox.component'
import { MainBackgroundContainer } from '../Login/Login.styled'
import { HomePageContainer, HomePageTextContainer, LongLine, TodoContainer } from './HomePage.styled'
import { ShortLine } from './HomePage.styled';
import { useEffect } from 'react';


const HomePage = () => {
    const tasks = useSelector((state) => state.tasks.taskItems)
    
    return (
        <MainBackgroundContainer>
            {console.log(tasks)}
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
                        {/* {
                            tasks.map(({id, description, time, isDone}) => (
                                !isDone ? <TaskItemBox key={id} description={description} time={time} isDone={isDone}/> : null
                            ))    
                        } */}

                        {
                            tasks.map((taskItem, {id, isDone}) => (
                                !isDone ? <TaskItemBox key={id} taskItem={taskItem}/> : null
                            ))    
                        }
                    </div>

                    <div className="doneTasks">
                    <p>Completed</p>
                    <LongLine/>
                    {
                        tasks.map(({id, description, time, isDone}) => {
                          return isDone ? <TaskItemBox key={id} description={description} time={time} isDone={isDone}/> : null
                        })
                    }
                    </div>

                </TodoContainer>
                
            </HomePageContainer>
        </MainBackgroundContainer>
    )
}

export default HomePage;