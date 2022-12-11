import styled from "styled-components"

export default function ConfirmationDetails(){
    return(
        <>
        <ConfirmationMessage>
            <h2>Pedido feito com sucesso!</h2>
        </ConfirmationMessage>
        <TicketDetails>
        <h3>Filme e sessão</h3>
        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
        </TicketDetails>
        <TicketDetails>
        <h3>Ingressos</h3>
        <p>Assento 15</p>
        <p>Assento 16</p>
        </TicketDetails>
        <TicketDetails>
        <h3>Comprador</h3>
        <p>Nome: João da Silva Sauro</p>
        <p>CPF: 111.111.111.-11</p>
        </TicketDetails>
        </>
    )
}

const ConfirmationMessage = styled.div`
@media (max-width: 768px){
height: 110px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
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
background-color: red;
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