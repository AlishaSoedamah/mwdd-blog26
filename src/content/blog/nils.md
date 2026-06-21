---
title: 'On Creativity on the Web - Nils Binder'
description: 'Lorem ipsum dolor sit amet'
pubDate: '4 Mar 2026'
heroImage: '../../assets/a.jpg'
---

Nils Binder werkt bij 9elements Hij is UX designer en heeft onder andere gewerkt voor FC Schalke 04 waar hij het UX design van de app heeft gemaakt zijn grootste project tot nu toe.

Hij heeft ook gewerkt aan een intern project bij de OECD waar hij nog steeds aan betrokken is.

Hij gaf aan dat CSS Day 2023 voor hem wat saai voelde.


### Van Photoshop naar Figma

Vroeger werden websites ontworpen in Photoshop. Tegenwoordig gebruiken we vooral Figma.

Figma sluit beter aan op CSS: layout systemen, variabelen en design tokens zijn direct vergelijkbaar met hoe CSS werkt.

Maar ondanks deze betere tools rijst de vraag: wat voor soort websites ontwerpen we eigenlijk?


### Tools vs creativiteit

Tools zoals:

- ChatGPT
- Figma
- Tailwind
- React

zijn krachtig, maar kunnen er ook voor zorgen dat veel websites op elkaar gaan lijken.

Het probleem is niet de technologie zelf, maar hoe we ermee ontwerpen.

> In plaats van naar pixels te kijken, moeten we naar layout kijken.

### Layout-first denken

In plaats van pixel perfect ontwerpen, moet je denken in structuren en verhoudingen.

Voorbeeld:

```html
.fancy-text {
  display: grid;
  grid-template-columns: 2fr 3fr auto 1fr;
}

h1 {
  grid-column: 2 / 4;
}

p {
  grid-column: 3 / 4;
}
```

Hier zie je dat layout belangrijker wordt dan exacte positionering.


### R26 website experiment

De website van R26
https://r26.ruhr/

gebruikt geen video, maar een image based script.

Dit script bestaat uit 31 afbeeldingen die samen een soort flipbook-animatie vormen.

```css
animation: stop-motion 3s steps(31, end) infinite;
```


### CSS Grid & Subgrid

Met subgrid kun je een grid binnen een grid laten aansluiten op de parent grid, waardoor complexere en consistentere layouts mogelijk worden.

Meer informatie:
https://9elements.com/blog/building-a-multi-stage-timetable-with-modern-css-using-grid-subgrid-round-and-mod/


### Layouts die niet gecentreerd zijn

Veel interessante websites vermijden gecentreerde layouts.

Voorbeeld:
https://ernst-co.com/de/


### CSS features voor typografie

Je kunt bijvoorbeeld de eerste regel van een tekst stylen met `::first-line`:

```css
p::first-line {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}
```


### Inspirerende voorbeelden

- https://www.bonabry.de/en/ → goed gebruik van view transitions
- https://www.bonamic.de/ → veel gebruik van subgrid en creatieve layouts

Deze websites laten zien dat afwijkende layouts interessant en krachtig kunnen zijn.

## Take Aways:

Designers leveren vaak een statisch 2D ontwerp zonder interacties of animaties.

Als creative coder ligt de uitdaging bij jou om die extra laag toe te voegen:
beweging, interactie en dynamiek maken het web interessant.

