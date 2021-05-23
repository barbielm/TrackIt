import Navbar from './Navbar'
import Footer from './Footer'
import DaysOfTheWeek from './DaysOfTheWeek'
import HabitsList from './HabitsList'

import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import '../assets/styles/reset.css'
import UserContext from '../contexts/UserContext'
import Loader from "react-loader-spinner"

export default function Habits(){
    const [ habits, setHabits ] = useState([])
    const [isNewHabit, setIsNewHabit] = useState(false)
    const [newHabit, setNewHabit] = useState("")
    const [selectedDays, setSelectedDays] = useState([])
    const [isLoading, setLoading] = useState(false)
    const {information} = useContext(UserContext)
    const {token} = information
    const daysOfTheWeek = ['D','S','T','Q','Q','S','S']
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        request.then(success)
        request.catch(error)
    },[])

    function success(reply){
        setHabits(reply.data)
        console.log(habits)
    }

    function error(){
        alert("Não foi possível carregar os hábitos")
    }

    function addNewHabit(){
        if(newHabit === "" || selectedDays === []){
            alert("selecione os dias e preencha o campo de texto")
            return
        }
        setLoading(true)
        const body = {name: newHabit, days: selectedDays}
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        request.then(reply => {setHabits([...habits, reply.data])
                                setLoading(false)
                                console.log(habits)
                                setIsNewHabit(false)
                                setNewHabit("")              
                                          })
        request.catch(() => {alert("erro ao enviar novo hábito")
                                setLoading(false)})
    }

    return(
        <HabitsContent habits={habits}>
            <Navbar />
            <HabitsTitle>
                <Title>Meus Hábitos</Title>
                <AddHabit onClick={() => {
                    if(!isNewHabit){
                        setIsNewHabit(true)}
                    else{
                        setIsNewHabit(false)
                        setNewHabit("")
                    }                        }}>+</AddHabit>
            </HabitsTitle>
            {isNewHabit && 
                <NewHabit isLoading={isLoading}>
                    <input disabled={isLoading} type="text" placeholder="Nome do hábito" value={newHabit} onChange={e => setNewHabit(e.target.value)}/>
                    <DaysOfTheWeek daysOfTheWeek={daysOfTheWeek} selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
                    <Buttons>
                        <Cancel disabled={isLoading} onClick={() => {setIsNewHabit(false)
                                                                    setNewHabit("")
                                                                                    }} isLoading={isLoading} >Cancelar</Cancel>
                        <Save disabled={isLoading} onClick={addNewHabit} isLoading={isLoading} >{
                            (isLoading) ? 
                            <Loader type="ThreeDots" color="#FFFFFF" height={80} width={80}  /> : 'Salvar'
                        }</Save>
                    </Buttons>
                    
                </NewHabit>   
            
            }
            <HabitsDescription>{(habits.length > 0) ? '' : 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'}
            </HabitsDescription>
            {(habits.length > 0) && 
                <HabitsList habits={habits} setHabits={setHabits}/>
            }
            <Footer />
            <Hole />
        </HabitsContent>
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

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`
const Cancel = styled.div`
    width: 84px;
    height: 35px;
    color: #52B6FF;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:  center;
    margin-right: 5px;
    opacity: ${(props) => (props.isLoading) ? '0.7' : '1'}
`
const Save = styled.div`
    width: 84px;
    height: 35px;
    color: #FFFFFF;
    background: #52B6FF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:  center;
    opacity: ${(props) => (props.isLoading) ? '0.7' : '1'}
    
`


const HabitsContent = styled.div`
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 80px;
    
`

const HabitsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;

`

const Title = styled.div`
    font-size: 23px;
    color: #126BA5;

`
const AddHabit = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    color: #FFFFFF;
    background: #52B6FF;
    border-radius: 5px;
`

const HabitsDescription = styled.div`
    font-size: 18px;
    color: #666666;
    margin-top: 20px;
`

const NewHabit = styled.div`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0;
    padding: 15px;
    box-sizing: border-box;
    input{
        width: 100%;
        height: 45px;
        background-color: ${(props) => (props.isLoading) ? '#DBDBDB' : '#FFFFFF'};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        padding: 0 10px;
        box-sizing: border-box;
    
    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 20px;

    }
`