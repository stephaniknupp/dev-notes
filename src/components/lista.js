import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// cards em grade, cada nota com imagem, titulo e data
const Grade = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
`

const Card = styled.div`
    background-color: white;
    border: 1px solid #fdba74;
    border-radius: 8px;
    overflow: hidden;
`

const Info = styled.div`
    padding: 10px;

    a {
        color: #9a3412;
        font-weight: bold;
        text-decoration: none;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 13px;
        color: #777;
    }
`

export default function Lista({ nodes }) {
    return (
        <Grade>
            {nodes.map(node => (
                <Card key={node.id}>
                    <GatsbyImage
                        image={getImage(node.frontmatter.imagem)}
                        alt={node.frontmatter.title}
                    />
                    <Info>
                        <Link to={"/notes/" + node.frontmatter.slug}>
                            {node.frontmatter.title}
                        </Link>
                        <span>atualizado em {node.frontmatter.atualizado}</span>
                    </Info>
                </Card>
            ))}
        </Grade>
    )
}
