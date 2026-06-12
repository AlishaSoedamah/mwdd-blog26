---
title: 'CSS Day 2'
description: 'This is CSS day 2!'
pubDate: '12 Jun 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

## Kevin CSS is eating JS

if()
for one liner mediaquery
or for style queries

attr()

	style(--test: 1): 10px deshed orange;
	else: 20px dotted limegreen;


border: if (
	style(--test: 1) limegreen;
	else: 20px dotted limegreen;
)

@container style()

## We have range syntax with if() & style()!

See things that are low on stock first:
if (
	style(--stock > 0): var(--stock)
	else: 99999;
)

@container style(--weatehr: rian) and 
style(--percip < 5) {
	background: lightblue;
}

## Fun with grid lanes - Patrick Brosset

Back in the days you couldn't use border radius, if you wanted todo a
fancy hover or click you needed images and javascript to change it.

Images where the name of the game.

Tabels for layouts because it used to be the only thing we had.

### Constraints fuel creativity
No JS movement with arrow keys, just CSS.
CSS. Grid, Anchor positioning, 

### Why all this?
Because computers are fun
And also because that's how the web stays relevant

When you are building planes you don't build something for safety first, you learn by iterating on it first and then you see what works and doesn't.

### what is grid-lanes?
- Built-in layout, no JS
- Get used to the new name grid-lanes
- 1D
- Not a special grid
- Not only vertical, not only top to bottom
- Different sizes
- Opportunistic placement algorithms
- You can still control placement

### browser support
Safari is the first one to support it
Edge + chrome also support it
Firefox - prototyped version

### problems?
- Is it something people actually want? -> it's in the top 5/3 issues of things missing from CSS
- IS it actually good for users? -> if you're working on something that needs to be read in a particular order then no, but if not let creatives be creatives

### very creative layouts
View transitions to enhance the experience 

### grid-lanes
Think of it like street lanes or traffic lanes.
You want to go home, the shortest way as possible.

