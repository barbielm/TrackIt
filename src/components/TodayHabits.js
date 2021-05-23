import TodayHabit from './TodayHabit'
export default function TodayHabits(props){
    const { todayHabits } = props
    
    return(
        todayHabits.map(habit => <TodayHabit habit={habit} />)
    )
}