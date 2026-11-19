import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Titulo = styled.h1`
    color: #9a3412;
    margin-bottom: 5px;
`

const Data = styled.p`
    color: #777;
    margin-top: 0;
`

const Texto = styled.div`
    max-width: 700px;
    line-height: 1.6;

    code {
        background-color: #ffedd5;
    }

    pre {
        background-color: #ffedd5;
        padding: 10px;
        overflow-x: auto;
    }
`

export default function Artigo({ title, atualizado, imagem, html }) {
    return (
        <article>
            <GatsbyImage image={getImage(imagem)} alt={title} />
            <Titulo>{title}</Titulo>
            <Data>Atualizado em {atualizado}</Data>
            {/* html gerado pelo markdown */}
            <Texto dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    )
}
