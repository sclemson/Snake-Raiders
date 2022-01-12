# Snake Raiders

## Project Overview
_Snake Raiders_ was designed as a twist on an old classic. The grid-based game was my first project on the General Assembly Software Engineering Immersive course and represented my first forays into utilising **JavaScript**.

Play _Snake Raiders_ [here](https://sclemson.github.io/Snake-Raiders/).

## The Brief
Our brief was to create a grid-based game using only **JavaScript**, **CSS**, and **HTML**.

For the _Space Invaders_ brief specifically, the requirements stated that:
- The player should be able to clear at least one wave of aliens.
- The player's score should be displayed at the end of the game.

## First Steps

I started out by sketching out some initial ideas for what I wanted my game screen to look like. This gave me a sense of proportion and the elements that would be needed within my HTML in particular. I wanted to go for an 8-bit aesthetic primarily because of the sense of nostalgia I associate with both the _Indiana Jones_ films and early computer games.

![SnakeRaidersSketchWF](https://user-images.githubusercontent.com/63468223/136580421-8c7192c6-74c9-423d-845a-8712cd598266.jpg)

## Day 1
I spent the first day of the project planning and trying to break the game down into manageable chunks. I created a list of features that I wanted the game to have, eventually splitting them into MVP and ‘nice-to-haves’.  Much of the day was spent writing pseudocode for the HTML, CSS, and JavaScript sections of the project. I knew that the movement of the aliens (or snakes in my case) was key to the game and working out how to manipulate the snakes array was one of my key challenges initially.

## Days 2 - 3
In the first instance, my MVP was simply to get to a place where my grid was created and the player could shoot one snake. With this plan in mind, I set about creating the grid and then passing all of the squares within the grid into an array. This enabled me to then place Indy in a constant position at the bottom of the grid, and my first snake at the top. I then designed two functions - **moveIndy** and **moveSnakes** - with the former taking user commands to move the main character and the latter using **setInterval** to ensure that the snakes moved backwards and forwards across the game screen consistently.

## Days 4 - 5
Once I had written the **moveSnakes** function I focussed on honing this so that it worked for multiple snakes over three rows on the grid. In order to do this, I set a **leftEdge** and a **rightEdge** on the screen and ensured that my **direction** variable changed value when a snake ‘hit’ that particular side of the grid.

My final challenge for my MVP was to ensure that the snakes could be ‘whipped’. In the first instance, I created a **whipIndex** to ensure that the whip moved up the grid after firing. My key focus from this point on was to remove the snakes if the whip came into contact with them. I solved this issue by creating a **whipped** class which pushed snakes that had been whipped into a separate array and hid that particular snake from view. A key issue here was that, when a ‘fired’ whip disappeared off the grid it didn’t disappear off the game screen itself, a problem which caused glitches in the game. I solved this by setting a ‘limit’ on the **whipIndex** so that **clearInterval** removed the whip once it hit the top of the grid.

## Day 6
With my MVP complete, I wanted to build in a ‘nice-to-have’ feature - the snakes attacking Indy. In order to do this, I used similar logic to the **whip** function with the addition of **Math.random** to ensure that the venom attacks from the snakes came from different snakes each time. Again, this function required a ‘limit’ to be set (but this time at the bottom of the grid) in order to ensure that the game played correctly.

The final pieces of game functionality were the scoring and lives systems. In order to complete these I altered the existing **attack** and **snakeAttack** functions to ensure that the player received points (or lost lives) based on whether they had hit a snake or whether they had been hit by venom. After this point, I then spent some time playing the game to try and get the level of difficulty right, particularly focussing on the speed that venom moved and the frequency with which the snakes ‘spat’ venom.

## Day 7
From the outset, I had known exactly what I wanted my game to look like. Across the breadth of the project, I had spent downtime in the evenings getting sprites, gifs, and backdrops ready so that I would be able to ‘slot’ these in at the end of the week. I used multiple tools to create these, utilising **Adobe Photoshop** in particular to generate 8-bit graphics, and Indiana Jones imagery. The look of the game came together relatively quickly as a result of this work and my key job on the final day became the ‘win’ screen that appeared, awarding Indy the idol. I built this by creating a separate class (called **winScreen**) which was the same size as the game grid, but only appeared once all of the snakes had been killed. The end result of the game screen and win screen looked like this:

<p float="left">
  <img src="https://github.com/sclemson/Snake-Raiders/blob/main/Images/Game%20Screen.png" width="45%" />
  <img src="https://github.com/sclemson/Snake-Raiders/blob/main/Images/Win%20Screen.png" width="45%" /> 
</p>


![Game Screen](https://github.com/sclemson/Snake-Raiders/blob/main/Images/Game%20Screen.png)![Win Screen](https://github.com/sclemson/Snake-Raiders/blob/main/Images/Win%20Screen.png)

Finally, I decided to add audio to try and inject a sense of humour into the game, incorporating the _Indiana Jones_ theme into the win screen and Indy’s famous ‘Snakes, why did it have to be snakes?’ quote into the start of the game.

## Featured Code
One of the key pieces of code I worked on over the course of the week was the **snakeAttack** function which encapsulates many of the key ideas that I have focussed on above. I chose to highlight this code in particular as, in many ways, this was the most complex piece of code in Snake Raiders as it incorporated the adding and removing of classes as well as the use of **Math** and **setInterval** to manipulate the difficulty of the game.

![snakeAttack](https://github.com/sclemson/Snake-Raiders/blob/main/Images/snakeAttack.png)

## Wins and Wishes
The biggest wins across the project for me were both my increased understanding of JavaScript and the confidence boost I got when the final design of _Snake Raiders_ came together. The look of the game was really consistent and I was very happy with the aesthetics.

With more time, I would have incorporated levels to the game, potentially changing the enemies that Indy faced as he progressed through the game. In addition, I would also have developed the ‘new game’ function so that, rather than this button refreshing the page, it reset the game completely instead.

## Key Takeaways
I was pleased with the project overall and delighted to go past my MVP and create something that looked so much like my initial sketch. My key takeaway from the project was to spend even longer planning and on pseudocode than I did - this ultimately, would have made the coding process much more efficient in the long run.






