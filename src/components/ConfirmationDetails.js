import styled from "styled-components"

export default function ConfirmationDetails(){
    return(
        <ConfirmationScreen>
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
        <Back>
            <button>Voltar para a home</button>
            </Back>
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