import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Lista from "../components/lista";
import Seo from "../components/seo";

export default function IndexPage({ data }) {
    return (
        <Layout>
            <h1>Meus últimos aprendizados</h1>
            <p>Aqui eu anoto o que aprendi em cada aula, curso ou estudo. Para revisar depois. </p>
            <Lista nodes={data.allMarkdownRemark.nodes} />
        </Layout>
    )
}

export const Head = () => (
    <Seo
        title="Início"
        description="Lista das notas de estudo, com imagem, título e a data da última atualização."
    />
)

// no máximo as 20 mais recentes
export const query = graphql`
    query ListaNotas {
        allMarkdownRemark(sort: { frontmatter: { atualizado: DESC } }, limit: 20) {
            nodes {
                id
                frontmatter {
                    title
                    slug
                    atualizado(formatString: "DD/MM/YYYY")
                    imagem {
                        childImageSharp {
                            gatsbyImageData(width: 400, height: 220)
                        }
                    }
                }
            }
        }
    }
`
