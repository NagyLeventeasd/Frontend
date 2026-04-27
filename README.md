# 🎰Grow Casino🎰

## A projektről📋

>A GrowCasino egy online szerencsejáték oldal ahol különféle játékokon probálhatsz szerencsét.

## 🫱🏻‍🫲🏻Készítette

  - Mirkó Péter
  - Nagy Levente
---

### Fejlesztési környezet
- HTML5
- CSS3
- Vanilla Javascript

## Backend

A backend Node.js alapú, Express keretrendszerrel, és MySQL adatbázissal működik. Feladata kommunikációs hidat létesíteni a frontend (játék + weboldal) és az adatbázis között.

- [GitHub repo](https://github.com/p3Pe9/growCasino_Backend1)

## Frontend

A frontend html, natív css és javascript alapú webes alkalmazás. Feladata kommunikációs hidat létesíteni a felhasználó és a backend között.

### 💻Projekt struktúrája
### File struktúra

```
GrowCasino FRONTEND/
├── assets/
│   ├── bettipusok/
│   └── kepek/
├── context/
│   └── AuthContext.jsx
├── elemek/
│   ├── Card.jsx
│   ├── Ellenorzes.jsx
│   ├── FelsoSav.jsx
│   ├── Gombe.jsx
│   ├── InputMezoEjs.jsx
│   ├── KeresoInputMj.jsx
│   ├── Navbar.jsx
│   ├── ProfileG.jsx
│   └── ProfileInput.jsx
├── kinezetek/
│   ├── adminC.css
│   ├── bejelentkezesC.css
│   ├── depositC.css
│   ├── felsoSavC.css
│   ├── homeC.css
│   ├── jelenlegNemElerhetoC.css
│   ├── olaloNavBarTypShiiC.css
│   ├── profileC.css
│   └── regisztracioC.css
├── oldalak/
│   ├── AdminO.jsx
│   ├── BejelentkezesO.jsx
│   ├── DepositO.jsx
│   ├── GameO.jsx
│   ├── HomeO.jsx
│   ├── NemElerhetoO.jsx
│   ├── ProfilO.jsx
│   ├── RegisztracioO.jsx
│   └── test.jsx
├── api.js
├── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
└── netlify.toml
```
