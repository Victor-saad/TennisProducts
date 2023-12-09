import React from "react";
import LoginForm, { ButtonForm, Form, FormContainers, FormH1, InputForm, TituloForm } from "./login";

function Contato() {
    return (
        <Form>
            <FormH1>Contato</FormH1>
            <FormContainers>
                <TituloForm>Nome Completo:</TituloForm>
                <InputForm type="text" placeholder="Digite aqui o seu nome completo."></InputForm>
            
                <TituloForm>E-mail:</TituloForm>
                <InputForm type="email" placeholder="Digite aqui o seu e=mail."></InputForm>
            
                <TituloForm>Fone:</TituloForm>
                <InputForm type="tel" placeholder="Digite aqui o seu fone de contato."></InputForm>
            
                <TituloForm>Comentário:</TituloForm>
                <InputForm type="text" placeholder="Digite aqui o seu comentário."></InputForm>
            
                <ButtonForm>Enviar</ButtonForm>
            </FormContainers>
        </Form>

    )
}

export default Contato;