# LawWebsite NEXTJS ⚖️

Um site institucional escritórios de advocacia, desenvolvido com Next.js, TypeScript e Tailwind CSS. Este projeto foi criado para aprofundar conhecimentos em desenvolvimento web fullstack, focando em boas práticas, performance, acessibilidade e arquitetura escalável.

## ✨ Principais Conceitos Aplicados
- Next.js (App Router): Estrutura de rotas modernas, server-side rendering e otimização automática.
- TypeScript: Tipagem estática para maior robustez, segurança e produtividade no desenvolvimento.
- Tailwind CSS: Estilização utilitária, responsiva e altamente customizável.
- Componentização: Separação clara de responsabilidades com componentes reutilizáveis para seções como header, footer, cards, depoimentos, etc.
- Boas Práticas de Acessibilidade: Uso de semântica HTML adequada e foco em experiência do usuário.
- Organização de Assets: Imagens, ícones e recursos visuais organizados para fácil manutenção.
- Deploy Facilitado: Pronto para ser hospedado em plataformas como Vercel.

## 🏗️ Estrutura do Projeto
```bash
src/
  app/            # Páginas e rotas (Next.js App Router)
    home/         # Seções da página inicial (hero, serviços, depoimentos, etc)
    contato/      # Página de contato
    layout.tsx    # Layout global
    globals.css   # Estilos globais
  components/     # Componentes reutilizáveis (header, footer, cards, etc)
  assets/         # Imagens, ícones e recursos visuais
```

## 🚀 Como rodar o projeto
```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```