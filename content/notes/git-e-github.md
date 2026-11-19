---
title: Git e GitHub
slug: git-e-github
atualizado: 2026-11-08
description: Comandos básicos do Git para versionar um projeto e enviar para o GitHub.
imagem: ./git.png
---

O Git controla as versões do código e o GitHub hospeda os repositórios na nuvem.

## Fluxo do dia a dia

- `git status` mostra o que mudou.
- `git add .` prepara as mudanças.
- `git commit -m "mensagem"` registra o commit.
- `git push origin main` envia para o GitHub.

## Observação

Um push na branch `main` dispara a pipeline de CI/CD e atualiza o site.
