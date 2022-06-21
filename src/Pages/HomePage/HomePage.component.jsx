import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from '../../Components/TaskInput/TaskInput.component'
import { TaskItemBox } from '../../Components/TaskItemBox/TaskItemBox.component'
import { MainBackgroundContainer } from '../Login/Login.styled'
import { HomePageContainer, HomePageTextContainer, imageBox, LongLine, TodoContainer } from './HomePage.styled'
import { ShortLine } from './HomePage.styled';
import { useEffect } from 'react';
import { useState } from 'react'
import { getData, getFreshData } from '../../Redux/Tasks/Task.reducer'
import { ImageBox } from './HomePage.styled'



const HomePage = () => {
    const tasks = useSelector((state) => state.tasks.taskItems)
    const [inputValue, setInputValue] = useState('')
    const globalInputValue = useSelector(state => state.inputVal.inputValue)
    const itemToEdit = useSelector(state => state.tasks.itemToEdit)

    function handleClick(val){
        setInputValue(val)
    }
    
    return (
        
        <MainBackgroundContainer>
            
            <HomePageContainer>
                <HomePageTextContainer>
                    <h1>Monday</h1>
                    <ShortLine/>
                    <p>May 18th, 2022</p>
                </HomePageTextContainer>

                <TodoContainer>
                    <TaskInput placeholder='Add a Task' name='task' inputValue={inputValue} setInputValue={(val) => handleClick(val)}/>

                    {
                        tasks.length > 0 ?
                        (
                            <>
                            <LongLine/>

                    <div className='unDoneTasks'>
                        {
                            tasks.find(task => task.isDone === false) ?
                            tasks.map(({id, isDone, description, time }) => (
                                !isDone ? <TaskItemBox key={id} id={id} isDone={isDone} description={description} time={time} setInputValue={(val) => handleClick(val)} inputValue={globalInputValue} isEdit={itemToEdit.id === id ? true : false}/> : null
                            ))
                            :
                            (
                                <div className='empty'>
                                    <p>
                                        NOTHING HERE!!!
                                    </p>
                                </div>
                            )        
                        }
                    </div>

                    <div className="doneTasks">
                    {
                            tasks.find(task => task.isDone === true) ?
                            (<>
                            <p>Completed</p>
                            <LongLine/>
                            {tasks.map(({id, isDone, description, time }) => (
                                isDone ? <TaskItemBox key={id} id={id} isDone={isDone} description={description} time={time} setInputValue={(val) => handleClick(val)} inputValue={globalInputValue}/> : null
                            ))}
                            </>)
                            :
                            null        
                    }
                    </div>
                    </>
                    )
                        :
                        <div>
                            <ImageBox imgUrl={process.env.PUBLIC_URL + './Images/task.png'}/>
                        </div>
                    }
                    

                </TodoContainer>
                
            </HomePageContainer>
        </MainBackgroundContainer>
    )
}

export default HomePage;