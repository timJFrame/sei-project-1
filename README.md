<H1>SEI-Project One: Pac Man </H1>
<h2>Project Brief</h2>
<p>Pac Man is a classic arcade game from the 80s. The player aims eat all the food in a maze whilst being hunted by ghosts.</p>

<p>This was the first project I completed in General Assembly’s Immersive Software Engineering course. In project one I was tasked with creating a single page game constructed from HTML, CSS and JavaScript only over a 7 day period</p>

<h2>Technologies used</h2>
<ul>
<li>HTML5 & HTML5 Audio</li>
<li>CSS</li>
<li>Vanilla JavaScript</li>
<li>Github</li>
<li>Google Fonts</li>
<li>Photoshop</li>
</ul>

<h2>The Game: Harry Paccer</h2>

# ![](images/md/title.jpg)      

<h3>Game Overview</h3>
<p>Harry Paccer is a Harry Potter themed Pac Man. A player must collect all the purple and green tokens, while avoiding the Voldemort ghosts. A player is given three lives each time a player comes into contact with a ghost they lose a life.</p>

<h3>How to Move Harry</h3>
<p>Harry is controlled using: ↑ ↓ ← →  arrow keys</p>

<h3>Game Instructions</h3>

<ol>
<li> When a player first arrives on the page they are greeted by an animated gif with a play game button to enter the game</li>


# ![](images/characters/landing-page.gif)

<li>Once the player has clicked the, 'Play Game' button they are taken to home page of game. Here the player is given a breif overview of the game on the left-hand side of the screen. On the right-hand side of the screen a player can begin the game, track there score, find out how many points a token is worth and see the amount of remaining lives available.</li>

# ![](images/md/home-screen.png) 

<li>To begin the game the player clicks the start game button. At this point 'Harry Paccer' will appear in the bottom right hand side of the screen and the voldermort ghost will start entering the game via the center box. As soon as the ghosts appear on the screen they will start moving towards Harry's direction.</li>


# ![](images/md/game-start.jpg) 

<li>From here the player needs to collect all the tokens on the board. If a player collects a green token the voldemort ghosts will begin to flash. When a ghost is flashing Harry won't lose any lives if he comes into contact with a ghost and is able to eat they ghost. This will send the eaten ghost back to its starting position. Also while a ghost is flashing its tracking function is disabled and they will only move in random movements.</li>

# ![](images/md/eaten-green-token.jpg) 

<li>If a player collects all the tokens thet are shown the wining message and once the player clicks on the 'ok' button they are taken back to the animated gif on the landing page.</li>

# ![](images/md/player-wins.png) 

<li>If a player loses they are shown the losing message and once the player clicks on the 'ok' button they are taken back to the animated gif on the landing page.</li>

# ![](images/md/player-loses.png) 
</ol>

<h2>Creating the Game</h2>

<h3>The Board</h3>
<p>I created the board in JavaScript by using a series of div’s in a 14x14 div grid that came to a total of 196 squares that were held in an array. Each character was applied to the board as a CSS background image and given a starting position that corresponded to the index position of a grid div in the array. This meant a character could be moved horizontally by increasing or decreasing the div index position by 1. For the vertical movement a characters div index would be increased by the width of the board to move down and decreased by the width of the board to move up.</p>

<p>To make the obstacles in the game I created a series of arrays that held the div index’s of the div’s that would be used as obstacles. For example all the right corner blocks would be held in one array and all the left-hand blocks would be in another. This allowed me to loop over each array and apply the images to the given divs index and also apply a data-id of ‘block’ to each obstacle. I found the data-ids really useful when it came to limiting the characters movement on the board. Both Harry and the Voldemorts would always test one div ahead of their position when they were moving. If a div contained a ‘block’ data-id the character would be prevented from moving any further.</p>

<h3>Functionality</h3>

