---
title: 'PPK - WN 2'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Feb 19 2026'
heroImage: '../../assets/blog-placeholder-about.jpg'
---

## Peter-Paul Koch

19/2/2026
Browsers

Wat is een browser in technische termen?
Een browser moet html css en js kunnen interpreteren.

- HTML -> gaat naar de HTML parser
- CSS -> gaat naar de CSS parser -> gaat daarna naar de styling engine
- DOM
- AOM -> accesiblity object model is bedoeld voor accessive devices zoals screenreaders
- Interface
- Javasctipt engine

De Javasctipt engine is het deel dat ook echt de Javasctipt leest.
De programeer taal Javasctipt is officeel niet een gedeelte van een browser en moet daarom dus naar zijn eigen engine gaan.

### Rendering engine
De rendering engine parsed HTML en CSS maar doet dus niet de interface of de Javasctipt engie.

Wat maakt Javasctipt een programmertaal?
Er zitten loops en if statements in.

### Render blocking
Javasctipt tenzij async of defer

Als je Javascript in HTML doet dan mag de browser niet verder met de HTML parser totdat het Javasctipt script wordt geladen,
het liefst zorgen dat de Javasctipt pas wordt geladen na dat je HTML helemaal hebt geladen.

Hetzelfde geld voor inline CSS, de layout is het kostbaarste wat de browser moet laden. CSS wordt eerst
geparsed want de CSS is ook het lastigste gedeelte voor de browser. Als je eerst de HTML laad dan zou je de ongestijlde HTML
webpagina zien.

### dever vs async
do it now (bijna nooit)
script src

liever 1 van deze twee gebruiken:

do it later
defer src

i dont care when you do it just not now
async src

### Backward compatibility
Alles wat de browser ooit heeft ondersteuned moet de browser voor altijd ondersteunen.

[form objects].elements = input, select alle tekst areas
bgcolor="ffffff" -> werkt nogsteeds omdat we dat vroeger ook gebruikte
Content box model
```<frameset> -> afstammeling <iframe>```

### Browser als platform

"browsers are the most hostile development platforms in the world"
- Douglas Crockford

## korte geschiedenis
- De eerste webbrowser was de WWW browser 1990
WWW = Wordle wide web

- Allereeerste browser gebouwd door Tim Berners-Lee en consorten
- [Herbouwd in 2019](https://worldwideweb.cern.ch/)

Mosaic browser (1993)
- Radicale verandering: een tag om plaatjes te laten zien op het web. Maar mosaic was non profit omdat het een
universiteids project was

Netscape (1994)
was niet gratis

Internet Explorer (1995)
was gratis

Opera (1995)
"wilde laten zien hoe css echt werkt", liet css beter zien dan andere browsers. Opera bleef heel lang betaald

IE 5 Mac (2000)
De beste browser voor mac

De eerste belangrijke browser:

Konqueror (2000)
Hobby project die is uitgevonden door linux gasten op een gnome linux system.

Safari (2003)
webkit is de render engine van safari
geen documentation
js hadden ze niet echt dus daar was ook geen documentation voor

Firefox (2004)
soort van de opvolger van netscape 4 maar dit was een goede browser

Safari iOS (2007)
Eerste mobiele browser die iedereen wel serieus nam

Chrome (2008)
opensource, apple x google. chrome heeft zijn eigen rendering engine

Flow (2020)
Is gemaakt door een Engels bedrijf, ondersteunt bepaalde css niet

Ladybird (2024)
Hobby project om van een drugsverslaving af te komen

## mobiele browsers

Samsung internet is gebaseerd op blink.

Browser markt 2024
- firefox
- safari
- chrome

Igalia is een spaans opensource bedrijf.
Die zijn zich sinds een paar jaar aan het focusen op het bouwen van gedeeltes van rendering engines 

### summary
history over browsers over de jaren heen en de basics van hoe een browser werkt
