

function init (){

  //* Dom Variables
  const grid = document.querySelector('.grid')
  const life1 = document.querySelector('.life1')
  const life2 = document.querySelector('.life2')
  const life3 = document.querySelector('.life3')
  const playerScoreString = document.querySelector('.player-score span')
  const startButton = document.querySelector('.start-button')
  const gamesound = document.querySelector('audio')
  const mainPageContent = document.querySelector('main')
  const landingPageButton = document.querySelector('.landing-page-button')
  const landingPageDiv = document.querySelector('.landing-page')
  const endOfGameMessageDiv = document.querySelector('.end-of-game-message-div')
  const endOfGameMessageText = document.querySelector('.end-of-game-message')
  const endOfGameButton = document.querySelector('.end-of-game-button')

  //*Game variable
  const cells = []
  const width = 14
  const gridCellCount = width * width
  let harryPosition = 180
  const harryClass = 'harry'
  let harryLives = 3
  let playerScore = 0
  let gameTimer = null
  const isGameOverPlayerLost = 'no'
  let isGameOverPlayerWon = 'no'
  const voldemortClass = 'voldemort'
  let didHarryEatSpecialFood = 'no'
  let isGameStarted = 'no'
  let didHarryEatSpecialFoodDelayTimer = null
  
  const voldermortOneTimer = null
  const voldermortTwoTimer = null
  const voldermortThreeTimer = null
  const voldermortFourTimer = null

  

  //!-------------------FUNCTIONS--------------------------------------


  //*Landing page 
  mainPageContent.style.display = 'none'

  function handleShowGameClick(){
    gamesound.src = '../audio/good-luck.wav'
    gamesound.play()
    mainPageContent.style.display = 'flex'
    landingPageDiv.style.display = 'none'
  }

  //*Hide end of game button
  endOfGameMessageDiv.style.display = 'none'



  //*Board Functions
	
  //*Creates grid for game
  function createGameGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      // cell.innerHTML = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  //*Running function to create grid
  createGameGrid()

 

  //*Creates border for game
  function createGameBorder(){
    for (let i = 1; i < 13; i++){
      cells[i].classList.add('top-border')
      cells[i].setAttribute('data-id', 'block')
    }
	
    for (let i = 183; i < 195; i++){
      cells[i].classList.add('bottom-border')
      cells[i].setAttribute('data-id', 'block')
    }

    for (let i = 14; i < 182; i += 14){
      cells[i].classList.add('left-side-border')
      cells[i].setAttribute('data-id', 'block')
    }

    for (let i = 27; i < 195; i += 14){
      cells[i].classList.add('right-side-border')
      cells[i].setAttribute('data-id', 'block')
    }

    cells[0].classList.add('top-left-corner-border')
    cells[0].setAttribute('data-id', 'block')
    cells[13].classList.add('top-right-corner-border')
    cells[13].setAttribute('data-id', 'block')
    cells[182].classList.add('bottom-left-corner-border')
    cells[182].setAttribute('data-id', 'block')
    cells[195].classList.add('bottom-right-corner-border')
    cells[195].setAttribute('data-id', 'block')
  }

  //*Running function to create border
  createGameBorder()

  //*Creates Blocks for Game
  function createGameBlocks(){
    //*Builds bottom left corner blocks
    const bottomLeftCornerBlockArray = [58, 65, 62, 89, 100, 108, 156, 163, 160]
    bottomLeftCornerBlockArray.forEach(item =>{
      cells[item].classList.add('block-bottom-left-corner')
      cells[item].setAttribute('data-id', 'block')
    })
    //*Builds bottom right corner blocks
    const rightBottomCornerArray = [60, 67, 63, 92, 109, 158, 165, 161, 101]
    rightBottomCornerArray.forEach(item => {
      cells[item].classList.add('block-bottom-right-corner')
      cells[item].setAttribute('data-id', 'block')
    })

    //*Builds top left corner blocks
    const topLeftCornerArray = [30, 37, 34, 86, 94, 128, 135, 118, 75 ]
    topLeftCornerArray.forEach(item => {
      cells[item].classList.add('block-top-left-corner')
      cells[item].setAttribute('data-id', 'block')
    })

    //*Builds top right corner blocks
    const topRightCornerArray = [32, 39, 35, 78, 87, 130, 137, 119, 95]
    topRightCornerArray.forEach(item => {
      cells[item].classList.add('block-top-right-corner')
      cells[item].setAttribute('data-id', 'block')
    })

    //* Builds top blocks
    const topBlockArray = [31, 38, 129, 136]
    topBlockArray.forEach(item => {
      cells[item].classList.add('block-top-side')
      cells[item].setAttribute('data-id', 'block')
    })

    //*Builds bottom blocks
    const bottomBlockArray = [59, 66, 157, 164]
    bottomBlockArray.forEach(item =>{
      cells[item].classList.add('block-bottom-side')
      cells[item].setAttribute('data-id', 'block')
    })

    //*Build right blocks
    const rightBlockArray = [46, 53, 49, 144, 151, 133, 147]
    rightBlockArray.forEach(item =>{
      cells[item].classList.add('block-right-side')
      cells[item].setAttribute('data-id', 'block')
    })

    //*Builds left blocks
    const leftBlockArray = [44, 48, 51, 132, 142, 146, 149]
    leftBlockArray.forEach(item => {
      cells[item].classList.add('block-left-side')
      cells[item].setAttribute('data-id', 'block')
    })
  }

  //*Running function to create blocks
  createGameBlocks()
 
  //*Creates purple food for game
  const foodArray = [15,16,17,18,19,21,22,23,24,25,26,29,33,36,40,43,47,50,54,57,61,64,68, 71,72,73, 74, 79,80, 81,82,85,88,93,96,102,103,104,105,106,107,113,114,115,116,117,120,121,122,123,124,127,131,134,138,141,145,148,152,155,159,162,166,169, 170, 171, 172, 173,175, 176, 177, 178,179,180]
  foodArray.forEach(item =>{
    cells[item].classList.add('food')
  })

  //*Creates green food for game
  const specialFoodArray = [99,110,20,174]
  specialFoodArray.forEach(item =>{
    cells[item].classList.add('power-up')
  })


  //*------------------------------Harry Movement Logic------------------------------

  //* Adds Harry to a div
  function addHarry(){
    cells[harryPosition].classList.add(harryClass)
  }
	
  //*Removes Harry
  function removeHarry(){
    cells[harryPosition].classList.remove(harryClass)
  }
	
  //*Flips harry to face right
  function flipHarry(){
    cells[harryPosition].classList.add('flip-harry')
  }

  //*Removes flips harry class
  function removeFlipHarry(){
    cells[harryPosition].classList.remove('flip-harry')
  }
	
  //*Rotates harry 90 degrees
  function rotateHarryUp(){
    cells[harryPosition].classList.add('rotate-harry-up')
  }

  //*Removes 90 degree rotation
  function removeRotateHarryUp(){
    cells[harryPosition].classList.remove('rotate-harry-up')
  }

  //*Rotates harry -90 degrees
  function rotateHarryDown(){
    cells[harryPosition].classList.add('rotate-harry-down')
  }

  //* Removes -90 degree rotation
  function removeRotateHarryDown(){
    cells[harryPosition].classList.remove('rotate-harry-down')
  }

  

  //*Handles harrys movement when a player uses an arrow key and only runs when start button is clicked
  function handleKeyUp(e){
    if (isGameStarted === 'yes'){
      

      removeHarry()
      removeFlipHarry()
      removeRotateHarryUp()
      removeRotateHarryDown()
    
      const horizontalPosition = harryPosition % width
      const verticalPosition = Math.floor(harryPosition / width)

		
      switch (e.keyCode){
        case 39: //*Move Right
          if (horizontalPosition < width - 1 && cells[harryPosition + 1].dataset.id !== 'block') 
            harryPosition++
          flipHarry()
          harryLosesLife()
          harryEatsFood()
          harryEatsSpecialFood()
          
          break
        case 37://*Move Left
          if (horizontalPosition > 0 && cells[harryPosition - 1].dataset.id !== 'block') 
            harryPosition--
          addHarry()
          harryLosesLife()
          harryEatsFood()
          harryEatsSpecialFood()
          
          break
        case 38://*Move Up
          if (verticalPosition > 0 && cells[harryPosition - width].dataset.id !== 'block')
            harryPosition -= width
          rotateHarryUp()
          harryLosesLife()
          harryEatsFood()
          harryEatsSpecialFood()
          
          break
        case 40://*Move down
          if (verticalPosition < width - 1 && cells[harryPosition + width].dataset.id !== 'block') 
            harryPosition += width
          rotateHarryDown()
          harryLosesLife()
          harryEatsFood()
          harryEatsSpecialFood()
          
          break
        default:
          console.log('invaild key')
     
      } 
      //
   
      addHarry()
    }
    
  }
  

  //*----------------------------------Voldemort Movement Logic----------------------------

  //*Array of objects holding four Voldemort ghosts
  const voldemorts = [
    {
      name: 'voldemortOne',
      position: 90,
     
    },
    {
      name: 'voldemortTwo',
      position: 91,
      
    },
    {
      name: 'voldemortThree',
      position: 76,
      
    },
    {
      name: 'voldemortFour',
      position: 77,
      
    }
  ]
  
  //*Adds Voldemort ghost to page
  function addVoldemorts(index){
    cells[voldemorts[index].position].classList.add(voldemortClass)
  }

  //*Removes voldermort from pages
  function removeVoldemorts(index){
    cells[voldemorts[index].position].classList.remove(voldemortClass)
  }

  //*Adds Special Voldemort ghost to page
  function addSpecialVoldemorts(index){
    cells[voldemorts[index].position].classList.add('special-ghost')
  }
  
  //*Removes Special voldermort from pages
  function removeSpecialVoldemorts(index){
    cells[voldemorts[index].position].classList.remove('special-ghost')
  }
 
  //*Array used in if statement to move voldemort ghosts
  const voldemortMovements = ['left', 'right', 'up', 'down']

  //*Returns a random movement
  function randomiseVoldemortMovements(){
    return voldemortMovements[Math.floor(Math.random() * voldemortMovements.length)]
  }

  //*moveVoldemort controls the random movement of the voldemort ghosts using setInterval timer
  function moveVoldemort(index, timer){
    
    if (timer){
      return
    }
   
    //*Tests if harry has eaten green food if so sets class to special ghost
    timer = setInterval(() => {
      if (didHarryEatSpecialFood === 'yes'){
        removeSpecialVoldemorts(index)
        removeVoldemorts(index)
      } else if (didHarryEatSpecialFood === 'no') {
        removeSpecialVoldemorts(index)
        removeVoldemorts(index)
      }
     
      
      if (randomiseVoldemortMovements() === 'left'){
        
        //*Move Left
        // if (didHarryEatSpecialFood === 'yes'){
        //   voldemorts[index].position
        // } else 
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

      //*Checks to see if game is over and ends timer
      if (isGameOverPlayerLost === 'yes' || isGameOverPlayerWon === 'yes'){
        stopTimer(timer)
        
      }

      if (didHarryEatSpecialFood === 'yes'){
        addSpecialVoldemorts(index)
      } else if (didHarryEatSpecialFood === 'no') {
        addVoldemorts(index)
      }
    }, 300)
   
  }

  const harryHorizontalPosition = harryPosition % width

  //*Stops timer inside moveVoldemort Function
  function stopTimer(timer){
    clearInterval(timer)
  }

  // //*Functions tracks harrys movement
  function trackHarry(index){
    removeVoldemorts(index)
    if (harryHorizontalPosition > 7 && cells[voldemorts[index].position + 1].dataset.id !== 'block'){
      voldemorts[index].position++
      
    } 
    if (harryPosition > voldemorts[index].position && cells[voldemorts[index].position + width].dataset.id !== 'block'){
      voldemorts[index].position += width
    }
    if (harryHorizontalPosition < 7 && cells[voldemorts[index].position - 1].dataset.id !== 'block'){
      voldemorts[index].position--
    }
    if (harryPosition < voldemorts[index].position && cells[voldemorts[index].position - width].dataset.id !== 'block'){
      voldemorts[index].position -= width
    }
    addVoldemorts(index)
  }

 
  //*Moves voldemorts ghost out of holding box to the right of the page
  function moveOutRight(index){
    const timer = setInterval(()=> {
      removeVoldemorts(index)
      if (cells[voldemorts[index].position + width].dataset.id !== 'block'){
        voldemorts[index].position += width
       
      } if (cells[voldemorts[index].position + 1].dataset.id !== 'block'){
        voldemorts[index].position++
    
      }
      addVoldemorts(index)
    }, 400)
    setTimeout(() =>{
      clearInterval(timer)
    }, 1500)  
  }

  //*Moves voldemorts ghost out of holding box to the of the page
  function moveOutLeft(index){
    const timer = setInterval(()=> {
      removeVoldemorts(index)
      if (cells[voldemorts[index].position + width].dataset.id !== 'block'){
        voldemorts[index].position += width
      
      } if (cells[voldemorts[index].position - 1].dataset.id !== 'block'){
        voldemorts[index].position--
        
      } 
      addVoldemorts(index)
    }, 400)
    setTimeout(() =>{
      clearInterval(timer)
    }, 1500)  

  }

  //*Closes box holding voldemort ghosts
  function closeHoldingBox(){
    cells[90].classList.add('block-bottom-side')
    cells[91].classList.add('block-bottom-side')
    cells[90].setAttribute('data-id', 'block')
    cells[91].setAttribute('data-id', 'block')
  }

  function removeHoldingBox(){
    cells[90].classList.remove('block-bottom-side')
    cells[91].classList.remove('block-bottom-side')
    cells[90].removeAttribute('data-id', 'block')
    cells[91].removeAttribute('data-id', 'block')
  }
  

  //**---------------------------------Harry life and Eating Functions------------------------- */

  //*Moves harry back to original starting position and removes one life when Harry intersects with Voldemort
  function harryLosesLife(){
    
    if (cells[harryPosition].className.includes('voldemort')){
      
      for (let i = 0; i < cells.length; i++){
        cells[i].classList.remove('harry')
        cells[i].classList.remove('flip-harry')
        cells[i].classList.remove('rotate-harry-up')
        cells[i].classList.remove('rotate-harry-down')
      }
      harryLives -= 1
      harryPosition = 180
      addHarry()
      if (harryLives === 2){
        life1.style.display = 'none'
      } else if (harryLives === 1){
        life2.style.display = 'none'
      } else if (harryLives === 0){
        life3.style.display = 'none'
        playerLost()
      }
    }
  }

  //*Displays message when player loses
  function playerLost(){
    grid.style.display = 'none'
    endOfGameMessageText.innerHTML = 'The Dark Lord Has Prevailed'
    endOfGameMessageDiv.style.display = 'flex'
  }

  //*Displays message when player wins
  function playerWon(){
    grid.style.display = 'none'
    endOfGameMessageText.innerHTML = 'Well Done Harry Paccer'
    endOfGameMessageDiv.style.display = 'flex'
  }

  
  function harryLosesLifeFromVoldemortsView(index){
    if (cells[voldemorts[index].position].className.includes('harry')){
      
      for (let i = 0; i < cells.length; i++){
        cells[i].classList.remove('harry')
        cells[i].classList.remove('flip-harry')
        cells[i].classList.remove('rotate-harry-up')
        cells[i].classList.remove('rotate-harry-down')
      }
      harryLives -= 1
      harryPosition = 180
      addHarry()
      if (harryLives === 2){
        life1.style.display = 'none'
      } else if (harryLives === 1){
        life2.style.display = 'none'
      } else if (harryLives === 0){
        life3.style.display = 'none'
        playerLost()
      }
    }
  }
 
  //*Function runs when harry eats food
  function harryEatsFood(){
    if (cells[harryPosition].className.includes('food')){
      cells[harryPosition].classList.remove('food')
      playerScore += 5
     
      playerScoreString.innerHTML = playerScore
      if (playerScore > 449){
        playerWon()
      }
    }
  }
  //*Function Runs when harry eats special food
  function harryEatsSpecialFood(){
    if (cells[harryPosition].className.includes('power-up')){
      removeHoldingBox()
      cells[harryPosition].classList.remove('power-up')
      playerScore += 20
      console.log(playerScore)
      playerScoreString.innerHTML = playerScore
      if (playerScore > 449){
        isGameOverPlayerWon = 'yes'
        console.log('met')
        playerWon()
      }
      didHarryEatSpecialFood = 'yes'
      console.log(didHarryEatSpecialFood)

    }
  }

  //*Tests if harry has eaten special food and ecounters voldemort he can eat voldemort and voldmeort will be moved to holding box
  function harryEatsVoldemort(index, newPosition){
    if (cells[harryPosition].className.includes('special-ghost')){
      removeSpecialVoldemorts(index)
      voldemorts[index].position = newPosition
      addSpecialVoldemorts(index)
    }
  }

  //* If harry eats special food a varibale is changed to yes and setTimeOut is started. After 9 seconds the setTimeout its disabled and the same variable is turnded to 'no'
  function removeSpecialVoldemortClass(){
    if (didHarryEatSpecialFood === 'yes'){
      didHarryEatSpecialFoodDelayTimer = setTimeout(()=> {
        didHarryEatSpecialFood = 'no'
      }, 9000)
      didHarryEatSpecialFoodDelayTimer = null
      console.log(didHarryEatSpecialFood)
    }
  }

  

  //*------------------------------------Start game and End game functions----------------------------------

  function handleGameStart(){

    setTimeout(() =>{
      isGameStarted = 'yes'
    }, 2500)  

    addHarry(harryPosition)

    //*Sets the source for background music
    gamesound.src = 'https://ia801309.us.archive.org/28/items/HarryPotter-hedwigTheme/Harry_Potter_Theme_Song_Hedwigs_Theme.ogg'

    gamesound.play()
  
    //*Moves GhostOne out and away from holding box
    moveOutRight(0)
    setTimeout(()=>{
      moveVoldemort(0, voldermortOneTimer)
      
    }, 1500)

    //*Moves Ghost Two out and away from holding box
    moveOutLeft(1)
    setTimeout(()=>{
      moveVoldemort(1, voldermortTwoTimer)
      
    }, 1500)

    //*Moves Ghost four out and away from holding box
    setTimeout(() => {
      moveOutRight(3)
      setTimeout(()=>{
        moveVoldemort(3, voldermortThreeTimer)
       
      }, 2000)
    }, 3000)

    //*Moves ghost three out and away from holding box
    setTimeout(() => {
      moveOutLeft(2)
      setTimeout(()=>{
        moveVoldemort(2, voldermortFourTimer)
        
      }, 2000)
    }, 3000)


    //*Closes box that holds voldemort
    setTimeout(() =>{
      closeHoldingBox()
    }, 6000)
    

    if (gameTimer){
      return
    }

    gameTimer = setInterval(() =>{

      startButton.style.visibility = 'hidden'

      harryEatsVoldemort(0, 90)
      harryEatsVoldemort(1, 91)
      harryEatsVoldemort(2, 76)
      harryEatsVoldemort(3, 77)

      //*Sets a 9 second window where voldemort can be eaten by harry
      removeSpecialVoldemortClass()

      if (didHarryEatSpecialFood === 'no' ){
        trackHarry(0)
        trackHarry(1)
        trackHarry(1)
        trackHarry(3)
      }

      // //*Searches 1 div radius for harry
      // if (didHarryEatSpecialFood === 'no'){
      //   voldemortTrackingFunction(0, 1, 14, 1)
      //   voldemortTrackingFunction(1, 1, 14, 1)
      //   voldemortTrackingFunction(2, 1, 14, 1)
      //   voldemortTrackingFunction(3, 1, 14, 1)
      // }
      
      // //*Searches 2 div radius for harry
      // if (didHarryEatSpecialFood === 'no'){
      //   voldemortTrackingFunction(0, 2, 28, 2)
      //   voldemortTrackingFunction(1, 2, 28, 2)
      //   voldemortTrackingFunction(2, 2, 28, 2)
      //   voldemortTrackingFunction(3, 2, 28, 2)
      // }
      // //*Searches 3 div radius for harry
      // if (didHarryEatSpecialFood === 'no'){
      //   voldemortTrackingFunction(0, 3, 42, 3)
      //   voldemortTrackingFunction(1, 3, 42, 3)
      //   voldemortTrackingFunction(2, 3, 42, 3)
      //   voldemortTrackingFunction(3, 3, 42, 3)
      // }
      // // //*Searches 4 div radius for harry
      // if (didHarryEatSpecialFood === 'no'){
      //   voldemortTrackingFunction(0, 4, 56, 4)
      //   voldemortTrackingFunction(1, 4, 56, 4)
      //   voldemortTrackingFunction(2, 4, 56, 4)
      //   voldemortTrackingFunction(3, 4, 56, 4)
      // }
      // // //*Searches 5 div radius for harry
      // if (didHarryEatSpecialFood === 'no'){
      //   voldemortTrackingFunction(0, 5, 56, 5)
      //   voldemortTrackingFunction(1, 5, 56, 5)
      //   voldemortTrackingFunction(2, 5, 56, 5)
      //   voldemortTrackingFunction(3, 5, 56, 5)
      // }


      if (didHarryEatSpecialFood === 'no'){
        harryLosesLifeFromVoldemortsView(0)
        harryLosesLifeFromVoldemortsView(1)
        harryLosesLifeFromVoldemortsView(2)
        harryLosesLifeFromVoldemortsView(3)
      }

    }, 1000)

  }
  
  //** Reloads page when game ends 
  function handleEndOfGameClick(){
    location.reload()

  }

  // function noScroll() {
  //   window.scrollTo(0, 0)
  // }


 
  //!-------------------EVENT HANDLER--------------------------------------
  // window.addEventListener('scroll', noScroll)
  document.addEventListener('keyup', handleKeyUp)
  startButton.addEventListener('click', handleGameStart)
  landingPageButton.addEventListener('click', handleShowGameClick)
  endOfGameButton.addEventListener('click', handleEndOfGameClick)


}

window.addEventListener('DOMContentLoaded', init)


