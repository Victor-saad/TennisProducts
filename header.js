import React from "react";
import styled from "styled-components";
import LoginForm from "./login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HeaderContainer = styled.section`
    background-color: black;
    width: 100%;
    height: 104px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const HeaderLogo = styled.div`
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    font-size: 1.4rem;
    `
const HeaderSearchingBar = styled.input`
    display: flex;
    flex-direction: row;
    background-Color: #FFFFFF;
    height: 40px;
    width: 40%;
    padding-left: 15px;
    font-size: 16px;
    `
const HeaderCustomerServiceAndLogin = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    `
const HeaderContato = styled.a`
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    font-size: 1.4rem;
    
        &:hover {
            cursor: pointer;
        }
    `
const HeaderLogin = styled.a`    
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    font-size: 1.4rem;

    &:hover {
        cursor: pointer;
    }
`


function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo>Logo</HeaderLogo>
            <HeaderSearchingBar placeholder="Digite aqui o que está procurando"></HeaderSearchingBar>
            <HeaderCustomerServiceAndLogin>
                <Link to='/contato'>
                    <HeaderContato>Contato</HeaderContato>
                </Link>
                <Link to="/login">
                    <HeaderLogin>Login</HeaderLogin>
                </Link>
            </HeaderCustomerServiceAndLogin>
        </HeaderContainer>
    )
}

export default Header;