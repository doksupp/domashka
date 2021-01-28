import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Dust2 = styled.a`
    display: flex;
    background-color: red;
`


export default React.memo(() => {
    return (
        <Dust2><div>
            <div>
             <Link to="/">Зарегистрироваться</Link>
            </div>
            <div>asdasd</div>
            <a href="/">che-nibud'</a>
        </div></Dust2>
    )
})
