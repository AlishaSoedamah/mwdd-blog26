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

## Whimsica11y (Whimsic accessiblility) - Sara Joy

Missing the style of old websites -> Neocities

### these people are diverse and inclusive
Many of them are are neurodivergent and or are disabled

### The WCAG
To someone who is just starting to create their own website they just aren't going to read it.

### Do fun websites have to be accessible
These are peoples homes, should ALL art be accessible.
Maybe not, but it doesn't mean that we can't try.
embedded audio -> audio

prefers-reduced-motion works in JS too!

We've taken away things that people can't use, but does it still convay the fun message of the website?
How do you transmit the vibes beyond visuals?

some sites have to be boring and dull: gov sites for example.
keep them boring and predictical.

### bridging the vibes gap
- Hue selector
- Alt text
I found myself repeating existing advice, what if I accidentally excluded more people with my advice.

### What has delighted people that use assistive technologies online?
Answers where exclusivly about functionality of a website. The bar is just so low. The web is dull if you can't see it.

Welcome pannel -> funny sounds
The majority of people haven't learned braille because they lost their sight later in live;

Screen readers use specific tones which allow them to get trough sites extreemly fast.

### What has happend to our multi-media web
Why is there so little audio and video outside of YouTube?
- So much browsing happens on mobiles in public spaces -> often in silence.
- CSS is very visual in nature

### Some ideas and exmples,
- Blog with voice over audio counterparts.
- Sound board
- Keyboard usable drum machine
- Learn more about the development of CSS speech
- Create atmosphere or fun in visually hidden text.
- [ALT TEXT SELFIES](https://alttextselfies.net/) Shows you the alt text of a picture without the picture

## Built to Last - Johannes Odland
Cameras
My diswasher started beeping, shoddy dishwaser causes flood.
Everthing is breaking and nothing is reparable

I was so frutstarted with the state of things, so I bought myself a present. An instant film adapter for
my favortite camera. That camera is 17 years old and it still works. it has had 0 supply chain attacks. it was built to last.

matirials, what the camera was build out of: all metal body
no plasic gear, no batteries no electronics.

Now we can't build our sites out of metal but we have html/css and js which are sturdy.

The avrage project has 1200 dependencies, is it an update or is it a supply chain attack?
But we're talking about camera's there was a dedicated instant photagapty community, they got togeter and started a
company called: "the impossible porject". With a dead supply chain they had all the odds stacked against them
polaroids still exist. now we have a hell of a community for the web. 

I want a web that is easier to learn!

## Björn Wijers

## Julie Blanc

## Jeremy Keith