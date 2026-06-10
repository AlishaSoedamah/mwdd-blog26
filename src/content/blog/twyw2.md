---
title: 'The Web You Want - dag 2'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jun 10 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

## Léonie Watson
Schermlezers op het web
Voorbeeld: Calvin Klein
Leest de materiaalsamenstelling van de kleding voor, maar geeft geen goed voorbeeld van hoe het kledingstuk eruitziet.
Iets als AI kan de sfeer en de kleur van het kledingstuk beschrijven. Veel basisinformatie ontbreekt in alt-tags, daarom is AI nuttig.

### Beschrijvingen van de echte wereld
Meta brillen leggen uit wat je voor je ziet.
Als blinde wil je weten waar je staat of waar je naar kijkt.

Nadeel: je moet een foto maken om een ​​beschrijving te krijgen.

### Object identification
Het helpt je bij het identificeren van voedselflessen/blikken, zodat je de juiste pakt.

### Finding objects
Heeft iemand ooit zijn sleutels neergelegd en ze vergeten? Stel je voor, maar dan met je ogen dicht.

Je kunt een object vinden met AI; je kunt het vrijwel alles vragen over alledaagse voorwerpen.

### Retail agent
Het zijn niet alleen afbeeldingen op het web die me storen, maar ook websites die niet toegankelijk zijn via het toetsenbord. Wat als ik dat kan omzeilen en AI kan gebruiken om iets te kopen?

### AI is not a good thing
De bedrijven die AI maken zijn slecht, maar de functies zijn geweldig

### AI compensates for the shortcomings of the web
De harde waarheid is dat AI het web toegankelijk maakt op een manier die voorheen niet mogelijk was. Neurodivergente mensen gebruiken AI om teksten te comprimeren en zo hun boodschap sociaal aanvaardbaarder te maken. Los van beperkingen gebruiken veel mensen AI in hun werk.

### Het web dat ik wil?

Ik wil overal en altijd toegang hebben tot het web. Een web waar alles gelabeld is, zodat ik nooit een AI hoef te gebruiken. Toegankelijke formulieren.

## Prefers enhanced motion - Cyd Stumpel
### The web I want
"De web I want" bevat beweging en creativiteit. Ik vind het echt geweldig hoe open het web is.
Een nadeel van het open web is dat websites makkelijk te kopiëren zijn.

Vooral dankzij AI.

### The web is a tool
Wat jammer is, is dat onderdelen die Cyd voor het web heeft ontworpen, ontoegankelijk zijn voor mensen zoals Léonie. Progressieve verbetering wordt steeds populairder een voorbeeld hiervan: een roltrap kan kapotgaan, maar je kunt hem nog steeds als trap gebruiken.

Graceful degradation -> Animaties/visuele effecten ondermijnen de 'core task' niet.
Identify the core task -> Ontdek wat altijd zou moeten werken en verplaats je in de gebruiker.

> When you deliberately design for the worst acceptable experience first, everything that comes after becomes an enhancement instead of a requirement.

### HMTL first
Door de jaren heen is er verrassend veel functionaliteit toegevoegd.
een goed voorbeeld hiervan is:

	<details>

Om een ​​sectie te openen, kan je een naam aan de details tag toevoegen:

	<details name="faq">
	<details name="faq">

