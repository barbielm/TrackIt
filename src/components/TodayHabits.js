import TodayHabit from './TodayHabit'

export default function TodayHabits({ todayHabits, setTodayHabits, setFinishedHabits }){   
    return(
        todayHabits.map(habit => <TodayHabit habit={habit} key={habit.id} 
            setFinishedHabits={setFinishedHabits} setTodayHabits={setTodayHabits}/>)
    )
}