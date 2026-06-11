# PoliTOcean — Sito ufficiale

Sito web del team **PoliTOcean**, team studentesco del **Politecnico di Torino**
che progetta e costruisce ROV (Remotely Operated Vehicles) subacquei.

> _Individually we are one drop, together we are an Ocean._

🌐 **Live:** [politocean.polito.it](https://politocean.polito.it)

---

## Stack tecnologico

| Ambito        | Tecnologia |
|---------------|------------|
| Framework     | [Next.js 16](https://nextjs.org) (App Router) |
| UI            | [React 19](https://react.dev) |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com) + CSS custom (`globals.css`) |
| 3D            | [Three.js](https://threejs.org) via [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) |
| Animazioni    | [Framer Motion](https://www.framer.com/motion/) + canvas custom (transizioni a onde) |
| Transizioni   | [next-transition-router](https://github.com/ismamz/next-transition-router) |
| Componenti    | [@headlessui/react](https://headlessui.com), [@radix-ui](https://www.radix-ui.com) |

---

## Requisiti

- **Node.js** 18.18+ (consigliato LTS più recente)
- **npm** (o yarn/pnpm)

## Avvio in locale

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).
Il sito si ricarica automaticamente a ogni modifica (Fast Refresh).

### Script disponibili

| Comando         | Descrizione |
|-----------------|-------------|
| `npm run dev`   | Server di sviluppo con hot-reload |
| `npm run build` | Build di produzione ottimizzata |
| `npm run start` | Avvia la build di produzione |
| `npm run lint`  | Esegue ESLint |

---

## Struttura del progetto

```
src/app/
├── layout.js              # Layout root: Header, Footer, ClientWrapper
├── page.js                # Home
├── globals.css            # Tema (colori, font, utility), animazioni
├── Header.jsx             # Navbar + menu mobile (highlight pagina attiva)
├── WaveOverlay.jsx        # Transizione a onde su canvas tra le pagine
├── ClientWrapper.jsx      # Wrapper con TransitionRouter
├── ScrollToTopButton.jsx
│
├── home/                  # Home page e sezioni
├── prototypes/            # Lista ROV + pagina dettaglio con visualizzatore 3D
│   └── [id]/              #   rotta dinamica per singolo prototipo
├── about-us/             # Chi siamo, timeline competizioni, organigramma
├── sponsors/             # Sponsor
└── contact/              # Contatti e form

public/
├── Fonts/                 # Font Aileron (self-hosted)
├── *Assets/               # Immagini e media per pagina
└── SocialLinksIcons/      # Icone social (footer)
```

I dati strutturati (prototipi, sponsor, organigramma) vivono in file
`data/` dentro le rispettive cartelle, separati dai componenti.

---

## Tema e stile

I token di design (colori brand, raggi, font) sono definiti come variabili in
[`src/app/globals.css`](src/app/globals.css) ed estesi in
[`tailwind.config.mjs`](tailwind.config.mjs):

- **Colori:** `sea-light`, `ocean-dark`, `teal`, `blue-deep`, `night`
- **Font:** Aileron (self-hosted) + Poppins (Google Fonts)
- Utility custom: `.drop-card`, `.section-title`, `.hero-title`, `.btn-outline-*`,
  effetti onda di header/footer, bolle animate, ecc.

---

## Note di sviluppo

- **Test su dispositivi reali (ngrok / LAN):** Next.js blocca le risorse di dev
  da host esterni. Gli host consentiti sono in `allowedDevOrigins` dentro
  [`next.config.mjs`](next.config.mjs) (LAN + wildcard `*.ngrok*`). Vale solo in
  `next dev`, ignorato in produzione.
- **Asset case-sensitive:** i percorsi degli asset in `public/` sono
  case-sensitive sul server Linux. Usa il nome file esatto (anche maiuscole)
  per evitare immagini mancanti in produzione.

---

## Deploy

Il deploy è automatico tramite **GitHub Actions**
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): a ogni push su
`master`, una action si collega via SSH al server e aggiorna il sito.

```bash
git pull
npm install
npm run build
pm2 reload politocean-web
```

Secrets richiesti (Settings → Secrets and variables → Actions):
`SERVER_IP`, `SERVER_USER`, `SSH_PRIVATE_KEY`.

---

## Contribuire

1. Crea un branch dalla `master`.
2. Sviluppa e verifica con `npm run build` (deve compilare senza errori).
3. Apri una Pull Request.

---

<sub>Realizzato con 💙 dagli studenti del team PoliTOcean — Politecnico di Torino.</sub>
