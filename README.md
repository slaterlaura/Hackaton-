# Dermage Analytics

Dashboard interativo de análise de recompra e segmentação de clientes da Dermage.

## O que tem aqui

- Taxa de recompra e tempo médio entre compras
- Segmentação de clientes (One-time, Occasional, Regular, Loyal)
- Análise de produtos porta de entrada e jornada de compra
- Sazonalidade e padrões mensais
- Performance por canal e região
- 6 recomendações estratégicas com impacto estimado

## Stack

- React 19 + TypeScript
- Tailwind CSS 4
- Vite
- Recharts
- shadcn/ui

## Rodando localmente

```bash
pnpm install
pnpm run dev
```

Acesse em `http://localhost:3000`

## Build

```bash
pnpm run build
pnpm run preview
```

## Deploy

O projeto usa GitHub Actions para deploy automático no GitHub Pages. Qualquer push na branch `main` dispara o deploy automaticamente.
