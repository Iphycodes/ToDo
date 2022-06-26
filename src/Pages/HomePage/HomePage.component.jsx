import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from '../../Components/TaskInput/TaskInput.component'
import { TaskItemBox } from '../../Components/TaskItemBox/TaskItemBox.component'
import { MainBackgroundContainer } from '../Login/Login.styled'
import { HomePageContainer, HomePageTextContainer, LongLine, TodoContainer } from './HomePage.styled'
import { ShortLine } from './HomePage.styled';
import { useState } from 'react'
import { ImageBox } from './HomePage.styled'
import { auth } from '../../Firebase/Firebase.config'
import { signOut } from 'firebase/auth'
import { CustomButton } from '../../Components/CustomButton/CustomButton.component'
import { setCurrentUser } from '../../Redux/User/User.reducer'
import { useDispatch } from 'react-redux'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { setTasks } from '../../Redux/Tasks/Task.reducer'
import { db } from '../../Firebase/Firebase.config'

const HomePage = () => {
    const tasks = useSelector((state) => state.tasks.taskItems)
    const [inputValue, setInputValue] = useState('')
    const globalInputValue = useSelector(state => state.inputVal.inputValue)
    const itemToEdit = useSelector(state => state.tasks.itemToEdit)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser)



    useEffect(() => {

        
        const usersCollectionRef = collection(db, 'users')

        const userId = currentUser.id

        console.log(`The currentUser id is ${userId}`)

        const documentRef = doc(usersCollectionRef, userId)

        const taskCollectionRef = collection(documentRef, 'tasks')

        const getAllTask = async () => {

            const taskItems = await getDocs(taskCollectionRef)
            dispatch(setTasks((taskItems.docs.map((doc) => ({...doc.data(), idc: doc.id})))))

            console.log((taskItems.docs.map((doc) => ({...doc.data(), idc: doc.id}))))

        }

        getAllTask()




    }, [])


    function handleClick(val){
        setInputValue(val)
    }

    const signout = (e) => {


        if(window.confirm("Logout?") == true){
            signOut(auth)
            .then(() => {
                console.log('user is signed out')
                dispatch(setCurrentUser(null));
            })
            .catch((error) => console.log(error))
        }

           
            
    }
        
    
    return (
        
        <MainBackgroundContainer>
            {console.log(tasks)}
            
            <HomePageContainer>
                
                <HomePageTextContainer>
                    <h1>Monday</h1>
                    <ShortLine/>
                    <p>May 18th, 2022</p>
                    <CustomButton className = 'sign-out' onClick={signout}>Logout</CustomButton>
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
                            tasks.map(({idc, id, isDone, description, time }) => (
                                !isDone ? <TaskItemBox key={id} idc={idc} id={id} isDone={isDone} description={description} time={time} setInputValue={(val) => handleClick(val)} inputValue={globalInputValue} isEdit={itemToEdit.id === id ? true : false}/> : null
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
                            {tasks.map(({id, idc, isDone, description, time }) => (
                                isDone ? <TaskItemBox key={id} idc={idc} id={id} isDone={isDone} description={description} time={time} setInputValue={(val) => handleClick(val)} inputValue={globalInputValue}/> : null
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