<h4>Player Movement</h4>
<p>Next I implemented Harrys movement. Here I used a switch statement that checked what arrow key had been pressed using keyboard event keycodes. Once the keycode was determined the correct movement was returned by the switch statement. At this point I found that Harry would need to be rotated to give more realistic vertical movement and flipped to give a more realistic horizontal movement. For the vertical movement I used a series of classes with different degrees of rotation and for the horizontal movement I flipped the original Harry gif in photoshop and applied it to a new class. </p>

<h4>Voldemort Ghost Movement</h4>
<p>The next step was getting the Voldemort ghosts to move. The ghosts needed to move randomly but also track Harry’s movement. For the random movement I made an array of movements and created a function that would randomly pick a movement. From there I used an if statement that would apply the movement that corresponded to the randomly selected movement.</p>
<p>For the tracking movement I compared Harry’s position to the Voldemort’s position on the board and then used a series of if statements to move the ghosts closer to Harry.</p>

<code>
  	const voldemortMovements = ['left', 'right', 'up', 'down']

  	function randomiseVoldemortMovements(){
    return voldemortMovements[Math.floor(Math.random() * voldemortMovements.length)]
  	}

	 if (randomiseVoldemortMovements() === 'left'){
        //*Move Left
        if (cells[voldemorts[index].position - 1].dataset.id !== 'block'){
          voldemorts[index].position--
        } 
        //*Move Right
      } else if (randomiseVoldemortMovements() === 'right'){
        if (cells[voldemorts[index].position + 1].dataset.id !== 'block'){
          voldemorts[index].position++
        }
        //*Move Up
      } else if (randomiseVoldemortMovements() === 'up'){
        if (cells[voldemorts[index].position - width].dataset.id !== 'block'){
          voldemorts[index].position -= width
        }//*Move Down
      } else if (randomiseVoldemortMovements() === 'down'){
        if (cells[voldemorts[index].position + width].dataset.id !== 'block'){  
          voldemorts[index].position += width
        }
      }
</code>

<h3>Game Logic</h3>
<p>The first piece of game logic I began creating was a function that took a life from a player when the player came into contact with a ghost and moved Harry back to his initial starting point on the board. From there I moved onto creating a function that dealt with the player losing all three lives, displaying an error message and ending the game. At this point I created an ‘end of game’ function that could be easily updated to handle a winning game or a losing game when the logic can been created.</p>

<p>The next stage in my process was creating a function that dealt with harry eating tokens and adding each eaten token to the players score. Once this was working I created a function that to display a winning message when all the tokens on the board were eaten and incorporated this into the ‘end of game function’.</p>

<p>The last important piece of functionality was a function to be used when Harry ate a green token. When this happened all of the Voldemort ghosts had a new class applied for a short period of time. While the special class was applied the ghosts tracking logic was disabled and Harry would not lose any lives if he came into contact with a ghost and was also able to eat a ghost and send it back to its starting position.</p>

<p>At this point all the core logic of the game was working. From here I created another function that moved the Voldemort ghosts onto the board more smoothly. Prior to this it had been a bit janky. Then I created a game timer function that used a series of setIntervals and setTimeouts to get the game logic working in sync. Lastly I made a function that would play, ‘Hedwig’s Theme Song’ when a player clicked the ‘play game’ button on the home page.</p>

<h2>Challenges</h2>
<p>The game had a lot of moving pieces that needed to work in sync. I found this to be particularly true with the logic that was used to move the ghosts. Because I had one piece of logic that would randomly moved the ghosts at all times and another to track Harry, I found that the random movement logic at times would interfere with the tracking logic.</p>

<h2>Wins</h2>
<p>I feel that the biggest win for me wasn’t one single piece of code but being able to have multiple functions carrying out different tasks but at the same time working cohesively as one program. Building the game really taught me the importance of having a good plan, forming a clear direction and testing each piece of code as you write it. This whole process has really solidified my vanilla JavaScript skills.</p>


<h2>Future Features</h2>
<p>If I had more time, I would like to:</p>
<ul>
<li>Make the game mobile responsive and controllable on a touch screen</li>
<li>Make the ghost tracking logic more robust</li>
<li>Give the player options to be different characters</li>
<li>Add another level</li>
</ul>


