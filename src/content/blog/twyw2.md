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

## Cyd Stumpel
### Prefers enhanced motion
### The web I want
"De web I want" bevat beweging en creativiteit. Ik vind het echt geweldig hoe open het web is.
Een nadeel van het open web is dat websites makkelijk te kopiëren zijn.

Vooral dankzij AI.

### The web is a tool
Wat jammer is, is dat onderdelen die ik voor het web heb ontworpen, ontoegankelijk zijn voor mensen zoals Léonie. Progressieve verbetering wordt steeds populairder. Een roltrap kan kapotgaan, maar je kunt hem nog steeds als trap gebruiken.

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

## Björn Wijers

## Julie Blanc

## Sara Joy

## Johannes Odland

## Jeremy Keith