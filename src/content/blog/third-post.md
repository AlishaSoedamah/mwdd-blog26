---
title: 'Nils Binder - WN 3'
description: 'Lorem ipsum dolor sit amet'
pubDate: '4 Mar 2026'
heroImage: '../../assets/a.jpg'

---

# WN 3
## Nils Binder
## On Creativity on the web

Nils from 9 elements.
Nils is still a UX designer, he works for FC Schalke 04. Did the UX design for the app -> biggest project he's worked on

OECD -> worked on an internal project and is still working on a project

CSS day 2023 felt boring

Back in the day everyone used photoshop to design websites. Now people use figma 
to design websites. Figma's layout aligns with css properties, can use variables for colors.

So we have these great tools but what kind of websites are we designing?

<img src="img/wire.png">

ChatGPT
Figma
Tailwind
React
are cool but also create boring websites

When designing a layout don't look at pixels, look at the layout.

```html
.fancy-text {
	display: grid;
	grid-template-columns: 2fr 3fr auto 1fr;
}

h1 {
	grid-column: 2/4;
}

p {
	grid-column: 3/4;
}
```

The website for R26
[r26.ruhr](https://r26.ruhr/)
didn't use a video instead they used an image script. It's a script with 31 images that's like a flipbook. 

```
animation: stop-motion 3s steps(31,end) infinite;
```

### subgrid
When you define a grid you can use another grid in it to make more interesting layouts.

[blog about subgrid timetable](https://9elements.com/blog/building-a-multi-stage-timetable-with-modern-css-using-grid-subgrid-round-and-mod/)


we like todo layouts that are not just centered 
[ernst+co](https://ernst-co.com/de/)
 
You can select a first line in a text with the first-line selector
```html
 p::first-line {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}
```

[Bonabry](https://www.bonabry.de/en/)
A good example of using viewtransitions

[Bonamic](https://www.bonamic.de/)
Theres a lot of subgrid going on to make this possible. It's nice to 
see something that's diffrent.

Usaly designers give a 2d design without animations, it's up to you as a creative coder to think of the animations.
