import React from "react";
import styled from "styled-components";
import "./layout.css";
import Header from "./header";
import Footer from "./footer";

// menu lateral na esquerda e conteudo na direita
const Pagina = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    min-height: 100vh;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const Lateral = styled.aside`
    background-color: #9a3412;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 700px) {
        padding: 12px 20px;
    }
`

const Conteudo = styled.main`
    padding: 30px;

    @media (max-width: 700px) {
        padding: 15px;
    }
`

export default function Layout({children}) { //desestruturação do objeto props
    return (
        <Pagina>
            <Lateral>
                <Header />
                <Footer copyRightYear={2026} />
            </Lateral>
            <Conteudo>
                {children}
            </Conteudo>
        </Pagina>
    )
}
