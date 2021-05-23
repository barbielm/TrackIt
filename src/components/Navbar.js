import styled from 'styled-components'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function Navbar(){
    const { information } = useContext(UserContext)
    return(
        <Top >
            <TopTitle>TrackIt</TopTitle>
            <img src={information.image} />
        </Top>
    )
}

const Top = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 15px;
    }
`

const TopTitle = styled.div`
    font-family: 'Playball', cursive;
    color: #FFFFFF;
    font-size: 40px;
    margin-left: 15px;
`