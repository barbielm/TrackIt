import styled from 'styled-components'
import {useState} from 'react'
export default function DayOfTheWeek({day,selectedDays, setSelectedDays,i}){
    const [isSelected, SetIsSelected] = useState(false)    
    
    return(
        <Day isSelected={isSelected} onClick={() =>
            {if(isSelected){
                SetIsSelected(false)
                const newArray = selectedDays.filter(day => day !== i)
                setSelectedDays(newArray)
            }
            else{
                SetIsSelected(true)
                const newArray = [...selectedDays,i]
                setSelectedDays(newArray.sort())
            }
            console.log(selectedDays)
        }
        }>{day}</Day>
    )
}

const Day = styled.div`
    font-size: 20px;
    color: ${(props) => (props.isSelected) ? '#FFFFFF' : '#DBDBDB'};
    width: 30px;
    height: 30px;
    background: ${(props) => (props.isSelected) ? '#DBDBDB' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:  center;
    margin-right: 5px;
`