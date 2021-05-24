import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'
import TodayHabits from './TodayHabits'
import '../assets/styles/reset.css'
import UserContext from '../contexts/UserContext'

import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'


export default function Today(){
    const { information, dailyProgress, setDailyProgress } = useContext(UserContext)
    const { token } = information
    const [todayHabits, setTodayHabits] = useState([])
    const [ finishedHabits, setFinishedHabits ] = useState([])
    
    const now = dayjs().locale('pt-br').format("dddd, D/M")
    

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(success)
        request.catch(error)
    },[])
    
    function success(reply){
        const allHabits = reply.data
        const filteredHabits = reply.data.filter(h => h.done===true)
        setTodayHabits(allHabits)
        setFinishedHabits(filteredHabits)
        if(allHabits.length > 0){
            setDailyProgress(Math.round(100*filteredHabits.length/allHabits.length))    
        } 
        
    }

    function error(){
        alert("falha ao carregar")
    }

    return(
        <TodayPage>
            <Navbar/>
            <Date>{now}</Date>
            <Description dailyProgress={dailyProgress}>{(dailyProgress > 0) ? `${dailyProgress}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Description>
            <TodayHabits todayHabits={todayHabits} setTodayHabits={setTodayHabits} finishedHabits={finishedHabits} setFinishedHabits={setFinishedHabits}/>
            <Footer/>
            <Hole />
        </TodayPage>
    )
}

const Hole = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: -1;
width: 100%;
height: 100vh;
background: #F2F2F2;
`

const TodayPage = styled.div`
    width: 100%;
    height: 200%;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    margin-bottom: 90px;
`
const Date = styled.div`
    color: #126BA5;
    font-size: 23px;
    margin: 90px 0 0 15px;

`

const Description = styled.div`
    font-size: 18px;
    color: ${props => (props.dailyProgress > 0) ? '#8FC549' : '#BABABA'};
    margin: 5px 0 20px 15px;
`