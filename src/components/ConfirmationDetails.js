import styled from "styled-components"
import { Link } from "react-router-dom"

export default function ConfirmationDetails({ticketConfirmation}){
    const {movie, date, time, client, cpf, seats} = ticketConfirmation
    return(
        <ConfirmationScreen>
        <ConfirmationMessage>
            <h2>Pedido feito com sucesso!</h2>
        </ConfirmationMessage>
        <TicketDetails data-test="movie-info" >
        <h3>Filme e sessão</h3>
        <p>{movie}</p>
        <p>{date} - {time}</p>
        </TicketDetails>
        <TicketDetails data-test="seats-info" >
        <h3>Ingressos</h3>
        {seats.map(seat => <p key={seat}>Assento {seat}</p>)}
        
        </TicketDetails>
        <TicketDetails data-test="client-info">
        <h3>Comprador</h3>
        <p>Nome: {client}</p>
        <p>CPF: {cpf}</p>
        </TicketDetails>
        <Link to="/">
        <Back>
            <button data-test="go-home-btn">Voltar para a home</button>
            </Back>
        </Link>
        
        </ConfirmationScreen>
    )
}

const ConfirmationScreen = styled.div`
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    
}

`

const ConfirmationMessage = styled.div`
@media (max-width: 768px){
height: 110px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 67px;
h2{
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #247A6B
}
}
`

const TicketDetails = styled.div`
@media (max-width: 768px){
color: #293845;
font-family: 'Roboto';
margin-bottom: 40px;
h3{
font-weight: 700;
font-size: 24px;
line-height: 28px;
}
p{
font-weight: 400;
font-size: 22px;
line-height: 26px;
}
}
`

const Back = styled.div`
@media (max-width: 768px){
display: flex;
justify-content: center ;
margin: 40px;
margin-bottom: 100px;
button{
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: white;

}

}
`