.layout {
	.layout {
		display: grid;
		display: grid-lanes;
	}
1st thing to use grid lanes is:
display: grid-lanes;

2th thing you do is decide if you want cols/rows
Depending on which you use your display is going to change.

3th choose lane sizes

4th grid-column: span 2;
5 dictate specific lanes

### Defining lanes
The entire grid sizing syntax can be used. Fr, min-max

### Intrinsic lanes
repeat(auto-fill, auto);

### Flow

#### Flex

#### Multicol
One column after the another
#### Masonry
Almost like rows, except there's not a single row insight

Grid lanes places things differently than grid.
Grid-lanes reshuffles
Flow tolerance -> balancing your lanes.
Respect as much as possible the DOM order.
There's a property: tolerance: infinite;
The system is always going to assume you have the same amount of space between them

## Breaking with Habits - Manuel Matuzovic

I am constantly thinking about AI, 
There are smart and good ways of using AI and there's not so good bad ways of using AI.
Fully integrating AI into workflows can work against you because it can actually give you more work.

One more thing I wanted to talk about is CSS.
Voice input for code, you don't even have to touch a keyboard.
If it's a new way I don't know if I like that. I love what I do and I don't think I'll have as much fun using my voice and prompting. 

Mental Health > efficiency

Read
Learn
Grow

Explore!

I was trying to find new ways of writing css
### Reset style sheets
There used to be a time that reset stylesheets were useful.
Eric Meyer wrote a reset CSS style sheet which was useful.

Reset stylesheets are still a thing.
Elad Shechter, all: unset, display: revert.

A more modern css rest by Andy bell

	Min-height: 100vh;
	Line-height: 1.5;

#### Is there a way to improve writing CSS?
	Label:has (
	+ :where {
		Input:not([type="radio"]) {
			Display: block;
		}

	@starting-style

Popovers almost look like dialogs and that's not a good default if you ask me.

### Structure and organisation
For most of my career I've used the generic stuff, then select more specific elements.
From low specificity to higher.

Progressively increasing specificity, there is nothing that enforces these rules.
Luckily we have cascading layers

	@layer components {
		//styles here
	}

Layers define data, you can define sublayers which help with defining specificity.

Establish the order of layers upfront
Split up your css order. Every time you have a layer you're not creating a new one you're reusing them

### Scalability
Make your website more scalable and resistent
We're big fans of progressive enhancement.
If anyone looks at font-size scale, there could be a system behind it.
You can define a type scale. Base font-size at 16 px and then you multiply your base with a scale.
You can create a custom property

	:root {
	--scale: 1.26;
	--base: 1rem;

	--h6 calc(var(--base) * pow(var(--scale), var(--base));
	--h5 calc(var(--base) * pow(var(--scale), 1);
	--h4 calc(var(--base) * pow(var(--scale), 2);
	--h3 calc(var(--base) * pow(var(--scale), 3);
	--h2 calc(var(--base) * pow(var(--scale), 4);
	--h1 calc(var(--base) * pow(var(--scale), 5);
	}

But this has too much repetition:
So:

	:root {
		--scale: 1.26;
		--base: 1rem;
	}

Font-size: calc(var(--base) * pow(var(--scale), var(--font-factor, 0)))

matuzo.at/type-scale

### Customisation 
You can use custom properties to change the layout of a page/it looks like a switch statement in css

### Componentisation

Card component, if I want a large variation, using the style attribute, you can also use a
Class. You're not randomly applying classes to css there is a system. One of the advantages is that you have a container and 
You put the class on the parent so every child inherits the class.

olicss.com

## CSS Doom Laser - Niels Leenheer
I get obsessed sometimes, web standards, oscilloscopes, northern lights, lego, clocks..and so much more.
But mostly about the web. Lately my obsession has been making a lazer clock.

I've been fascinated by lazer projectors, I don't know how to connect one to my laptop.
oscilloscopes are really cool too even if they are not lazers.

### How I used css animations to draw a clock on an oscilloscope
Well not really, it's more..

### How I used web audio to blow up an 1980's oscilloscope and almost caused a fire.
It's 4 simple figures.
root: {
	--hours: 10;
	--minutes: 10;
	--seconds: 10;
}

@keyframes rotate-360 {
	from {transform: rotate(0)}
	to {transform: rotate(0)}
}

We need to generate two signals 1 for the x-plate and one for the y-plate.

Any shape can be expressed with these two.
Now how do we get our coordinates, we end up with an array of numbers.
We do this 30 times per second. We just get the css animations for free.

This is a clock on an oscilloscope, it's really cool but it's not power efficient (it's terrible). We can do so much more with this.
We can run any SVG + animation on this . You can run CSS and JS on this as well.

### Now what?
Redundancy.
My scope has exploded, I find myself on a 5 hour train, I have nothing todo so I build an oscilloscope simulator.

I created doom. It also works on the oscilloscope.
It looks great if you keep in mind that we are generating lines, and it is great but it isn't the real doom game. We have all this data, that got me thinking
We can recreate doom with css. Eventually I started adding more and more. The render is almost 100% CSS.

### But why?
Javascript should only do what only javascript can do. CSS can do this
The next question should probably be are you crazy??

Every wall/floor/ceiling is a div. Everything is transformed with 3d transformed
And passed to css as custom properties. We insert this into the DOM and CSS handles the rest.
It's not a full 3d scene which is why it translates so well to CSS.

We don't move around the word, the world moves around us. 
We just move the world as a whole the world is static. If we hove up the stairs the world moves down. 

Maybe you've already noticed that sprites like barrels are faced to the player. Billboarded using the play angle.

Doors, just a transition between two heights that's all there is to it.
The difficult part is collision.

We have all sort of things we can shoot like monsters and barrels. We use background position to show us the right angle. 
One important detail is that we're using steps animations. Fully automatic and powered by css.

Bullets are flying through space with a CSS animations. A new div is added to the DOM with CSS properties.
If we were to use the transform property we can't use transform again as it would overwrite the last transform.
It removes itself from the dom at the end of the animation.

When the player is moving around, you can see the player bob around. 
Always run the animation but have it on the paused state. When the user is running put it on the running state. CSS doom is responsive.
I've added multiplayer support and it's amazing that it actually works.
It's thousands of divs and CSS.

CSS was never meant to do this but it's amazing that it can do this.
It's quite playable for this. 

### But why stop here?
Is there more to this story, I created a CSS flamethrower!
Turns out that connecting a lazer to a computer is relatively easy because it also takes an X and Y.

## Forging Our Own Paths - Eric Meyer

Offset-path -> is widely available. Everyone that took the state of css 69% of people said they never head of it. 
There are a clot of options. 
ray(), inset(), xywh(), circle().

It creates a stacking context, 
ray(90deg at 0 50% sides) -> puts it in the centre left
The order of this doesn't really matter.

### Browser time

We have offset-distance, you can use a calc or a variable to give a distance. 

 xywh(10px 0px 380px 170px);
The rect also accepts a round variant where as the rest doesn't

Offset-rotate
Offset-anchor
shape()

## Modern UI Patterns - Una Kravets
AI - there is so much change right now and change is scary. What does this mean for us as developers? How does this effect what we do?

### How to build
I think it's really important to know what to build or how to build.
How do you know that you're making a high quality web experience.

I wanted to dig into what a good User experience was.

5 key UX principles 
1. Respect user preferences
2. Maximise content, reduce noice
3. Implement natural interactions
4. Provide guided navigation
5. Adapt to the form factor

### 1 Respect user preferences
Theming, motion. Think about the users context, the user being part of the design journey.

### 2 Maximise content, reduce noice
Avoid popups, on a web app you get an install our app, this is very bad.

### 3 Implement natural interactions
Intentional animation, view-transitions. Animation is going to trigger user interaction. Animating between states so your user is more forgiving

### 4 Provide guided navigation 

### 5 Adapt to the form factor
Leverage touch based intuitive interactions, consider minimum touch target sized, adapt the layout and UI pattern
