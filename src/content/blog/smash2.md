---
title: 'Smart Layout Patterns with Modern CSS - Kevin Powell'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'May 28 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'

---

## Media queries vs container queries

Kevin Powell legde het verschil uit tussen **media queries** en **container queries** en hoe deze de manier waarop we responsive layouts bouwen veranderen.


## Problemen met media queries

Bij traditionele layouts met **media queries** en `grid-template-columns` loop je vaak tegen problemen aan.

Bijvoorbeeld: zodra je padding verandert, moet je soms werken met “magische getallen” om de layout goed te laten uitlijnen.

Dit maakt layouts minder flexibel en gevoeliger voor kleine aanpassingen.


## Container queries als oplossing

Met **container queries** kun je layouts laten reageren op de grootte van hun container in plaats van het volledige viewport.

Je kunt bijvoorbeeld berekeningen gebruiken zoals:

```css id="kq12ab"
calc(200px * 3 + 2rem)
```

Dit blijft consistent, ongeacht de context waarin de component wordt geplaatst.

### Trade-off

Het nadeel is dat je soms de container expliciet moet definiëren en een bepaalde breedte moet “vastleggen”.

Maar volgens Kevin is dat beter dan werken met onvoorspelbare “magic numbers”.


## Verschil in gedrag

- **Media queries** reageren op de volledige viewport (bijvoorbeeld browserbreedte of font-size van de browser).
- **Container queries** reageren op de grootte van de container zelf.

Hierdoor zijn componenten veel beter herbruikbaar.

## Typografie en breedtes

Een interessant concept is het gebruik van `ch`:

- `1ch` = breedte van een karakter
- `90ch` ≈ ongeveer 90 tekens breed

Voorbeeld: bij 90ch verandert een card bijvoorbeeld van layout zodra de tekst te breed wordt.

## Container query voorbeeld

```css id="cq81vd"
@container (inline-size > 75cqi) {
  .card {
    /* aangepaste layout */
  }
}
```

Ook wordt gewerkt met units zoals:

- `cqi` (container query inline size)
- `cqb` (block size)

## Container height en units

Bijvoorbeeld:

```css id="hb44qp"
block-size: 10vb;
```

Deze units reageren op de container in plaats van het viewport.

## Nieuwe mogelijkheden

Container queries worden steeds krachtiger.

### Container style queries

Nog niet volledig ondersteund in browsers zoals Firefox, maar ze maken het mogelijk om styles toe te passen op basis van container-eigenschappen.

### Container scroll-state()

Met `scroll-state()` kun je reageren op scrollgedrag binnen een container.

Voorbeelden:

- detecteren of een container scrollbaar is;
- detecteren welke kant iemand scrolt;
- detecteren wanneer een element “snapt” in een carousel.

```css id="ss22kk"
@container scroll-state(snapped: inline) {
  transform: scale(1);
}
```

Bijvoorbeeld: een afbeelding wordt groter zodra deze in het midden van een carousel “snapt”.

### Sticky headers zonder JavaScript

Je kunt ook scrollgedrag gebruiken om sticky headers te verbeteren:

```css id="sh91ld"
@container scroll-state(stuck: top) {
  transform: translateY(-100%);
}
```

Wanneer je naar beneden scrollt verdwijnt de header, en wanneer je terug omhoog scrollt komt deze weer tevoorschijn.

## Belangrijkste verschil

- **Media queries** kijken naar de hele pagina.
- **Container queries** kijken naar de beschikbare ruimte van een component.

Dit maakt container queries veel flexibeler voor moderne component-based layouts.

## Conclusie

Container queries geven ontwikkelaars meer controle over responsive design op componentniveau. Ze maken layouts dynamischer, consistenter en beter herbruikbaar dan traditionele media queries.
