# Døla Takst – Nettside

Velkommen til kildekoden for **Døla Takst** sin offisielle nettside. Dette prosjektet er utviklet med fokus på tilgjengelighet, profesjonell utforming og god brukeropplevelse – med moderne teknologier som **React**, **Vite**, **Tailwind CSS** og **Framer Motion**.

## 🚀 Teknologier brukt

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

## 🧱 Prosjektstruktur
src/
├── assets/ # Bilder og grafikk
├── components/ # Gjenbrukbare komponenter
├── layout/ # Felles layout (Navbar, Footer, animasjoner)
├── pages/ # Sidekomponenter (f.eks. Hjem, Kontakt, Tjenester)
├── router/ # React Router setup
├── styles/ # Globale CSS-filer
└── main.tsx # Entry point

## 📦 Installasjon

1. **Klon repoet:**

```bash
git clone https://github.com/din-bruker/dola-takst.git
cd dola-takst

npm install

npm run dev

```

🧭 Navigasjon og routing
Siden bruker React Router med createBrowserRouter. Alle sider er strukturert under pages/, og rutes gjennom Layout.tsx, som inkluderer animasjoner ved sideskift.

✨ Funksjonalitet
Responsivt design for mobil, nettbrett og desktop

Dynamiske animasjoner ved scrolling og sideskifte

Lasting av bilder med prioritet og visuell fallback (smooth loading)

Klar struktur for videre utvidelse av sider eller tjenester



