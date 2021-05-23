import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

export default function App(){
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            <Login/>
        </Route>
        <Route path="/cadastro" exact>
            <SignUp/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
