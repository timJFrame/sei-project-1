

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
  const redVoldemortPosition = 76
  const purpleVoldemortPosition = 77
  let blueVoldemortPosition = 90
  let yellowVoldemortPosition = 91
  const redVoldemortClass = 'red-voldemort'
  const purpleVoldemortClass = 'purple-voldemort'
  const blueVoldemortClass = 'blue-voldemort'
  const yellowVoldemortClass = 'yellow-voldemort'
  let yellowVoldemortTimer = null
  let blueVoldemortTimer = null

  const horizontalPosition = harryPosition % width
  const verticalPosition = Math.floor(harryPosition / width)

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
    removeYellowVoldemort()
    addRedVoldemort()
    addPurpleVoldemort()
    addBlueVoldemort()
    addYellowVoldemort()
   

    const horizontalPosition = harryPosition % width
    const verticalPosition = Math.floor(harryPosition / width)

		
    switch (e.keyCode){
      case 39: //*Move Right
        if (horizontalPosition < width - 1 && cells[harryPosition + 1].dataset.id !== 'block') 
          harryPosition++
        flipHarry()
        

        checkRightYellowVoldemort()
        checkLeftYellowVolderMort()
        checkUpYellowVolderMort()
        checkDownYellowVoldemort()
        
        
       
        
       
        break
      case 37://*Move Left
        if (horizontalPosition > 0 && cells[harryPosition - 1].dataset.id !== 'block') 
          harryPosition--
        addHarry()

        
      
        checkRightYellowVoldemort()
        checkLeftYellowVolderMort()
        checkUpYellowVolderMort()
        checkDownYellowVoldemort()
        
    
       
        
        

        break
      case 38://*Move Up
        if (verticalPosition > 0 && cells[harryPosition - width].dataset.id !== 'block')
          harryPosition -= width
        rotateHarryUp()

        
        
        checkRightYellowVoldemort()
        checkLeftYellowVolderMort()
        checkUpYellowVolderMort()
        checkDownYellowVoldemort()
        
       

        
        break
      case 40://*Move down
        if (verticalPosition < width - 1 && cells[harryPosition + width].dataset.id !== 'block') 
          harryPosition += width
        rotateHarryDown()

        checkRightYellowVoldemort()
        checkLeftYellowVolderMort()
        checkUpYellowVolderMort()
        checkDownYellowVoldemort()
        
       

        
        break
      default:
        console.log('invaild key')
    } 
    yellowVoldemortAutoMovement()
    addHarry()
  }

  //*Add Voldemort ghost to page
  function addRedVoldemort(){
    cells[redVoldemortPosition].classList.add(redVoldemortClass)
  }
  function addPurpleVoldemort(){
    cells[purpleVoldemortPosition].classList.add(purpleVoldemortClass)
  }
  function addBlueVoldemort(){
    cells[blueVoldemortPosition].classList.add(blueVoldemortClass)
  }
  function addYellowVoldemort(){
    cells[yellowVoldemortPosition].classList.add(yellowVoldemortClass)
  }

  //*Removes voldermort from pages
  function removeRedVoldemort(){
    cells[redVoldemortPosition].classList.remove(redVoldemortClass)
  }
  function removePurpleVoldemort(){
    cells[purpleVoldemortPosition].classList.remove(purpleVoldemortClass)
  }
  function removeBlueVoldemort(){
    cells[blueVoldemortPosition].classList.remove(blueVoldemortClass)
  }
  function removeYellowVoldemort(){
    cells[yellowVoldemortPosition].classList.remove(yellowVoldemortClass)
  }
  

  //*Yellow Voldermort checks 1 and two divs right for harry
  function  checkRightYellowVoldemort(){
    if (cells[yellowVoldemortPosition + 1].className === 'harry' ||
  cells[yellowVoldemortPosition + 1].className === 'flip-harry' ||
  cells[yellowVoldemortPosition + 1].className === 'rotate-harry-up' ||
  cells[yellowVoldemortPosition + 1].className === 'rotate-harry-down'){
      //*Move to the Voldermort right
      if (horizontalPosition < width - 1 && cells[yellowVoldemortPosition + 1].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition ++
        addYellowVoldemort()
      } 
    } else if (cells[yellowVoldemortPosition + 2].className === 'harry' ||
    cells[yellowVoldemortPosition + 2].className === 'flip-harry' ||
    cells[yellowVoldemortPosition + + 2].className === 'rotate-harry-up' ||
    cells[yellowVoldemortPosition + 2].className === 'rotate-harry-down'){
      //*Move to the Voldermort right
      if (horizontalPosition < width - 1 && cells[yellowVoldemortPosition + 1].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition++
        addYellowVoldemort()
      } 
    } else if (cells[yellowVoldemortPosition + 3].className === 'harry' ||
    cells[yellowVoldemortPosition + 3].className === 'flip-harry' ||
    cells[yellowVoldemortPosition + + 3].className === 'rotate-harry-up' ||
    cells[yellowVoldemortPosition + 3].className === 'rotate-harry-down'){
      //*Move to the Voldermort right
      if (horizontalPosition < width - 1 && cells[yellowVoldemortPosition + 1].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition++
        addYellowVoldemort()
      } 
    }
    harryLosesLife(yellowVoldemortPosition)
  }

  //* Check left two divs
  function  checkLeftYellowVolderMort(){
    if (cells[yellowVoldemortPosition - 1].className === 'harry' ||
cells[yellowVoldemortPosition - 1].className === 'flip-harry' ||
cells[yellowVoldemortPosition - 1].className === 'rotate-harry-up' ||
cells[yellowVoldemortPosition - 1].className === 'rotate-harry-down'){
      //*Move to Right
      if (horizontalPosition > 0 && cells[yellowVoldemortPosition - 1].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition--
        addYellowVoldemort()
    
      } 
    } else if (cells[yellowVoldemortPosition - 2].className === 'harry' ||
  cells[yellowVoldemortPosition - 2].className === 'flip-harry' ||
  cells[yellowVoldemortPosition - 2].className === 'rotate-harry-up' ||
  cells[yellowVoldemortPosition - 2].className === 'rotate-harry-down'){
    //*Move to Right
      if (horizontalPosition > 0 && cells[yellowVoldemortPosition - 1].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition--
        addYellowVoldemort()
      } 
    } else if (cells[yellowVoldemortPosition - 3].className === 'harry' ||
    cells[yellowVoldemortPosition - 3].className === 'flip-harry' ||
    cells[yellowVoldemortPosition - 3].className === 'rotate-harry-up' ||
    cells[yellowVoldemortPosition - 3].className === 'rotate-harry-down'){
      //*Move to Right
      if (horizontalPosition > 0 && cells[yellowVoldemortPosition - 1].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition--
        addYellowVoldemort()
      } 
    }
    harryLosesLife(yellowVoldemortPosition)
  }
 
  

  //*Check up two divs
  function checkUpYellowVolderMort(){
    if (cells[yellowVoldemortPosition - width].className === 'harry' ||
    cells[yellowVoldemortPosition - width].className === 'flip-harry' ||
    cells[yellowVoldemortPosition - width].className === 'rotate-harry-up' ||
    cells[yellowVoldemortPosition - width].className === 'rotate-harry-down'){
    
      if (verticalPosition > 0 && cells[yellowVoldemortPosition - width].dataset.id !== 'block'){
    
        removeYellowVoldemort()
        yellowVoldemortPosition -= width
        addYellowVoldemort()
      } 
    } else if (cells[yellowVoldemortPosition - 28].className === 'harry' ||
    cells[yellowVoldemortPosition - 28].className === 'flip-harry' ||
    cells[yellowVoldemortPosition - 28].className === 'rotate-harry-up' ||
    cells[yellowVoldemortPosition - 28].className === 'rotate-harry-down'){
      if (verticalPosition > 0 && cells[yellowVoldemortPosition - width].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition -= width
        addYellowVoldemort()
      } 
    } else if (cells[yellowVoldemortPosition - 42].className === 'harry' ||
    cells[yellowVoldemortPosition - 42].className === 'flip-harry' ||
    cells[yellowVoldemortPosition - 42].className === 'rotate-harry-up' ||
    cells[yellowVoldemortPosition - 42].className === 'rotate-harry-down'){
      if (verticalPosition > 0 && cells[yellowVoldemortPosition - width].dataset.id !== 'block'){
        removeYellowVoldemort()
        yellowVoldemortPosition -= width
        addYellowVoldemort()
      } 
    }
    harryLosesLife(yellowVoldemortPosition)
  }
  
  //*Check down two divs
  function checkDownYellowVoldemort(){
    if (cells[yellowVoldemortPosition + width].className === 'harry' ||
	cells[yellowVoldemortPosition + width].className === 'flip-harry' ||
	cells[yellowVoldemortPosition + width].className === 'rotate-harry-up' ||
	cells[yellowVoldemortPosition + width].className === 'rotate-harry-down'){
      if (verticalPosition < width - 1 && cells[yellowVoldemortPosition + width].dataset.id !== 'block'){
        console.log(verticalPosition)
        removeYellowVoldemort()
        yellowVoldemortPosition += width
        addYellowVoldemort()
      }
    } 
    // } else if (cells[yellowVoldemortPosition + 28].className === 'harry' ||
    // cells[yellowVoldemortPosition + 28].className === 'flip-harry' ||
    // cells[yellowVoldemortPosition + 28].className === 'rotate-harry-up' ||
    // cells[yellowVoldemortPosition + 28].className === 'rotate-harry-down'){
    //   if (verticalPosition < width - 1 && cells[yellowVoldemortPosition + width].dataset.id !== 'block'){
    //     removeYellowVoldemort()
    //     yellowVoldemortPosition += width
    //     addYellowVoldemort()
    //   } 
    // } else if (cells[yellowVoldemortPosition + 42].className === 'harry' ||
    // cells[yellowVoldemortPosition + 42].className === 'flip-harry' ||
    // cells[yellowVoldemortPosition + 42].className === 'rotate-harry-up' ||
    // cells[yellowVoldemortPosition + 42].className === 'rotate-harry-down'){
    //   if (verticalPosition < width - 1 && cells[yellowVoldemortPosition + width].dataset.id !== 'block'){
    //     removeYellowVoldemort()
    //     yellowVoldemortPosition += width
    //     addYellowVoldemort()
    //   } 
    // }
    harryLosesLife(yellowVoldemortPosition)
  }

  let counter = 0
  function yellowVoldemortAutoMovement(){
    if (yellowVoldemortTimer)
      return
    yellowVoldemortTimer = setInterval(() =>{
      counter++
      console.log(counter)
      //Move Down
      if (cells[yellowVoldemortPosition + width].dataset.id !== 'block'){
        if (verticalPosition < width - 1){
          removeYellowVoldemort()
          yellowVoldemortPosition += width
          addYellowVoldemort()
        }
        //* Move Right
      } else if (cells[yellowVoldemortPosition + 1].dataset.id !== 'block'){
        if (horizontalPosition < width - 1){
          removeYellowVoldemort()
          yellowVoldemortPosition++
          addYellowVoldemort()
        }
        //*Move Up
      } else if (cells[yellowVoldemortPosition - width] !== 'block'){
        if (verticalPosition > 0){
          removeYellowVoldemort()
          yellowVoldemortPosition -= width
          addYellowVoldemort()
          //*Move Down
        } else if (cells[yellowVoldemortPosition - 1].dataset.id !== 'block'){
          if (horizontalPosition > 0 ){
            removeYellowVoldemort()
            yellowVoldemortPosition--
            addYellowVoldemort()
          }
        }
      }
    }, 1000)
  }

  function blueVoldemortAutoMovement(){
    if (blueVoldemortTimer)
      return
    blueVoldemortTimer = setInterval(() =>{
    
      //*Move Down
      if (cells[blueVoldemortPosition + width].dataset.id !== 'block'){
        if (verticalPosition < width - 1){
          removeBlueVoldemort()
          blueVoldemortPosition += width
          addBlueVoldemort()
        }
        //*Move Left
      } else if (cells[blueVoldemortPosition - 1].dataset.id !== 'block'){
        if (horizontalPosition > 0 ){
          removeBlueVoldemort()
          blueVoldemortPosition--
          addBlueVoldemort()
        }	//*Move Down
      } else if (cells[blueVoldemortPosition - width] !== 'block'){
        if (verticalPosition > 0){
          removeBlueVoldemort()
          blueVoldemortPosition -= width
          addBlueVoldemort()
        } //* Move Right
        else if (cells[blueVoldemortPosition + 1].dataset.id !== 'block'){
          if (horizontalPosition < width - 1){
            removeBlueVoldemort()
            blueVoldemortPosition++
            addBlueVoldemort()
          }
        }
      }
      
    }, 1000)
  }
  

  
  


  //*Moves harry back to original starting position and removes one life when Harry intersects with Voldemort
  function harryLosesLife(voldemortPosition){
    if (voldemortPosition === harryPosition){
      for (let i = 0; i < cells.length; i++){
        cells[i].classList.remove('harry')
        cells[i].classList.remove('flip-harry')
        cells[i].classList.remove('rotate-harry-up')
        cells[i].classList.remove('rotate-harry-down')
      }
      harryPosition = 180
      addHarry()
      harryLives -= 1
      console.log(harryLives)
    }
  }
 




 
  //!-------------------EVENT HANDLER--------------------------------------

  document.addEventListener('keyup', handleKeyUp)


}

window.addEventListener('DOMContentLoaded', init)


