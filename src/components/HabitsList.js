import Habit from './Habit'
export default function HabitsList({habits,setHabits}){
    return(
       habits.map(habit => <Habit habit={habit} habits={habits} setHabits={setHabits} />) 
    )
}