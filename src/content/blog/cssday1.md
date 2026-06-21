---
title: 'CSS Day 1'
description: 'Lorem ipsum dolor sit amet'
pubDate: '11 Jun 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

## What the color?! - Lea Verou
So many awsome color developments in css,
OkLCh/Chroma

Why is it when I try to match a color it doesnt match?

Print colors being duller in real life than on a screen

Schreen not being able to show what color something looks lime irl

We go back to the begining

RGB,
When we first got screens with color 
Hex colros are basically binary problem if you use a diff device you will see diffrent colors.
Same coordinates diffrent colors.

Standardize rgb spaces to the rescue
0-255 modern screens support 0-1023
This still means diffrent things on diffrent screens

Standardize rgb spaces
Srgb uses 
Display p3
Rec.2020

Red is srgb red, notyour screens brightest red. Same with hex, rgb


Color gamut
Range of displayable colors
Depends on primaries, red green blue. So often dhown as a triangle

All rgb spaces have one

If any componenent is outside of 0,1 ots invalid

CMYK s gamut is way smaller
Whoch is my the colors look more washed out.

Prohjector, why cant we see anything when theres ambient light? 

What happens when you render a color out of gamut color?
The screen will just clip it.  Its going to overflow and reject it. If its over 1 it turns it into 1.  A mapped color can be clipped and that changes the color into a diffent color instead of the intended one. 

Gamut mapping playground
Rgb feels too all over the place to pick the color you want to get and is not how humans think about colors

Some kind of name, dark beige, dark brown it is never ever: "about 60% red, a little less green and even less blue."

Polar color spaces
Hsl hwb lch oklch
Interpolalation
https://elements.colorjs.io/

## Lets fix the webs text size - Josh Tumath

- resize text, reflow wcag 2.2 sucess criteria
- always use rem/em 
- use rem/em in mediaqueries
Text size not changing in appz why has this happend? Because its a web view. 
Abiut 37% of people change their text size on iso and android

Why doesnt this work were following all the best practises?
On firefox everything gets bigger. It will do zoom on text scale.

If you increase scale on mac nothing happens on browsers.
On windows 11 the opissite happens everything gets bigger.

But you can increase it on browsers.

So why dont we do it for websites?
Examples for diffrent websites:

Whta happens is the nav bar gets obbsured by thw search bar 
If we go on blue sky theres a slightly overflowing menu
On apples websites we get a truncated nav

Linkedins searchbar gets squashed ... truncation text doesnt fit on the page.

Our websites are not ready for text scaling.

Csswg
1 pem = prefered em
This was a fail, the problem with jt youve already worked so hard to use rem so it was not logical to make people change it to pem.

Meta tag that would do wjat you want - sets text size to what user wants.

	<meta name="text-scale" content="scale">
env(preferred-text-scale)

medium = 16px

Limited availablility for color-sceme

### how to test text scaling
We can test it on desktop browsers
Simulate how it would look on mobile schreens. Safari options -> shortcut to make text bigger/smaller

Set viewport to 320px is the content readable? Does the content overflow the viewport horizontally?

- Do moblie first with the text scaled up.
- Dont touch the default font size
Px turn off any text scaling
- Be very carefull before using px units for layouts, main content gets squashed
- when should you use px units? For spacing.

Use cintainer queries instead of media queries.

- Becareful when setting fixed height/width on elements, things overflow

- watch out for massive headings
Font-size × (rate of increase × (preferred-te t-scale - 1) +1) 
Can also be done is @function

- be ready to opt-in to text scaling

## The value pipeline - Jelle Raaijmakers
Lady bird
Written in c++ and rust. Based on web standerds. 
- written From scratch
- more people started working on the project and they could run old reddit
- acid 3 as an early milestone
- wpt web platform tests over 2 milion tests in there
- wrote a new js engine from scratch (LibJS)
- CSS part of Ladybird is also written from scratch

Stylesheeth text - declared - cascaded
- specified - computed - used - actual

Csscated one property one winner, specificity in css selectors.
Priority, force it with imoortant therese are all thibgs that have impact on the castcating logic.

Specified values: blanks filled, if values are nlt set it should refert to its initial values. Aniamtions mess up everything. 

Comopted values: same css values , comouted the value based on the context

Used
This is the part where we have run the layout engine. Transform 50% into acyaul pixels for the screen

