import styled from 'styled-components'
import check from '../assets/imgs/Check.svg'
export default function TodayHabit({habit}){
    
    return(
        <TodayHabitBox>
            <HabitTitle>Ler 1 livro</HabitTitle>
            <CurrentSequence>Sequência atual: 1 dia</CurrentSequence>
            <Record>Seu recorde: 2 dias</Record>
            <CheckBox>
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
    background-color: #EBEBEB;
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