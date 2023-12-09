import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    padding: 30px;
`;

export const FormContainers = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Arial', sans-serif;
    padding: 10px 0px;
`;

export const FormH1 = styled.h1`
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const TituloForm = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: capitalize;
    text-align: left;
    `

export const InputForm = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 15px;
    `;
    
export const ButtonForm = styled.button`
        width: 150px;
        height: 40px;
        border-radius: 8px;
        font-weight: bold;
        background-color: #F0F0F0;
        margin: 15px 0;
        font-size: 1rem;

    &:hover {
        background-color: #00f0f0;
        font-weight: 800;
        cursor: po
    }
    `

const NotRegistered = styled.p`
    font-size: 16px;
`

const AncorNotRegistered = styled.a`
    &:hover {
        cursor: pointer;
    }
`

function LoginForm() {
    return (
            <Form id="formLogin">
                <FormH1>LOGIN</FormH1>
                
                <FormContainers>
                    <FormContainer>
                        <TituloForm>Endereço de E-mail:</TituloForm>
                        <InputForm type='email' name='Endereço_de_E-mail' placeholder='Digite aqui o seu endereço de e-mail.'/>
                    </FormContainer>
                    <FormContainer>
                        <TituloForm>Senha:</TituloForm>
                        <InputForm type='password' name='Senha_do_Usuário' placeholder='Digite aqui a sua senha.'/>
                    </FormContainer>

                <ButtonForm type='submit'>Enviar</ButtonForm>

                <NotRegistered href="http://localhost:3000/adminregistration">Não possui cadastro? <AncorNotRegistered>Clique Aqui</AncorNotRegistered></NotRegistered>
                
                </FormContainers>
            </Form>
    )
}

export default LoginForm