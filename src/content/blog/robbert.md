---
title: 'Robbert Broersma - WN 4'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Mar 12 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'

---
# WN 4

## Robbert Broersma
12/3/2026

### Formulieren maken 
Met NL design systems

Opbouw van een formulier volgens Robbert
- introtekst
- informtie vragen die nodig zijn
	"het duurt ongeveer 5 minuten om dit formulier in te vullen"
- gebruiker kan voor inzendingen de ingevoerde waardes controleren, wijzigen of ongedaan maken 
- na volgende of verzenden verschijnt een samenvatting van alle fouten 
- na verzenden verschijnt er een duidelijke bevestiging

Niet vragen om onnodige gegevens

Een opsomming van fouten laten zien als de gebruiker het form verstuurd  boven aan het formulier.
Dit is voor screenreaders handig. 

Controleren of ingevulde gegevens goed zijn

Opslaan en later verder -> optie voor mensen die beperkte energie hebben

Je vraag is met succes opgestuurd

### Inhoud van een formulier
- alleen informatie vragen die nodig is
- verpichte velden goed aangeven
- uitleggen waarom je specifieke informatie nodig hebt
- gebruiker dezelfde informatie niet twee keer vragen
- geen jargon of gekke afkorting(en) gebruiken

Leg uit waarvoor je persoonlijke gegevens voor gaat gebruiken

Kleurcontrast van componenten 

Kleurcontrast van subtielere tekst

Zijn de componenten groot genoeg
44x44px is gebruiksvriedelijk

## Fouten

### Fout: Een invoerfout alleen met kleur aangeven.
- buttons aan het begin van de regel waar iedereen ze kan vinden
- de voortgang wordt getoond boven het formulier in tekst bv stap 2 van de 4
- navigatie
- het duidelijk in welke stap heet formulier daadwerkelijk wordt verzonden
- elke invoerveld heeft een label
- Er staat verpicht of niet verplicht in tekst en niet allen een '*'


### Fout: onduidelijk welke velden verplicht zijn
- staat het formulier in een logische volgorde
- bij complexe formulieren is het handig om hulp te bieden zodat email chat en telefoon
- goede plekken zijn de intro tekst, bovenaan een formulier, in de page footer op de controlepagina

### Fout: Label niet gekoppeld aan invoer

### Fout: afkortingen en jargon worden niet uitgelegd
zet de uitleg buiten het label zodat ie niet te lang wordt

- aria-label="" of title="" moeten zichtbare labeltekst bevatten anders werkt het niet met spraakbesturing

### Fout: haakjes en afkortingen
- Voorna(a)m(en), beter: voornaam (1 of meerdere)

Makkelijker invullen
- bekende gegevens vooraf ingevuld
- knippen en plakken is overal toegestaan
- autocomplete aanbieden

Beschrijvingen bij een veld:
belangrijke uitleg is altijd zichtbaar
extra teksten bij een formulierveld zijn gekoppeld met aria-describeby op het formulier-element
beschrijving van foitmeldingen
De beschrijving en foutmelding van checkbox broup en radio group zijn gekoppeld aan de fieldset met aria-describedby

### Fout: belangrijke informatie in tooltip of placeholder

- De laatste stap toont een samenvatting van alle ingevoerde gegevens
- Het formulier biedt de mogelijkheid om een inzending te controleren te wijzigen of ongedaan te maken
- voorkom dat bdi translate="no" dat wat de gebruiker zelf heeft ingevoerd wordt vertaald. dit is met name op de controle pagina en de bevestigingspagina

### Fout: Taal niet consistent

Zorg dat je labels consistent zijn over het hele form heen.
Plaatsnaam en Postcode zijn niet hetzelfde.

Bevestiging

een goede bevestiging vermeld welke informatie is verstuurd

validatie 
de regels voor een invoerveld zijn vooraf duidelijk welke tekens, of hoelang de tekst mag zijn

### Fout: Geldige invoer is afgekeurd
### Fout: Invoer moet per se met of zonder spatie
### Fout: Helpt niet de vraag in te vullen

Foutmeldingen staan bij het betreffende veld

Toetsenbord
-Doorloop het form met alleen het toesenbord zonder muis
Wat er moet werken
- elk invoerveld
- elke button
en elke link moet goed bereikbaar zijn

focusindicator, tabvolgorde is logishc

- Fout: Je kunt niet van begin tot eind met de tab-toets door het form heen
- Fout: onduidelijk waar de focus is als je met je tab toets door het formulier gaat

Screenreader
labels worden voorgelezen
Beschrijving van een veld wordt voorgelezen als het veld focus krijgt.
verplichte velden worden als verplicht aangeduid bij het voorlezen
foutmemeldingen en feedback

Fout: Foutmelding voor je klaar bent met invullen
