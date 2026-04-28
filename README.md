# 🎰Grow Casino🎰


### 📋A projektről📋

>A GrowCasino egy online szerencsejáték oldal ahol különféle játékokon probálhatsz szerencsét.




## Backend

A backend Node.js alapú, Express keretrendszerrel, és MySQL adatbázissal működik. Feladata kommunikációs hidat létesíteni a frontend (játék + weboldal) és az adatbázis között.

- [GitHub repo](https://github.com/p3Pe9/growCasino_Backend1)

---
## Frontend
A frontend html, natív css és javascript alapú webes alkalmazás. Feladata kommunikációs hidat létesíteni a felhasználó és a backend között.
### Design
![Design](https://i.imgur.com/4A7MBAl.png)
>[Figma terv](https://www.figma.com/design/HgLCr2Bd4ajO7seeNOVlfG/Untitled?node-id=0-1&t=s4pPuiUiDq4fyCZ1-1)

## Oldalak

1. ####  `index.html`

    Főoldal: tartalmazza a projekt célját és a fejlesztőket valamit ki mit csinált a projektben. 
    
    | Fájlnév         | Típus       | Leírás                          |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `index.css`     | ![CSS](https://img.shields.io/badge/-CSS-blue)          | Főoldalhoz kapcsolódó stíluslap                   |
    | `index.js`      | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | A `index.html` (főoldal) működéséért felelős JavaScript fájl. Biztosítja az interaktív felhasználói élményt a főoldalon.             |
    | `gameindex.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gombok működése               |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `ebed.js`       | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Húsvéti tojás       |

    ![index](https://i.snipboard.io/G7VupQ.jpg)

2. ####  `forum.html`

    Fórum: kártyákba szedi a fórumposztokat és időrendben kirajzolja, keresni lehet a posztok között valamint bejelentkezés után új posztot lehet írni.

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `forum.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | A fórum főoldalának stílusa. Meghatározza a posztkártyák, keresősáv és egyéb vizuális elemek kinézetét. |
    | `forum.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | A `forum.html` oldal logikáját vezérlő JavaScript fájl. Kezeli a fórumposztok betöltését és létrehozását. Kommunikál a backenddel (API-hívások), frissíti a DOM-ot, és biztosítja az interaktív fórumélményt. |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![fórum](https://i.snipboard.io/bg7Xiz.jpg)

3. #### `post.html`

    Egy poszt: egy adott fórum bejegyzés részletei és kommentek alá, bejelentkezés után lehet válaszolni a bejegyzéshez.

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `post.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | Egyedi posztoldalhoz tartozó stílus. Formázza a poszt tartalmát, kommenteket, interakciós elemeket. |
    | `post.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | Egy adott fórumposzt oldalához tartozó JavaScript fájl. Betölti a kiválasztott poszt tartalmát és a hozzá tartozó kommenteket, kezeli a hozzászólások létrehozását, törlését, valamint dinamikusan frissíti az oldal tartalmát a felhasználói műveletek alapján. |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![post](https://i.snipboard.io/pQC1oA.jpg)

4. ####  `csatlakozz.html`

    Csatlakozz: navigációs felület, kiválaszthatja a felhasználó hogy bejelentkezni vagy regisztrálni szeretne.

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `csatlakozz.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | A `csatlakozz.html` oldalhoz tartozó stíluslap, amely a bejelentkezés és regisztráció választófelületének megjelenését szabályozza. |
    | `csatlakozz.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | A `csatlakozz.html` oldal működéséért felelős JavaScript fájl. Kezeli a bejelentkezés és regisztráció gombok eseményeit, navigációt indíthat a megfelelő oldalakra |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![csatlakozz](https://i.snipboard.io/VWMx6J.jpg)

5. #### `reg.html`

    Regisztráció: regisztrációs űrlap

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `register.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | A `reg.html` (regisztrációs oldal) stíluslapja. Gondoskodik a regisztrációs űrlap elrendezéséről, a mezők és gombok megjelenéséről, valamint biztosítja a felhasználóbarát, egységes vizuális megjelenést. |
    | `register.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | A regisztrációs oldal működéséért felelős JavaScript fájl. Ellenőrzi az űrlap kitöltését (pl. jelszó egyezés, kötelező mezők), elküldi az adatokat a backendnek, és kezeli a sikeres vagy sikertelen regisztráció visszajelzéseit. |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![regisztráció](https://i.snipboard.io/eWzSp8.jpg)

6. #### `login.html`

    Bejelentkezés: bejelentkezés űrlap

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `login.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | A bejelentkezési oldal stíluslapja. Formázza az űrlapot, bemeneti mezőket és a gombokat. |
    | `login.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | A bejelentkezési folyamat logikáját kezeli. Ellenőrzi az űrlap mezőit, elküldi a hitelesítési kérelmet a backendnek, és kezeli a visszajelzéseket. |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![bejelentkezés](https://i.snipboard.io/Vwg7mf.jpg)

7. #### `profile.html`

    Profil: saját vagy más személy profiljának megtekintése, profiladatok (felhasználónév, email, státusz) barátok megtekintése valamint más felhasználóknál bejelentkezés után barátkérelem küldése vagy baráti kapcsolat törléseilletve saját profilnál barátkérelmek megtekintése és felhasználói adatok (felhasználónév, jelszó) változtatása.

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `profile.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | A felhasználói profiloldal stíluslapja. Meghatározza a felhasználói adatok megjelenését, az elrendezést, és gondoskodik az esztétikus, jól tagolt profilnézetről. |
    | `profile.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | A profiloldal működéséért felelős fájl. Betölti a felhasználó adatait, kezeli azok szerkesztését, és kommunikál a backenddel. |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![profil](https://i.snipboard.io/6T71Uz.jpg)

8. #### `newpost.html`

    Új poszt: új fórumbejegyzés írásá

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `newpost.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | A "új fórumposzt" oldal stíluslapja. Az űrlap, szövegmezők és a gombok kinézetét szabályozza, letisztult posztírási élményt biztosítva. |
    | `newpost.js` | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) | Lehetővé teszi új fórumposzt létrehozását. Kezeli az űrlapadatokat és beküldi a backend felé. |
    | `theme.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Sötét és világos mód                |
    | `game.js`  | ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  | Játékletöltés gomb működése               |

    ![új poszt](https://i.snipboard.io/15JUWs.jpg)

9. #### `csj.html`

    Húsvéti tojás

    | Fájlnév         | Típus       | Leírás                           |
    |-----------------|-------------|--------------------------------------------------|
    | `main.css`      | ![CSS](https://img.shields.io/badge/-CSS-blue)         | Általános stíluslap                              |
    | `csj.css`  | ![CSS](https://img.shields.io/badge/-CSS-blue)  | Húsvéti tojás |

---
## 📄Projekt struktúrája📄
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

## 🔮További fejlesztések🔮


- Új játékok (Roulette, BlackJack, Bacaratta, és különböző Slot játékok)
- Withdraw rendszer
- Tranzakció history
- Jackpot rendszer
- Admin panel

---
## 💻Fejlesztési környezet💻
- Vanilla Javascript
- HTML5
- CSS3


## 🖥Használt eszközök🖥

- [FontAwesome](https://fontawesome.com)
- [W3Schools](https://www.w3schools.com)
- [ChatGPT](https://chatgpt.com)
- [VS code](https://code.visualstudio.com)
- [GitHub](https://github.com/)
- [Netlify](https://www.netlify.com)
- [Figma](https://www.figma.com)


## 🤝🏻Készítette🤝🏻

  - Mirkó Péter
  - Nagy Levente
---

### 💾Teszt💾

Manuálisan lett tesztelve.

#### Tesztfelhasználók
<details>
  <summary>user</summary>

- email: teszt@teszt.hu
- jelszó: 12345678

</details>

<details>
  <summary>admin</summary>

- email: admin@teszt.hu
- jelszó: 12345678

</details>

---