Actual
This is where we do all the stuff that actually maters to get the stuff you see on the screen getComputedStyle() 
After output adjustments

##  Putting the C in CSS Crimes - Lyra Rebane
X86 css 
Learned css in cohost
Cohost 22
Uses detail element
Styli g it bu making it look like a wondow
Style it with absolute and tadaa.

Make a point and click adventure game.

Click on pixel keep cycling trough colors. 
Details + summary from before and places them inside eachother. Details of specific  sizes on them open and close them.

Hacky way to make pixel colors. Calc + absolute. 

Cohost was shut down sadly.

Click the Checkbox and it has something.
Logic gates with checkboxes

The x86 architecture
What is x86 cpu arcitecture. Began the intel 8086/1978

Is c a real programming language
C is 
C can compile intk x86 assembily

The cpu hack
If you want to ahev a loop you can do it.

Use keuframes and container style queries. Controlls animations.
 To add more meory we can add mkre memory
To access the memory where going to make a funtion that takes an int.
Every if has a statement that checks if we write into it.

Instruction pointer
What we do from here we make it read out the instuction then we mame jt cycle trhough the program. We can use thta to replace styles.

We dont have any real instruction
Move a value into a register 
Add math ADD SUB, MUL, DIV
a = (100 + 91 ) * 7
 

We have a cpu with no logic,
Lets add logic!
You can add c code in css!!!

## color-scheming - Sara Joy
Building light and dark modes in modern css
Dark mode vs light mode
Physical reasons to like or dislike 
Light mode has too much contrast
Floaters are more noticable with light
 Why light mode?
Pupils become smaller, its easier to focus.
Astigmatism makes light text hard to read on dark mode, can cause headaches.
 Why not both?
Color scheme is widly available in browsers
Light-dark() newly available 
Color-mix
System colors
Contrast-color 
:has()

Theres already a dark theme built into defaukt html. It does a lot of things for yiu already. We dont need css for this.

	<Meta name="color-scheme">
Or
Root
Color scheme

Contrast-color choices black or white text based on backgroupnd contrast.
You can use it but avoid the mid tones on it.

:has only works on one page if you hace multiple pages it switches back

You need js for that.

Buttons woth onclick, 
Function switchDark () {
Html.style.setProperty()
}
Use sessions storage or local storage to keep the colorscheme checked for the other pages as well.

Mode = lovalstorage.getitem("mode")

Aria-pressed voor buttons true of false voor welke mode wel of niet is enabled

Css when
Button[aria-pressed=true]
// active styles here.

## Cranking View Transitions up to 11 - Bramus van Damme

Safely maybe...
Create vidual tranitions between webpages.

3 easy steps, 

1. Identify a name for the transition. Try to look for similarities on the pages. view-transition-name: name;
2. Trigger the view transition, @view-transition {navigation: auto;}
3. Customise the animations (optional)
Resume rendering

Browser support for firefox is still in progress.

Respect user prefrences or change transitions to be less extreem

Cranking them up:
Add names to elements on html page
1 view transition that animates everything on a card.
 Can setup diffrent times for diffrent elements so they animate at diffrent times, ex a text stagger.
View-transition-group
Background:clip

How to make it scroll-driven?
View transitions toolkit website.

Nest view transitions and play 2 view transitions at the same time.

## Customisable select and the friends we make along the way - Jake Archibald

1993 html was designed
Field element
Select element with option element

We can style

	<select>

EdgeHTML was better at accesiblity stuff on the select element.

Gregs survey
Digged into select buttons
Devs recreated a select box, this was a problem wirth solving because this was compromising user accesiblity.
Form elements are an html thing.

	<popup> element proposal
	<popover> element is widely supported now.

Div popover 
Can add popover too any element.

Dialog elemwnt came before that.

Css position-try: flip-block = flips the selector option list to the top.

	calc-size(min-content, min(size, 16rem))
	<selectmemu> element proposal -> plans changed just use <select>
Select {
appearance: base-select;
&::picker(select) {
appearance: base-select }
}

::picker-icon = arrow in the button
Option::checkmark = checkmark in the option

Option:checked = the selected option

optgroup -> looks bad but you can adda  legend element in there.

attr function in css.

## Take aways:
color gamuts are interesting, want to use the deatails tag for my blog site so I can create a 
low effort pop over. View transitions have come a long way, its time to use them!
use a type scale thing for headings.