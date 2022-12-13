import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ClientInformationForm({seatSelected, setTicketConfirmation, movieSession}){
    const [clientName, setClientName] = useState({name:"", cpf: ""})
    const navigate = useNavigate()

    function formInformation(event) {
        const {name, value} = event.target
        setClientName({...clientName, [name]: value})
    }

    function ticketPurchase(event){
        event.preventDefault()

            const body = {
                ids: seatSelected.map(seat => seat.id),
                ...clientName
            }
        
            console.log(body)


            const purchaseInfo = {
                movie: movieSession.movie.title,
                date: movieSession.day.date,
                seats:seatSelected.map(seat => seat.name),
                time: movieSession.name,
                client:clientName.name,
                cpf: clientName.cpf,

            }

           const promise =  axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
           promise.then(ans => 
            {navigate("/sucesso")
            setTicketConfirmation(purchaseInfo)
            })
           promise.catch(err => alert(err.response.data))
    }


    return(
        <Client onSubmit={ticketPurchase}>
            <ClientInfo>
                <p>Nome do Comprador:</p>
                <input 
                name="name"
                type="text"
                placeholder="Digite seu nome..."
                value={clientName.name}
                onChange={formInformation}
                />
            </ClientInfo>
            <ClientInfo>
                <p>CPF do Comprador:</p>
                <input 
                name="cpf"
                type="number"
                placeholder="Digite seu cpf..."
                value={clientName.cpf}
                onChange={formInformation}
                />
            </ClientInfo>
            <Confirm>
            <button type="submit">Reservar assento(s)</button>
            </Confirm>
        </Client>
    )
}

const Client = styled.form`
@media (max-width: 768px){
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
}
input{
width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
margin-bottom: 20px;
padding: 3px;
box-sizing: border-box;
}
}
`
const ClientInfo = styled.div`
@media (max-width: 768px){}
`

const Confirm = styled.div`
@media (max-width: 768px){
display: flex;
justify-content: center ;
margin: 40px;
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
