import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

export default function History(){
    return(
        <HistoryContent>
            <Navbar/>
            <HistoryTitle>Histórico</HistoryTitle>
            <HistoryDescription>Em breve você poderá ver o histórico dos seus hábitos aqui!</HistoryDescription>
            <Footer/>
            <Hole />
        </HistoryContent>
    )
}

const HistoryContent = styled.div`
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    padding: 15px;
    
`

const HistoryDescription = styled.div`
    font-size: 18px;
    color: #666666;
    
`

const HistoryTitle = styled.div`
    color: #126BA5;
    font-size: 23px;
    margin: 90px 0 20px 0 ;
` 

const Hole = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: #F2F2F2;
`