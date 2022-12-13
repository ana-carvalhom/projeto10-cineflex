import styled from "styled-components";
import { useState } from "react";

export default function ClientInformationForm(){
    const [clientName, setClientName] = useState({name:"", cpf: ""})

    function formInformation(event) {
        setClientName({...clientName, [event.target.name]: event.target.value})
    }

    return(
        <Client>
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
        </Client>
    )
}

const Client = styled.div`
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