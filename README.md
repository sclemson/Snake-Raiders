# Snake Raiders

## Project Overview
Snake Raiders was designed as a twist on an old classic. The grid-based game was my first project on the General Assembly Software Engineering Immersive course and represented my first forays into utilising **JavaScript**.

Play _Snake Raiders_ [here](https://sclemson.github.io/Snake-Raiders/).

## The Brief
Our brief was to create a grid-based game using only **JavaScript**, **CSS**, and **HTML**.

For the _Space Invaders_ brief specifically, the requirements stated that:
- The player should be able to clear at least one wave of aliens
- The player's score should be displayed at the end of the game

## First Steps

I started out by sketching out some initial ideas for what I wanted my game screen to look like. This gave me a sense of proportion and the elements that would be needed within my HTML in particular. I wanted to go for an 8-bit aesthetic primarily because of the sense of nostalgia I associate with both the Indiana Jones films and early computer games.

![SnakeRaidersSketchWF](https://user-images.githubusercontent.com/63468223/136580421-8c7192c6-74c9-423d-845a-8712cd598266.jpg)


## Initial Pseudocode

I then wrote out the first stages of my pseudo-code to give me a clear idea of how to start my project off.

**BOILERPLATE**

Link HTML, CSS, JS together



**HTML**

Header - change title ‘Snake Raiders’

Create body

`<main> class “game screen”`

`<h1>Snake Raiders`

`<div> class “grid”`

`<div> class “instructions” <p> inside`

`<button> “Start”`

`<div> class “instructions” <p> inside`

`<div> class “score” <p> <span> inside`

`<div> class “lives” <p> <span> inside`



**INITIAL CSS**

border box

`.grid {} set width and height, give border, display: flex, flex-wrap: wrap`

`.grid div {} set width and height (temporary border?)`

`.snakes {} just set a colour block`

`.indy {} set a different colour block`


**JS**

**Grid**

- `const grid = document.querySelector(‘.grid’)`

- for loop to create grid divs - needs to be 144(?) squares

- `const box`

- appendChild to put squares in grid


**Snakes**

- const snakes

- snakes need to move in an array.

- array should not be as wide as the game screen so snakes can go left and right


- const squares - put all squares on grid into an array

- pass snakes into the array (give snakes a class here)


**Indy**

- use the squares array created above

- pass Indy into the array in central square on bottom row


**function moveIndy**

- Arrow left 

- Arrow right

- NB remember to include parameters for movement (put in switch?)


**function moveSnakes**

- set parameters of movement left and right

- loop over the snakes and then assign it a different position (+1 or -1 in the array?)

- setInterval for this so that this occurs regularly



