const path = require("path")

// gera uma rota /notes/slug pra cada arquivo markdown
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const template = path.resolve("./src/templates/nota.js")

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: "/notes/" + node.frontmatter.slug,
      component: template,
      context: {
        id: node.id, // a query da pagina filtra por esse id
      },
    })
  })
}
