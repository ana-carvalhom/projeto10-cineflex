import styled from "styled-components"
import harryPotter from "../assets/download.jpeg"


export default function Movies(){
    return (
    <MovieContainer>
        <MovieCover src={harryPotter} alt=""/>
        </MovieContainer>
    )
}

const MovieContainer = styled.div `
margin: 20px;
background-color: white;
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
`

const MovieCover = styled.img`
width: 129px;
height: 193px;
`