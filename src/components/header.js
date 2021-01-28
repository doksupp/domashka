import react from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logotip from './../img/Logo.svg'

const Main = styled.div`
display: flex;
flex-direction:row;
justify-content: space-evenly;
width: 100vw;
height: 10vh;
background-color: white;
align-items: center;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`
const Korobka = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 40vw; 
align-items: center;


font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
`

const Logo = styled.div`
width: 4vw;



`
export default (()=>{
return(
<Main>
    <Link to="/"><img src={Logotip} /></Link>
    <Korobka>
        <Link to="/Aboutus" style={{textDecoration:'none', color:'black'}}><div>About us</div></Link>
        <Link to="/Teams" style={{textDecoration:'none', color:'black'}}><div>Teams</div></Link>
        <Link to="/Projects" style={{textDecoration:'none', color:'black'}}><div>Projects</div></Link>
        <Link to="/Explore" style={{textDecoration:'none', color:'black'}}><div>Explore</div></Link>
    </Korobka>
</Main>
)})