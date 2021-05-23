import img from '../assets/imgs/Logo.PNG'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Loader from "react-loader-spinner"


export default function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [isLoading, setLoading] = useState(false)
    const history = useHistory()
    
    function signUp(){
        setLoading(true)
        const body = {email, name, image: picture, password}
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        request.then(success)
        request.catch(error)
    }

    function success(){
        history.push("/")
    }

    function error(error){
        alert("erro ao efetuar o cadastro")
        setLoading(false)
        setEmail("")
        setPassword("")
        setPicture("")
        setName("")
        console.log(error)
    }

    return(
        <SignUpPage isLoading={isLoading}>
            <img src={img} alt="logo"/>
            <LogoSignUp>TrackIt</LogoSignUp>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} />
            <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} />
            <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} disabled={isLoading} />
            <input type="text" placeholder="foto" value={picture} onChange={e => setPicture(e.target.value)} disabled={isLoading} />
            <button disabled={isLoading} onClick={signUp} >
                {(isLoading) ? 
                <Loader type="ThreeDots" color="#FFFFFF" height={80} width={80}  /> : 'Cadastrar'}</button>
            <LoginLink onClick={() => history.push("/")}>Já tem uma conta? Faça login!</LoginLink>
        </SignUpPage>
    )
}

const SignUpPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    padding: 25px;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    input {
        height: 45px;
        width: 100%;
        background-color: ${(props) => (props.isLoading) ? '#DBDBDB' : '#FFFFFF'};
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px; 
        padding: 0 10px;
        margin-bottom: 6px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;

    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 20px;

    }
    img {
        width: 170px;
        margin: 50px auto 0 auto;

    }
    button{
        height: 45px;
        width: 100%;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;    
        border: none;
        opacity: ${(props) => (props.isLoading) ? '0.7' : '1'}
    }

`
const LogoSignUp = styled.div`
    font-size: 70px;
    margin: 10px auto 30px auto;
    color: #126BA5;
    font-family: 'Playball', cursive;
`

const LoginLink = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    margin-top: 30px;
`