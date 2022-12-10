import styled from "styled-components";

export default function Header(){
    return (
        <HeaderContainer>
            <h1>CINEFLEX</h1>
        </HeaderContainer>
        
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
width: 100%;
h1{
    color:#E8833A;
    font-size: 34px;
    font-weight: 400;
}
  }





`