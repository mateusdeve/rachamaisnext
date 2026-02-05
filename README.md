# RachaMais - Landing Page

Landing page do RachaMais desenvolvida com Next.js 16, React 19 e Tailwind CSS v4.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Google Fonts** - Manrope e Material Symbols

## 📁 Estrutura do Projeto

```
rachamaisnext/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Página inicial
│   ├── globals.css             # Estilos globais e configuração Tailwind
│   ├── politica-de-privacidade/ # Página de políticas de privacidade
│   └── termos-de-uso/          # Página de termos de uso
├── components/                 # Componentes React
│   ├── TopNavBar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── HighlightBanner.tsx
│   ├── AppScreenshots.tsx
│   ├── SocialProof.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── public/                     # Arquivos estáticos
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 📄 Páginas

- **/** - Landing page principal
- **/politica-de-privacidade** - Política de privacidade
- **/termos-de-uso** - Termos de uso

## 🎨 Design

O design foi mantido fielmente do HTML original, incluindo:
- Cores personalizadas (primary: #2ecc70)
- Tipografia Manrope
- Ícones Material Symbols
- Modo escuro/claro
- Layout responsivo

## 📝 Componentes

Todos os componentes foram criados como componentes React separados para facilitar manutenção e reutilização.