### Semantics
Dit heeft altijd al zonder JavaScript gewerkt. Bij de meeste CSS verbeteringen heb je een layered aanpak nodig.

	:root {
		interpolate-size: allow-keywords; -> only on firefox and chrome :(
	}

with interpolate-size can animate from height 0 to height auto.

	@supports (interpolate-size: allow-keywords)
	{
		@media (prefers-reduced-motion: no-prefrence)
		{
		::details-content {
			height: 0;
			overflow: clip;
			transition: height: 0.4s ease-out, content-visiblity, allow-discrete;
		}
		details[open] {
			&::details-content {
				height: auto;
			}
		}
		}
	}

#### Popover API

Zonder JavaScript kun je een pop-upmenu maken met CSS!

	nav {
		border: none;
		@supports selector(:popover-open)
		{
			@media (prefers-reduced-motion: no-prefrence)
			{
				clip-path: inset(0 100% 100% 0 round 0.15rem);
				transition: 2s ease-out;
				transition-behavior: allow-discrete;
				&:popover-open {
					@starting-style {
						clip-path: inset(0 round 0.15rem);
						transition: 2s ease-out;
					}
					@starting-style {
						clip-path: inset(0 100% 100% 0 round 0.15rem);
					}
				}
			}
		}
	}

# Whimsica11y (Whimsic Accessibility) – Sara Joy

## Verlies van “oude web vibes”

Sara Joy sprak over het verdwijnen van de speelse, creatieve stijl van oudere websites, zoals die op platforms als **Neocities**.

Veel van deze websites worden gemaakt door mensen die:

- neurodivergent zijn
- een beperking hebben
- of bewust buiten de mainstream webstandaarden ontwerpen

Deze “persoonlijke webspaces” voelen vaak vrijer en creatiever aan dan moderne, strak gestandaardiseerde websites.

## WCAG en toegankelijkheid

De **WCAG-richtlijnen** zijn belangrijk, maar voor beginners vaak overweldigend.

Iemand die net begint met het bouwen van een website gaat deze richtlijnen meestal niet volledig lezen of begrijpen.

Dit roept de vraag op: hoe maken we toegankelijkheid toegankelijker?

## Moet fun ook toegankelijk zijn?

Een centrale vraag in de talk was:

> Moeten leuke en creatieve websites altijd volledig toegankelijk zijn?

Sara vergeleek websites met persoonlijke ruimtes:

- sommige websites zijn “huizen” van mensen
- en niet alle kunst hoeft volledig toegankelijk te zijn volgens strikte regels

Tegelijkertijd werd benadrukt dat we altijd moeten proberen inclusiever te ontwerpen.

Voorbeelden:

- embedded audio kan sfeer toevoegen
- `prefers-reduced-motion` kan ook in JavaScript worden gebruikt


## De “vibe gap”

Een belangrijk probleem is de kloof tussen functionaliteit en beleving:

- veel toegankelijkheidsrichtlijnen focussen op functionaliteit
- maar laten vaak de “vibe” of emotie van een website buiten beschouwing

De vraag is:

> Hoe breng je sfeer en gevoel over zonder afhankelijk te zijn van puur visuele elementen?

## Toegankelijkheid en creativiteit

Sommige websites moeten juist bewust eenvoudig en voorspelbaar zijn, zoals:

- overheidswebsites
- formulieren
- informatiesystemen

Hier is duidelijkheid belangrijker dan expressie.

## Bridging the vibes gap

Mogelijke technieken om sfeer toegankelijk te maken:

- kleur- en hue-selectors
- goede alt-tekst
- alternatieve audio of tekstuele representaties

Sara gaf aan dat toegankelijkheidsadvies soms onbedoeld kan leiden tot uitsluiting als het te beperkt of eenzijdig wordt toegepast.

## Wat vinden gebruikers met assistive technologies fijn?

Uit ervaringen blijkt dat veel feedback vooral gaat over **functionaliteit**, omdat de lat voor veel websites nog steeds laag ligt.

Voorbeelden van positieve ervaringen:

- sound effects bij interacties
- welkomschermen met audio
- duidelijke feedback bij acties

Veel gebruikers van screenreaders gebruiken hun tools extreem snel en efficiënt, vaak met specifieke audiotones.

## Het verdwijnen van multimedia op het web

Er werd besproken waarom het web minder audiovisueel is geworden:

- veel mensen browsen op mobiele apparaten in openbare ruimtes
- daarom wordt audio vaak vermeden
- CSS is van nature vooral visueel gericht

## Ideeën voor een rijker web

Voorbeelden van meer inclusieve en creatieve toepassingen:

- blogs met ingesproken audio-versies
- interactieve soundboards
- keyboard-gestuurde drum machines
- experimenteren met CSS speech
- sfeer toevoegen via visueel verborgen tekst
- ALT TEXT SELFIES → https://alttextselfies.net/ (laat alt-tekst zien zonder afbeelding)

# Built to Last – Johannes Odland

## Duurzaamheid en hardware

Johannes vertelde over de frustratie dat moderne producten steeds vaker snel stukgaan en moeilijk te repareren zijn.

Hij gaf een persoonlijk voorbeeld:

- een 17 jaar oude camera die nog steeds perfect werkt
- volledig gemaakt van duurzame materialen
- geen plastic tandwielen
- geen batterijen of complexe elektronica

Deze camera is “built to last”.

## Vergelijking met software

Hoewel we geen fysieke materialen gebruiken in webdevelopment, kunnen we wel vergelijkbare principes toepassen:

- HTML, CSS en JavaScript zijn relatief stabiel
- maar moderne projecten bevatten vaak extreem veel afhankelijkheden.

Gemiddeld project:

> ~1200 dependencies

Dit roept vragen op over betrouwbaarheid:

> Is een update echt een verbetering, of een risico in de supply chain?

## Community en duurzaamheid

Er werd een parallel getrokken met de analoge fotografie-community

- toen Polaroid bijna verdween, ontstond “The Impossible Project”
- een community bouwde het merk opnieuw op.

Voor het web geldt iets vergelijkbaars:

- we hebben een grote en actieve community;
- maar moeten samenwerken om het web duurzaam en toegankelijk te houden.

## Belangrijkste boodschap

Het doel is een web dat:

- eenvoudiger te leren is
- duurzamer is
- en langer meegaat

Een web dat niet alleen snel en complex is, maar ook stabiel en begrijpelijk voor de lange termijn.
