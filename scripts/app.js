

function init (){

  //* Dom Variables
  const grid = document.querySelector('.grid')

  //*Game variable
  const cells = []
  const width = 14
  const gridCellCount = width * width
  let harryPosition = 180
  const harryClass = 'harry'
  let harryLives = 3
  let playerScore = 0
  const playerScoreString = document.querySelector('.player-score')
 
  const startButton = document.querySelector('.start-button')
  console.log(startButton)
  const life1 = document.querySelector('.life1')
  const life2 = document.querySelector('.life2')
  const life3 = document.querySelector('.life3')
  
  const horizontalPosition = harryPosition % width
  const verticalPosition = Math.floor(harryPosition / width)

  const voldermortOneTimer = null
  const voldermortTwoTimer = null
  const voldermortThreeTimer = null
  const voldermortFourTimer = null

  let isGameOverPlayerLost = 'no'
  let isGameOverPlayerWon = 'no'
  
  const voldemortClass = 'voldemort'
  let gameTimer = null
  

  //!-------------------FUNCTIONS--------------------------------------

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

  createGameBorder()

  //*Creates Blocks for Game
  function createGameBlocks(){

    function createBottomLeftCorner(index){
      cells[index].classList.add('block-bottom-left-corner')
      cells[index].setAttribute('data-id', 'block')
    }

    function createBottomRightCorner(index){
      cells[index].classList.add('block-bottom-right-corner')
      cells[index].setAttribute('data-id', 'block')
    }

    function createTopLeftCorner(index){
      cells[index].classList.add('block-top-left-corner')
      cells[index].setAttribute('data-id', 'block')
    }
		
    function createTopRightCorner(index){
      cells[index].classList.add('block-top-right-corner')
      cells[index].setAttribute('data-id', 'block')
    }

    function createTopBlock(index){
      cells[index].classList.add('block-top-side')
      cells[index].setAttribute('data-id', 'block')
    }

    function createBottomBlock(index){
      cells[index].classList.add('block-bottom-side')
      cells[index].setAttribute('data-id', 'block')
    }

    function createLeftBlock(index){
      cells[index].classList.add('block-left-side')
      cells[index].setAttribute('data-id', 'block')
    }

    function createRightBloc(index){
      cells[index].classList.add('block-right-side')
      cells[index].setAttribute('data-id', 'block')
    }

    //*Top left Block
    createTopBlock(31)
    createTopLeftCorner(30)
    createTopRightCorner(32)
    createBottomLeftCorner(58)
    createBottomRightCorner(60)
    createLeftBlock(44)
    createRightBloc(46)
    createBottomBlock(59)
    createBottomRightCorner(67)

    //*Top Right Block
    createTopBlock(38)
    createTopRightCorner(39)
    createTopLeftCorner(37)
    createRightBloc(53)
    createLeftBlock(51)
    createBottomBlock(66)
    createBottomLeftCorner(65)

    //*Center Block Top Block
    createTopLeftCorner(34)
    createTopRightCorner(35)
    createLeftBlock(48)
    createRightBloc(49)
    createBottomLeftCorner(62)
    createBottomRightCorner(63)

	
    createTopLeftCorner(75)
    createTopRightCorner(78)
    createBottomLeftCorner(89)
    createBottomRightCorner(92)
		
    //*Middle Left Block
    createTopLeftCorner(86)
    createTopRightCorner(87)
    createBottomLeftCorner(100)
    createBottomRightCorner(101)

    //*Middle Right Block
    createTopLeftCorner(94)
    createTopRightCorner(95)
    createBottomLeftCorner(108)
    createBottomRightCorner(109)

    //*Bottom Left Block
    createTopBlock(129)
    createTopLeftCorner(128)
    createTopRightCorner(130)
    createLeftBlock(142)
    createRightBloc(144)
    createBottomBlock(157)
    createBottomLeftCorner(156)
    createBottomRightCorner(158)
		
    //*Bottom Right Block
    createTopBlock(136)
    createTopLeftCorner(135)
    createTopRightCorner(137)
    createLeftBlock(149)
    createRightBloc(151)
    createBottomBlock(164)
    createBottomLeftCorner(163)
    createBottomRightCorner(165)
	
    //* Center Bottom Block
    createTopLeftCorner(118)
    createTopRightCorner(119)
    createLeftBlock(132)
    createRightBloc(133)
    createLeftBlock(146)
    createRightBloc(147)
    createBottomLeftCorner(160)
    createBottomRightCorner(161)

  }
  createGameBlocks()
  function createBottomBlock(index){
    cells[index].classList.add('block-bottom-side')
    cells[index].setAttribute('data-id', 'block')
  }

  const foodArray = [15,16,17,18,19,21,22,23,24,25,26,29,33,36,40,43,47,50,54,57,61,64,68, 71,72,73, 74, 79,80, 81,82,85,88,93,96,102,103,104,105,106,107,113,114,115,116,117,120,121,122,123,124,127,131,134,138,141,145,148,152,155,159,162,166,169, 170, 171, 172, 173,175, 176, 177, 178,179,180]

  foodArray.forEach(item =>{
    cells[item].classList.add('food')
  })

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

  //*Handles harrys movement when a player uses an arrow key
  function handleKeyUp(e){
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

  //*----------------------------------Voldemort Movement Logic----------------------------

  //*Array of objects holding four Voldemort ghosts
  const voldemorts = [
    {
      name: 'voldemortOne',
      position: 90,
      lengthOfTimer: 500,
    },
    {
      name: 'voldemortTwo',
      position: 91,
      lengthOfTimer: 500,
    },
    {
      name: 'voldemortThree',
      position: 76,
      lengthOfTimer: 500,
    },
    {
      name: 'voldemortFour',
      position: 77,
      lengthOfTimer: 500,
    }
  ]
  
  //*Add Voldemort ghost to page
  function addVoldemorts(index){
    cells[voldemorts[index].position].classList.add(voldemortClass)
  }

  //*Removes voldermort from pages
  function removeVoldemorts(index){
    cells[voldemorts[index].position].classList.remove(voldemortClass)
  }


  //*Adding Voldemort Ghosts to the page
  
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
    const counter = 0
    timer = setInterval(() => {
      removeVoldemorts(index)
      
      if (randomiseVoldemortMovements() === 'left'){
        //*Move Left
        if (cells[voldemorts[index].position - 1].dataset.id !== 'block'){
          voldemorts[index].position--
          // console.log('left')
        } 
        //*Move Right
      } else if (randomiseVoldemortMovements() === 'right'){
        if (cells[voldemorts[index].position + 1].dataset.id !== 'block'){
          voldemorts[index].position++
          // console.log('right')
        }
        //*Move Up
      } else if (randomiseVoldemortMovements() === 'up'){
        if (cells[voldemorts[index].position - width].dataset.id !== 'block'){
          voldemorts[index].position -= width
          // console.log('up')

        }//*Move Down
      } else if (randomiseVoldemortMovements() === 'down'){
        if (cells[voldemorts[index].position + width].dataset.id !== 'block'){
          voldemorts[index].position += width
          // console.log('down')
        }
      }

      if (isGameOverPlayerLost === 'yes' || isGameOverPlayerWon === 'yes'){
        console.dir(timer)
        stopTimer(timer)
        
      }

      addVoldemorts(index)
    }, 300)
   
  }

  //*Stops timer inside moveVoldemort Function
  function stopTimer(timer){
    clearInterval(timer)
  }


  function voldemortTrackingFunction(index, horzintalDistance, verticalDistance){
    removeVoldemorts(index)
    //*Search left
    if (cells[voldemorts[index].position - horzintalDistance].className.includes('harry')){
      voldemorts[index].position--
      console.log('search left')
    //*Seach Right
    } else if (cells[voldemorts[index].position + horzintalDistance].className.includes('harry')){
      voldemorts[index].position++
      console.log('seach right')
    //* Search Up
    } else if (cells[voldemorts[index].position - verticalDistance].className.includes('harry')){
      voldemorts[index].position -= width
      console.log('search up')
    //*Searches Down
    } else if (cells[voldemorts[index].position + verticalDistance].className.includes('harry')){
      voldemorts[index].position += width
      console.log('search down')
    }
    addVoldemorts(index)
  }








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
    }, 3000)  
  }


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
    }, 3000)  

  }

  //*Closes box holding voldemort ghosts
  function closeHoldingBox(){
    createBottomBlock(90)
    createBottomBlock(91)
  }

  function removeHoldingBox(){
    cells[90].classList.remove('block-bottom-side')
    cells[91].classList.remove('block-bottom-side')
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
      if (harryLives === 2){
        life1.style.display = 'none'
      } else if (harryLives === 1){
        life2.style.display = 'none'
      } else if (harryLives === 0){
        life3.style.display = 'none'
        alert('You lost!!! You\'re all out of lives')
        isGameOverPlayerLost = 'yes'
      }

     
      console.log('loses life functtion' + harryLives)
    }
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
      if (harryLives === 2){
        life1.style.display = 'none'
      } else if (harryLives === 1){
        life2.style.display = 'none'
      } else if (harryLives === 0){
        life3.style.display = 'none'
        alert('You lost!!! You\'re all out of lives')
        isGameOverPlayerLost = 'yes'
      }

     
      console.log('loses life functtion' + harryLives)
    }
  }
 
  //*Function runs when harry eats food
  function harryEatsFood(){
    if (cells[harryPosition].className.includes('food')){
      cells[harryPosition].classList.remove('food')
      playerScore += 5
      console.log(playerScore)
      playerScoreString.innerHTML = `Score: ${playerScore}`
      if (playerScore > 449){
        isGameOverPlayerWon = 'yes'
        console.log('met')
        alert('Congraduations You won!!!!')
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
      playerScoreString.innerHTML = `Score: ${playerScore}`
      if (playerScore > 449){
        isGameOverPlayerWon = 'yes'
        console.log('met')
        alert('Congraduations You won!!!!')
      }
    }
  }

 

  //*------------------------------------Start game and End game functions----------------------------------

  function handleGameStart(){

    addHarry(harryPosition)

  
    //*Moves GhostOne out and away from holding box
    moveOutRight(0)
    setTimeout(()=>{
      moveVoldemort(0, voldermortOneTimer)
      
    }, 2000)

    //*Moves Ghost Two out and away from holding box
    moveOutLeft(1)
    setTimeout(()=>{
      moveVoldemort(1, voldermortTwoTimer)
      
    }, 2000)

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
    }, 5000)
    

    if (gameTimer){
      return
    }

    gameTimer = setInterval(() =>{

        //*Tests if either the player or computer has won and reloads browser in either event
        if (isGameOverPlayerLost === 'yes' || isGameOverPlayerWon === 'yes'){
          console.log('condition meet')
          gameOver()
        }
  
      harryLosesLifeFromVoldemortsView(0)
      harryLosesLifeFromVoldemortsView(1)
      harryLosesLifeFromVoldemortsView(2)
      harryLosesLifeFromVoldemortsView(3)

      //*Searches 1 div radius for harry
      voldemortTrackingFunction(0, 1, 14)
      voldemortTrackingFunction(1, 1, 14)
      voldemortTrackingFunction(2, 1, 14)
      voldemortTrackingFunction(3, 1, 14)

      // //*Searches 2 div radius for harry
      // voldemortTrackingFunction(0, 2, 28)
      // voldemortTrackingFunction(1, 2, 28)
      // voldemortTrackingFunction(2, 2, 28)
      // voldemortTrackingFunction(3, 2, 28)

      // //*Searches 3 div radius for harry
      // voldemortTrackingFunction(0, 3, 42)
      // voldemortTrackingFunction(1, 3, 42)
      // voldemortTrackingFunction(2, 3, 42)
      // voldemortTrackingFunction(3, 3, 42)

      // //*Searches 4 div radius for harry
      // voldemortTrackingFunction(0, 4, 56)
      // voldemortTrackingFunction(1, 4, 56)
      // voldemortTrackingFunction(2, 4, 56)
      // voldemortTrackingFunction(3, 4, 56)
   
      harryLosesLifeFromVoldemortsView(0)
      harryLosesLifeFromVoldemortsView(1)
      harryLosesLifeFromVoldemortsView(2)
      harryLosesLifeFromVoldemortsView(3)



    
     
      // console.log(counter)
    }, 1000)

  }
  
  //** Reloads page when game ends 
  function gameOver(){
    location.reload()

  }

  function noScroll() {
    window.scrollTo(0, 0);
  }


 
  //!-------------------EVENT HANDLER--------------------------------------
  window.addEventListener('scroll', noScroll)
  document.addEventListener('keyup', handleKeyUp)
  startButton.addEventListener('click', handleGameStart)


}

window.addEventListener('DOMContentLoaded', init)


