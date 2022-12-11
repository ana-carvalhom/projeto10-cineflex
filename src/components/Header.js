import {Link} from "react-router-dom"

import styled from "styled-components";

export default function Header(){
    return (
       
            <Link to="/">
        <HeaderContainer>
        <h1>CINEFLEX</h1>
        </HeaderContainer>
            </Link>
            


        
    )
}

const HeaderContainer = styled.div`
@media (max-width: 768px) {
display: flex;
align-items: center;
justify-content: center;
height: 67px;
background-color: #C3CFD9;
font-family: 'Roboto', sans-serif;
position: fixed;
top: 0;
width: 100vw;
padding: 10px;
box-sizing: border-box;
h1{
    color:#E8833A;
    font-size: 34px;
    font-weight: 400;
    text-align: center;
}
  }





`