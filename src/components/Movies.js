import styled from "styled-components"



export default function Movies({posterURL}){
    return (
    <MovieContainer>
        <MovieCover src={posterURL} alt="movie poster"/>
        </MovieContainer>
    )
}

const MovieContainer = styled.div `
@media (max-width: 768px){
margin: 20px;
background-color: white;
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;}


`

const MovieCover = styled.img`
@media (max-width: 768px){
width: 129px;
height: 193px;
}

`