---
title: 'Smashing Day 2'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'May 28 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'

---

dina amin
			Some of yall need wimsy in your life. this is wimsy

			Kevin 
			Media queries vs container queries
			Grid-template-colums + mediaqueries you need a magic number if the padding is smaller

			With container you can use a when container + grid is calc(200px * 3 + 2rem)
			Consistent no matter what you do. Downside you have to hardcode the container size but you'd rather have that than a magic number. 
			Media query takes the font size from your browser.
			Container uses the font size from its container.

			If you change the font size with mediaqueries the style overflows, container styles dont

			Width > 90ch
			Ch is character width, so 90/3 is 30 at 30 char width the card changes style.


			Container with a min width of 75vw, 

			@contianer wrap-derector (inline-sixe > 75cqi)
			Block-size: 10vb;

			Container queries are only getting better

			Container style queries, not available in firefox. 

			Container styles: you alcan appy diffrent styles to the same layout 

			Container scroll-state()
			Can detect if a container is scrollable
			You can detect which side someone scrolled in a containe. You can detect when a card is snapped: 
			@container scroll-state(snapped: inline)
			Scale: 1 

			Scales the image once its snapped to the center of the carousel.

			Sticky header:
			Instead of relying on js you just say
			Conyainet scroll-state(stuck: top)

			Scrolled: bottom
			//make changes to bottom. 
			Translate: -100%
			When you scroll back up the header appears again

Mediaqueries look at thr WHOLE page
But container cab adapt to the size that they have available. We cab contitonally change layouts
They look like a media query but they can do a lot more.
