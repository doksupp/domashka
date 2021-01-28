import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logotip from './../img/kartinka.svg';
import Chelik from './../img/chelik.svg';
import Card from './../components/card.js'

const Main = styled.div`
    display: flex;
    background-color: #EDF0F5;
    align-items:center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
`
const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 60vw;
    height: 90vh;


`

const Data = [
    {
        Project : 'project',
        Team : 'Prekolisti',
        Count : '5',

    } ,
    {
        Project : 'heroject',
        Team : 'Neudachniki',
        Count : '21',
    },
    
    {
        Project : 'loles',
        Team : 'krasavi',
        Count : '2',
    },
    {
        Project : 'obviuos',
        Team : 'lucky',
        Count : '77',
    },
    {
        Project : 'projectX',
        Team : 'varvari',
        Count : '32',
    },
    {
        Project : 'spaceX',
        Team : 'Oratori',
        Count : '1',
    },
    {
        Project : 'Carman',
        Team : 'Logika',
        Count : '1',
    },
    {
        Project : 'Apollo',
        Team : 'Aliens',
        Count : '0',
    },
    {
        Project : 'Proper',
        Team : 'Twelve',
        Count : '12',
    }
]

export default (()=> {
    return( <div><Main>
        <div style={{fontFamily:'CenturyGothic', fontStyle:'normal', fontWeight:'bold', fontSize:'18px', lineHeight:'22px', color:'#03C1CF', marginBottom: '700px' }}>Teams:</div>
        
            <MainBox>{Data.map ((item)=> {return(<Card Project1={item.Project} Team1={item.Team} Count1={item.Count}></Card>)})}</MainBox>
          
            </Main>
            
            </div>
            
    )
    
    
    
    
    
    })