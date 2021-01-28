import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logotip from './../img/kartinka.svg';
import Chelik from './../img/chelik.svg';

const Main = styled.div`
    display: flex;
    background-color: #EDF0F5;
    align-items:center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #50B9C0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    width: 200px;
    height: 200px;
`
const Center = styled.div`
display: flex;
background-color:#EDF0F5;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-evenly;
width: 55vw;
    height: 85vh;
`


const Project = styled.div`
display: flex;
justify-content: flex-end;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
margin-top: 5px;
margin-right: 12px;
`

const ITsea = styled.div`

font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
margin-left: 20px;
`

const Zriteli = styled.div`

font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
color: #000000;
justify-content: flex-end;
margin-left: 46px;
`
const Down = styled.div`

font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
margin-top: 150px;
`

export default (()=> {
    return( <div><Main>
        <div style={{fontFamily:'CenturyGothic', fontStyle:'normal', fontWeight:'bold', fontSize:'18px', lineHeight:'22px', color:'#03C1CF', marginBottom:'700px', marginLeft:'' }}>Projects</div>
        <Center>
            <Box  style={{backgroundImage:'url("https://i.imgur.com/DkNl5j9.png")', backgroundColor:'white'}}> 
            <Project>ITSea</Project>
            <Down><ITsea>Namtek</ITsea>
            <Zriteli>7<img src={Chelik}></img></Zriteli></Down>
            </Box>
            <Box style={{backgroundColor:'#86E9FF'}}>
            <Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down>
            </Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
            <Box><Project>Team</Project>
            <Down><ITsea>ProjectName</ITsea>
            <Zriteli>5<img src={Chelik}></img></Zriteli></Down></Box>
        </Center>
            </Main>
            
            </div>
            
    )
    
    
    
    
    
    })