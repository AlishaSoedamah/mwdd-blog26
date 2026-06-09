---
title: 'Browsers - Peter-Paul Koch'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Feb 19 2026'
heroImage: '../../assets/blog-placeholder-about.jpg'
---

## Wat is een browser in technische termen?

Een browser moet HTML, CSS en JavaScript kunnen interpreteren.

* HTML → gaat naar de HTML-parser
* CSS → gaat naar de CSS-parser → gaat daarna naar de styling engine
* DOM
* AOM → Accessibility Object Model, bedoeld voor ondersteunende technologieën zoals screenreaders
* Interface
* JavaScript-engine

De JavaScript-engine is het onderdeel dat daadwerkelijk de JavaScript-code leest en uitvoert.

De programmeertaal JavaScript is officieel geen onderdeel van de browser zelf en wordt daarom verwerkt door een aparte engine.

### Rendering engine

De rendering engine verwerkt HTML en CSS, maar doet niets met de interface of de JavaScript-engine.

### Wat maakt JavaScript een programmeertaal?

Er zitten onder andere loops en `if`-statements in.

### Render blocking

JavaScript is render-blocking, tenzij je `async` of `defer` gebruikt.

Als je JavaScript in HTML plaatst, mag de browser niet verder met de HTML-parser totdat het JavaScript-bestand is geladen. Daarom is het beter om JavaScript pas te laden nadat de HTML volledig is verwerkt.

Hetzelfde geldt voor inline CSS. De layout is het kostbaarste onderdeel dat de browser moet berekenen. CSS wordt daarom eerst geparsed, omdat dit een van de lastigste onderdelen voor de browser is. Als eerst alleen de HTML zou worden geladen, zou je een ongestylede webpagina zien.

### Defer vs async

#### Do it now (bijna nooit gebruiken)

```html
<script src="script.js"></script>
```

Liever een van deze twee gebruiken:

#### Do it later

```html
<script defer src="script.js"></script>
```

#### I don't care when you do it, just not now

```html
<script async src="script.js"></script>
```

### Backward compatibility

Alles wat een browser ooit heeft ondersteund, moet de browser voor altijd blijven ondersteunen.

* `form.elements` → bevat onder andere `input`, `select` en `textarea`
* `bgcolor="ffffff"` → werkt nog steeds, omdat dit vroeger veel werd gebruikt
* Content Box Model
* `<frameset>` → voorloper van `<iframe>`

### Browser als platform

> "Browsers are the most hostile development platforms in the world."
> Douglas Crockford

## Korte geschiedenis

* De eerste webbrowser was de **WWW Browser** (1990). WWW staat voor **World Wide Web**.
* De allereerste browser werd gebouwd door Tim Berners-Lee en zijn team.
* In 2019 is deze browser opnieuw gebouwd.

### Mosaic Browser (1993)

* Grote verandering: ondersteuning voor afbeeldingen op het web.
* Mosaic was non-profit, omdat het een universiteitsproject was.

### Netscape (1994)

* Was niet gratis.

### Internet Explorer (1995)

* Was gratis.

### Opera (1995)

* Wilde laten zien hoe CSS écht werkte en ondersteunde CSS beter dan veel andere browsers.
* Opera bleef lange tijd een betaalde browser.

### IE 5 Mac (2000)

* De beste browser voor Mac in die tijd.

## De eerste belangrijke browsers

### Konqueror (2000)

Een hobbyproject, ontwikkeld door Linux-ontwikkelaars voor een Linux-systeem.

### Safari (2003)

* WebKit is de rendering engine van Safari.
* Er was weinig documentatie beschikbaar.
* Ook voor JavaScript was destijds weinig documentatie.

### Firefox (2004)

Een soort opvolger van Netscape 4 en een goede browser voor die tijd.

### Safari iOS (2007)

De eerste mobiele browser die door veel mensen serieus werd genomen.

### Chrome (2008)

* Open source.
* Ontstaan uit samenwerking tussen Apple en Google.
* Chrome heeft zijn eigen rendering engine.

### Flow (2020)

Gemaakt door een Engels bedrijf en ondersteunt bepaalde CSS-functionaliteiten niet.

### Ladybird (2024)

Begonnen als hobbyproject door iemand die een alternatief zocht voor zijn drugsverslaving.

## Mobiele browsers

Samsung Internet is gebaseerd op Blink.

### Browsermarkt (2024)

* Firefox
* Safari
* Chrome

### Igalia

Igalia is een Spaans open-sourcebedrijf.

Het bedrijf richt zich de laatste jaren op het ontwikkelen van onderdelen van rendering engines.

## Samenvatting
Deze presentatie ging over de geschiedenis van browsers door de jaren heen en de basisprincipes van hoe een browser werkt.
