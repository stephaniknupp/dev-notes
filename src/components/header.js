import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Titulo = styled.h2`
    margin: 0 0 5px 0;
`

const Texto = styled.p`
    margin: 0 0 20px 0;
    font-size: 14px;
    color: #fed7aa;
`

const Menu = styled(Link)`
    display: block;
    color: white;
    text-decoration: none;
    padding: 8px 0;
    border-bottom: 1px solid #c2410c;

    &:hover {
        color: #fed7aa;
    }
`

export default function Header() {
    return (
        <div>
            <Titulo>Dev Notes</Titulo>
            <Texto>meus estudos de programação</Texto>
            <nav>
                <Menu to="/">Início</Menu>
            </nav>
        </div>
    )
}
