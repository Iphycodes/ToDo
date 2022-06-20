import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from '../../Components/TaskInput/TaskInput.component'
import { TaskItemBox } from '../../Components/TaskItemBox/TaskItemBox.component'
import { MainBackgroundContainer } from '../Login/Login.styled'
import { HomePageContainer, HomePageTextContainer, LongLine, TodoContainer } from './HomePage.styled'
import { ShortLine } from './HomePage.styled';
import { useEffect } from 'react';
import { useState } from 'react'
import { getData, getFreshData } from '../../Redux/Tasks/Task.reducer'

const HomePage = () => {
    const tasks = useSelector((state) => state.tasks.taskItems)
    const [inputValue, setInputValue] = useState('')


    function handleClick(val){
        setInputValue(val)

        console.log('clciked')
    }

    useEffect(() => {
    //   const data = getFreshData();
    //   console.log({data})
    
      
    }, [])
    
    
    return (
        
        <MainBackgroundContainer>
            {console.log(inputValue)}
            {console.log(tasks)}
            <HomePageContainer>
                <HomePageTextContainer>
                    <h1>Monday</h1>
                    <ShortLine/>
                    <p>May 18th, 2022</p>
                </HomePageTextContainer>

                <TodoContainer>
                    <TaskInput placeholder='Add a Task' name='task' inputValue={inputValue}/>
                    <LongLine/>

                    <div className='unDoneTasks'>

                        {
                            tasks.map(({id, isDone, description, time }) => (
                                !isDone ? <TaskItemBox key={id} id={id} isDone={isDone} description={description} time={time} setInputValue={(val) => handleClick(val)}/> : null
                            ))    
                        }
                    </div>

                    <div className="doneTasks">
                    <p>Completed</p>
                    <LongLine/>
                    {
                        tasks.map(({id, description, time, isDone}) => {
                          return isDone ? <TaskItemBox key={id} id = {id} description={description} time={time} isDone={isDone} /> : null
                        })
                    }
                    </div>

                </TodoContainer>
                
            </HomePageContainer>
        </MainBackgroundContainer>
    )
}

export default HomePage;