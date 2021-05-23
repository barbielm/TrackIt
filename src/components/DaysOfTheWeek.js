import styled from 'styled-components' 
import DayOfTheWeek from './DayOfTheWeek'

export default function DaysOfTheWeek({daysOfTheWeek, selectedDays, setSelectedDays}){
    return(
        <Days>
            {daysOfTheWeek.map((day,i) => <DayOfTheWeek day={day} selectedDays={selectedDays} setSelectedDays={setSelectedDays} i={i}/>)}
        </Days>
    )

}

const Days = styled.div`
    display: flex;
    margin-top: 8px;
`
