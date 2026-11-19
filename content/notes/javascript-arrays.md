---
title: JavaScript - métodos de array
slug: javascript-arrays
atualizado: 2026-11-17
description: Anotações sobre map, filter e reduce.
imagem: ./js.png
---

Os métodos de array transformam listas sem precisar de um `for` manual.

## Resumo

- `map` devolve um novo array com o resultado de cada item.
- `filter` mantém só os itens que passam no teste.
- `reduce` junta tudo em um único valor.

## Exemplo

```js
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map((n) => n * 2);
```
