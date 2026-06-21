---
title: 'The Rule of Least Power - Kilian Valkhof'
description: 'Lorem ipsum dolor sit amet'
pubDate: '4 Feb 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

## Wie is Kilian?

Kilian is de oprichter van Polypane, een browser die speciaal is ontwikkeld voor front-end developers. Polypane bevat verschillende hulpmiddelen die het ontwerpen, testen en ontwikkelen van websites eenvoudiger maken.

## The Rule of Least Power

Tijdens de WN sprak Kilian over het principe The Rule of Least Power. Dit principe houdt in dat je altijd begint met de minst krachtige technologie die geschikt is voor een bepaalde taak.

In webontwikkeling betekent dit dat je eerst kijkt of iets met HTML kan worden opgelost. Als dat niet mogelijk is, gebruik je CSS en pas als laatste JavaScript.

Door eerst gebruik te maken van HTML en CSS blijft de code eenvoudiger, beter toegankelijk en makkelijker te onderhouden. JavaScript gebruik je alleen wanneer de andere technologieën niet voldoende zijn.

## Voorbeeld: een toggle

Een goed voorbeeld hiervan is een toggle (uitklapbaar element). Waar vroeger vaak JavaScript voor nodig was, kan dit tegenwoordig met de ingebouwde HTML-elementen `<details>` en `<summary>`.

```html
<details>
  <summary>My awesome feature</summary>

  <p>
    Hier komt de inhoud die zichtbaar wordt wanneer de gebruiker op de titel klikt.
  </p>
</details>
```

Dit laat zien dat HTML steeds meer ingebouwde functionaliteit biedt, waardoor het niet altijd nodig is om JavaScript te gebruiken. Dat sluit goed aan bij het principe van The Rule of Least Power: gebruik de eenvoudigste oplossing die voldoet aan de gewenste functionaliteit.

## Take Aways:
HTML en CSS kunnen meer dan dat ik in eerste instantie dacht verder geen take aways voor deze talk.