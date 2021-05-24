import styled from 'styled-components'
import check from '../assets/imgs/Check.svg'
import { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'
import axios from 'axios'


export default function TodayHabit({habit, setFinishedHabits, setTodayHabits}){
    const { information,  setDailyProgress } = useContext(UserContext)
    const { token } = information
    
    function toggle(){
        if(habit.done){
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, habit ,config)
            request.then(success)
            request.catch((error) =>{ alert("erro ao apagar o hábito")
                                    console.log(error)})
        }
        else{
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, habit ,config)
            request.then(success)
            request.catch((error) =>{ alert("erro ao finalizar o hábito")
                                    console.log(error)})
        }
        
    }

    function success(){
        
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(reply => {
            const allHabits = reply.data
            const filteredHabits = allHabits.filter(h => h.done === true )
            const percentage = 100*filteredHabits.length/allHabits.length
            setTodayHabits(allHabits)
            setFinishedHabits(filteredHabits)
            setDailyProgress(Math.round(percentage))
        })
    }
    

    return(
        <TodayHabitBox>
            <HabitTitle>{habit.name}</HabitTitle>
            <CurrentSequence>Sequência atual: {habit.currentSequence} dia{(habit.currentSequence > 1) ? 's' : ''}</CurrentSequence>
            <Record>Seu recorde: {habit.highestSequence} dia{(habit.highestSequence > 1) ? 's' : ''}</Record>
            <CheckBox onClick={toggle} isDone={habit.done}>
                <img src={check} />
            </CheckBox>
        </TodayHabitBox>
    )
}

const TodayHabitBox = styled.div`
    width: calc(100% - 30px);
    height: 95px;
    background-color: #FFFFFF;
    margin: 5px auto;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
`

const HabitTitle = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`
const CurrentSequence = styled.div`
    font-size: 13px;
`
const Record = styled.div`
    font-size: 13px;
`
const CheckBox = styled.div`
    background-color: ${props => (props.isDone) ? '#8FC549' : '#EBEBEB'};
    width: 70px;
    height: 70%;
    position: absolute;
    right: 10px;
    top: 15%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`