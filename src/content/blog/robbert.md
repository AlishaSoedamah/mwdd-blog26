---
title: 'Formulieren maken met NL Design System - Robbert Broersma'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Mar 12 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'

---

## Opbouw van een formulier volgens Robbert

- Een introductietekst.
- Alleen informatie vragen die nodig is.
- Bijvoorbeeld: *"Het duurt ongeveer 5 minuten om dit formulier in te vullen."*
- De gebruiker kan vóór het verzenden de ingevoerde gegevens controleren, wijzigen of ongedaan maken.
- Na het klikken op Volgende of Verzenden verschijnt een overzicht van alle fouten.
- Na het verzenden verschijnt een duidelijke bevestiging.

Vraag niet om onnodige gegevens.

Toon een overzicht van alle fouten bovenaan het formulier wanneer de gebruiker het formulier verstuurt. Dit is ook handig voor screenreadergebruikers.

Controleer of de ingevulde gegevens correct zijn.

Bied de mogelijkheid om het formulier op te slaan en later verder te gaan. Dit is vooral handig voor mensen met beperkte energie.

Bijvoorbeeld een bevestigingstekst:

> *Je aanvraag is met succes verstuurd.*

## Inhoud van een formulier

- Vraag alleen informatie die nodig is.
- Geef verplichte velden duidelijk aan.
- Leg uit waarom je specifieke informatie nodig hebt.
- Vraag de gebruiker niet twee keer om dezelfde informatie.
- Gebruik geen jargon of onduidelijke afkortingen.

Leg uit waarvoor persoonlijke gegevens worden gebruikt.

### Toegankelijkheid

- Zorg voor voldoende kleurcontrast van componenten.
- Zorg ook voor voldoende contrast van subtiele tekst.
- Maak componenten groot genoeg.

44 × 44 pixels wordt beschouwd als een gebruiksvriendelijke minimale grootte.

## Veelgemaakte fouten

### Fout: Een invoerfout alleen met kleur aangeven

- Plaats knoppen aan het begin van de regel waar iedereen ze gemakkelijk kan vinden.
- Toon de voortgang boven het formulier in tekst, bijvoorbeeld: Stap 2 van 4.
- Zorg voor duidelijke navigatie.
- Maak duidelijk in welke stap het formulier daadwerkelijk wordt verzonden.
- Elk invoerveld heeft een label.
- Geef in tekst aan of een veld verplicht of optioneel is en gebruik niet alleen een `*`.

### Fout: Onduidelijk welke velden verplicht zijn

- Staat het formulier in een logische volgorde?
- Bij complexe formulieren is het handig om hulp aan te bieden via e-mail, chat of telefoon.
- Goede plaatsen hiervoor zijn:

  - de introductietekst
  - bovenaan het formulier
  - de paginafooter
  - de controlepagina

### Fout: Label niet gekoppeld aan invoerveld

Een label moet altijd gekoppeld zijn aan het juiste invoerveld.

### Fout: Afkortingen en jargon worden niet uitgelegd

Plaats uitleg buiten het label, zodat het label niet onnodig lang wordt.

`aria-label=""` of `title=""` moeten dezelfde zichtbare labeltekst bevatten, anders werkt spraakbesturing niet goed.

### Fout: Haakjes en afkortingen

Voorbeeld:

slecht: Voorna(a)m(en)

goed: Voornaam (één of meerdere)

## Makkelijker invullen

- Bekende gegevens zijn vooraf ingevuld.
- Knippen en plakken is overal toegestaan.
- Gebruik `autocomplete` waar mogelijk.

## Beschrijvingen bij een veld

- Belangrijke uitleg is altijd zichtbaar.
- Extra uitleg bij een formulierveld is gekoppeld via `aria-describedby` aan het formulier-element.
- Beschrijvingen van foutmeldingen zijn gekoppeld aan het juiste veld.
- De beschrijving en foutmelding van een checkboxgroep of radiogroep zijn gekoppeld aan de `fieldset` met `aria-describedby`.

### Fout: Belangrijke informatie staat alleen in een tooltip of placeholder

Belangrijke informatie moet altijd zichtbaar zijn en mag niet uitsluitend in een tooltip of placeholder staan.

## Controlepagina

- De laatste stap toont een samenvatting van alle ingevoerde gegevens.
- De gebruiker kan de inzending controleren, wijzigen of ongedaan maken.
- Voorkom dat door `translate="no"` gegevens die de gebruiker zelf heeft ingevoerd automatisch worden vertaald. Dit is vooral belangrijk op de controlepagina en de bevestigingspagina.

### Fout: Taal niet consistent

Zorg dat labels overal in het formulier consistent zijn.

Bijvoorbeeld:

- Plaatsnaam
- Postcode

Gebruik overal dezelfde terminologie.

## Bevestiging

Een goede bevestigingspagina vermeldt duidelijk welke informatie is verstuurd.

## Validatie

De regels voor een invoerveld moeten vooraf duidelijk zijn:

- welke tekens zijn toegestaan;
- hoeveel tekens de invoer maximaal mag bevatten.

### Veelvoorkomende validatiefouten

- Geldige invoer wordt afgekeurd.
- Invoer moet verplicht mét of zonder spatie worden ingevoerd.
- De foutmelding helpt de gebruiker niet om de vraag correct in te vullen.

Foutmeldingen staan altijd bij het betreffende invoerveld.

## Toetsenbordtoegankelijkheid

Loop het formulier volledig door met alleen het toetsenbord, zonder muis.

Alles moet bereikbaar zijn:

- elk invoerveld;
- elke knop;
- elke link.

Controleer ook:

- een duidelijke focusindicator;
- een logische tabvolgorde.

### Veelvoorkomende fouten

- Je kunt niet met de Tab-toets door het hele formulier navigeren.
- Het is onduidelijk waar de focus zich bevindt tijdens het tabben.

## Screenreader

Controleer of:

- labels worden voorgelezen;
- beschrijvingen van een veld worden voorgelezen zodra het veld focus krijgt;
- verplichte velden als verplicht worden aangekondigd;
- foutmeldingen en feedback correct worden voorgelezen.

### Fout

Een foutmelding verschijnt al voordat de gebruiker klaar is met het invullen van het veld.
