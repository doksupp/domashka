import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logotip from './../img/kartinka.svg';


const Main = styled.div`
    display: flex;
    background-color: #EDF0F5;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100vw;
    height: 72vh;
`

const Left = styled.div`
display: flex;
flex-direction: column;

justify-content: center;
`
const Right = styled.div`
display: flex;

`
const We = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;
display: flex;
align-items: flex-end;
color: #03C1CF;
`

const Words = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;
margin-left: 15px;
margin-top: 15px;
`


export default React.memo(() => {
    return (
        <div style={{backgroundColor:'#EDF0F5'}}><Main>
            <Left>
                <We>We:</We>
                <Words>
                <div>Makes solutions</div>
                <div style={{opacity:'0.8'}}>Trains new professionals</div>
                <div style={{opacity:'0.6'}}>Conducts events</div>
                <div style={{opacity:'0.4'}}>Resolves problems</div>
                <div style={{opacity:'0.2'}}>and more</div>
                </Words>
            </Left>
            <Right><img src={Logotip} /></Right>
            
        </Main>
        <div style={{fontFamily:'CenturyGothic', fontStyle:'normal', fontWeight:'bold', fontSize:'36px', lineHeight:'44px', textAlign:'center', color:'#03C1CF' }}>WE NEED CONTENT!!!!!!</div>
        </div>
    )
})
