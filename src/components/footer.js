import react from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logotip from './../img/Logotip2.svg'

const Main = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100vw;
height: 20vh;
background-color: #03C1CF;
`
const Korobka = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 40vw; 
align-items: center;
`

const Logo = styled.div`
width: 4vw;
`
const God = styled.div`
color: white;
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: flex-end;
`
export default (()=>{
return(
<Main><Link to="/"><img src={Logotip} /></Link>
<God>2020</God>
</Main>
)})