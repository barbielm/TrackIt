import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Today from './components/Today'
import Habits from './components/Habits'
import History from './components/History'

import { useState } from 'react'
import UserContext  from './contexts/UserContext'

export default function App(){
  const [information, setInformation] = useState({})
  const [dailyProgress, setDailyProgress] = useState(0)

  return(
    <UserContext.Provider value={{information, setInformation, dailyProgress, setDailyProgress}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <Login/>
          </Route>
          <Route path="/cadastro" exact>
              <SignUp/>
          </Route>
          <Route path="/hoje" exact>
              <Today/>
          </Route>
          <Route path="/habitos" exact>
              <Habits/>
          </Route>
          <Route path="/historico" exact>
              <History/>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
    
  )
}
