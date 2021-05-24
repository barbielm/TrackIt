import styled from 'styled-components'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useHistory } from 'react-router-dom'
import {useContext} from 'react'

import UserContext from '../contexts/UserContext'

export default function Footer(){
    const {dailyProgress} = useContext(UserContext)
    const history = useHistory()
    return(
        <Menu>
            <HabitsButton onClick={() => history.push("/habitos")}>Hábitos</HabitsButton>
            <TodayButton onClick={() => history.push("/hoje")}>Hoje
                <div >
                <CircularProgressbar value={dailyProgress} styles={{
                    path: {
                    stroke: `#FFFFFF`
                    }}}/>
                </div>
            </TodayButton>
            <HistoryButton onClick={() => history.push("/historico")}>Histórico</HistoryButton>
        </Menu>
    )
}

const Menu = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-size: 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 2;
    
    
`

const HabitsButton = styled.div``

const HistoryButton = styled.div``

const TodayButton = styled.div`
    color: #FFFFFF;
    background-color: #52B6FF;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
        width: 69px;
        height: 79px;
        position: absolute;
        right: 5px;
        top: 5px; 
    }
    div {
        width: 90%;
        height: 90%;
        position: absolute;
        left: 5%;
        top: 5%;
    }
`
