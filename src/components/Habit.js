import styled from 'styled-components'
import TrashCam from '../assets/imgs/Trash.svg'
import axios from 'axios'
import UserContext from '../contexts/UserContext'

import { useContext } from 'react'

export default function Habit({habit, habits, setHabits}){
    const daysOfTheWeek = ['D','S','T','Q','Q','S','S']
    const {information} = useContext(UserContext)
    const {token} = information
    function deleteHabit(){
        const toDelete = window.confirm("Você realmente deseja apagá-lo?") 
        if(!toDelete) return
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,config)
        request.then(success)
        request.catch(error)
    }

    function success(reply){
        const newArray = habits.filter(h => h !== habit)
        setHabits(newArray)
    }

    function error(){
        alert("erro ao deletar o hábito")
    }

    return(
        <HabitBox>
            <Head>
                {habit.name}
            </Head>
            <img src={TrashCam} alt="lixeira" onClick={deleteHabit}/>
            <Days>
            {daysOfTheWeek.map((day,i) => <Day i={i} days={habit.days}>{day}</Day>)}
            </Days>
        </HabitBox>
    )
}

const HabitBox = styled.div`
    width: 100%;
    height: 90px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    img{
        width: 15px;
        height: 15px;
        color: #666666;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    
` 

const Head = styled.div`
    width: 100%;
    font-size: 20px;
    color: #666666;

`
const Days = styled.div`
    display: flex;
    margin-top: 8px;
`
const Day = styled.div`
    font-size: 20px;
    color: ${(props) => (props.days.includes(props.i) ) ? '#FFFFFF' : '#DBDBDB'};
    width: 30px;
    height: 30px;
    background: ${(props) => (props.days.includes(props.i) ) ? '#DBDBDB' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:  center;
    margin-right: 5px;
`