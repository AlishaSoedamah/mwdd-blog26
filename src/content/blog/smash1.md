---
title: 'Smashing day 1'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Apr 14 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'

---

## Christine Vallaure - The Invisible Divide

Van Moon Learning

### Topics covered

- Flexbox
- CSS Grid
- Breakpoints
- Container Queries

The talk was aimed primarily at designers and was not overly technical.

### Opening

Christine begon met een scenario tussen een ontwikkelaar en een ontwerper. De ontwikkelaar wilde de layout bijwerken, maar de ontwerper begreep niet wat dat technisch gezien inhield. Dit benadrukte de communicatiekloof tussen ontwerp en ontwikkeling.

### Figma and Flexbox

Als ontwerpers slepen we elementen vaak vrij over een canvas. Traditionele layouts worden simpelweg op elkaar gestapeld.

Het gebruik van `display: flex` verandert deze aanpak echter. Een flexcontainer bepaalt automatisch de positionering en het gedrag van de onderliggende elementen.

Naarmate layouts complexer worden, ontstaat er veel nesting. Deze geneste layouts reageren goed op veranderingen in grootte en inhoud.

Figmas Auto Layout lijkt sterk op hoe Flexbox in CSS werkt.

### Flexbox vs. Grid

Bij het stapsgewijs bouwen van componenten biedt Auto Layout gedrag dat vergelijkbaar is met Flexbox.

- Flexbox is eendimensionaal (horizontaal of verticaal).
- CSS Grid isis tweedimensionaal (rijen en kolommen).

Bij kaartlayouts kan Flexbox er bijvoorbeeld voor zorgen dat kaarten om de rand heen lopen en ongelijk van formaat worden. In die gevallen biedt Grid een betere layout oplossing.

### CSS Grid

In design werken we vaak met kolomgrids en plaatsen we content binnen die kolommen.

CSS Grid werkt meer als een schaakbord, waarbij content zowel in rijen als in kolommen kan worden geplaatst.

Dit staat bekend als een expliciete grid.

### Breakpoints en `clamp()`

Breakpoints en clamp()
De presentatie ging ook over responsieve dimensionering.

De CSS clamp() functie definieert een minimum, voorkeurs en maximumwaarde, waardoor een responsief systeem op zichzelf ontstaat.

Figma heeft momenteel geen equivalent van clamp().

### Container Queries
In tegenstelling tot media queries reageren Container Queries niet op de grootte van de viewport, maar op de grootte van de parent container.

### AI and Design Systems

Christine besprak hoe AI kan helpen bij designwerk, maar benadrukte dat ontwerpers met elkaar moeten blijven communiceren.

Ze demonstreerde de combinatie van AI met ontwerptools door een Figma bestand als context te gebruiken en Claude in te zetten ter ondersteuning van het werk.

Ze betoogde dat een zekere mate van rommel en imperfectie noodzakelijk is, omdat dit unieke producten oplevert in plaats van generieke, door AI gegenereerde ontwerpen.

### Takeaways

- Figma technieken hebben veel overeenkomsten met CSS.
- Inzicht in 1fr in Figma helpt de kloof naar CSS Grid te overbruggen.
- Figma ondersteunt nu tweedimensionale grids.
- AI kennis wordt een belangrijke ontwerpvaardigheid.

Een beetje creatieve chaos is nodig om sterke ontwerpsystemen te bouwen.


### Personal opinion

De presentatie legde moderne layout technieken op een heel toegankelijke manier uit. Hoewel veel concepten bekend waren, bleef de presentatie boeiend en werd nooit saai.

## TJ Pitre

### AI Without the Chaos: Context-Based Design Systems in Practice

De kernboodschap van de presentatie was dat AI veel beter presteert wanneer het de juiste context heeft, en een goed onderhouden designsystem biedt die context.

### AI in the design process
AI kan verschillende fasen van het ontwerpproces ondersteunen:

- Ideeen genereren
- Kwaliteitscontrole van het ontwerp
- Validatie
- Overdracht van ontwerp naar ontwikkeling
- De presentatie benadrukte de vaak problematische relatie tussen ontwerpers en ontwikkelaars.

Ontwerpers verliezen de intentie tijdens de overdracht.
Ontwikkelaars verliezen de context bij het implementeren van ontwerpen.

Het aanbieden van een gestructureerd designsystem aan AI kan deze problemen helpen verminderen.

### Design QA with FigmaLint

In de live demo:

- De knopcomponenten scoorden aanvankelijk 54%.
- Ontbrekende componentbeschrijvingen werden automatisch gegenereerd met behulp van AI.
- Componenten die vaste waarden in plaats van variabelen gebruikten, werden geidentificeerd en bijgewerkt.
- Een belangrijk punt was dat door AI gegenereerde beschrijvingen nog steeds moeten worden gecontroleerd en idealiter door een mens moeten worden geschreven of goedgekeurd.
- Na de verbeteringen behaalde het designsystem een ​​score van 100%.

### Design to Development
De presentatie ging ook kort in op MCP (Model Context Protocol) als een manier om AI te voorzien van een rijkere context tussen ontwerp en ontwikkelingsworkflows.

### Takeaways

- Structureer je Figma bestanden zodat AI ze kan begrijpen.

- Gebruik AI om inconsistenties te identificeren en rommel op te ruimen.

- AI is het meest waardevol wanneer het samenwerkt met een goed georganiseerd ontwerpsysteem in plaats van menselijke beslissingen te vervangen.