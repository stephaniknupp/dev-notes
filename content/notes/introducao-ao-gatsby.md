---
title: Introdução ao Gatsby
slug: introducao-ao-gatsby
atualizado: 2026-11-12
description: O que é o Gatsby e como ele gera páginas a partir de arquivos Markdown.
imagem: ./gatsby.png
---

O Gatsby é um framework baseado em React que gera sites estáticos. A página é montada na hora do build e o resultado são arquivos HTML, CSS e JS prontos para uma CDN.

## Conceitos principais

- Cada arquivo em `src/pages` vira uma rota.
- Os dados (arquivos, Markdown, imagens) ficam disponíveis em uma camada GraphQL.
- Templates são componentes React que recebem os dados de cada página.
- Plugins adicionam recursos, como otimização de imagens e sitemap.

## Páginas a partir de Markdown

No `gatsby-node.js` a função `createPages` busca os arquivos com a query do `markdownRemark` e chama `createPage` para cada um, usando um template.
