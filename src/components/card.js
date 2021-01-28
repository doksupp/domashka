import react from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Chelik from './../img/chelik.svg';

export default((props)=>{

const Box = styled.div`
display: flex;
    flex-direction: column;
    background-color: #50B9C0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    width: 27vh;
    height: 15vw;
    padding: 3px;
`
const Team = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
`

const Project = styled.div`
display: flex;
justify-content: flex-end;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
`

const Counts = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
color: #000000;
justify-content: flex-end;
`
const Up = styled.div`
display: flex;
justify-content: flex-end;
width: 23vh;

`
const Down1 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 50vh;
`
const Down2 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 20vh;
`
const Medium = styled.div`
display: flex;
width: 27vh;
height: 28vw;
`
const Dno = styled.div`
display: flex;
flex-direction: row;
width: 25vh;
`
const {Project1, Team1, Count1} = props
return(
    <Box>
    <Up><Team>{Team1}</Team></Up>
    <Medium></Medium>    
    <Dno>
    <Down1>
        <Project>{Project1}</Project>
    </Down1>
    <Down2>
        <Counts>{Count1}<img src={Chelik}></img></Counts>
    </Down2>
    </Dno>
    </Box>
)



})