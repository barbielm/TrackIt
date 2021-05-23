import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Today from './components/Today'
import Habits from './components/Habits'

import { useState } from 'react'
import UserContext  from './contexts/UserContext'

export default function App(){
  const [information, setInformation] = useState({})

  return(
    <UserContext.Provider value={{information, setInformation}}>
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
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
    
  )
}
