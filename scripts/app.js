

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
  
  let voldemortPosition = 91
  const voldermortClass = 'voldemort'
  let voldemortTimer = null
  

  //!-------------------FUNCTIONS--------------------------------------

  //*Board Functions
	
  //*Creates grid for game
  function createGameGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      cell.innerHTML = i
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
    
    
   

    const horizontalPosition = harryPosition % width
    const verticalPosition = Math.floor(harryPosition / width)

		
    switch (e.keyCode){
      case 39: //*Move Right
        if (horizontalPosition < width - 1 && cells[harryPosition + 1].dataset.id !== 'block') 
          harryPosition++
        flipHarry()
        break
      case 37://*Move Left
        if (horizontalPosition > 0 && cells[harryPosition - 1].dataset.id !== 'block') 
          harryPosition--
        addHarry()
        break
      case 38://*Move Up
        if (verticalPosition > 0 && cells[harryPosition - width].dataset.id !== 'block')
          harryPosition -= width
        rotateHarryUp()

        break
      case 40://*Move down
        if (verticalPosition < width - 1 && cells[harryPosition + width].dataset.id !== 'block') 
          harryPosition += width
        rotateHarryDown()
        
        break
      default:
        console.log('invaild key')
    } 
    //
   
    addHarry()
  }

  //*Add Voldemort ghost to page
  
  function addVoldemort(){
    cells[voldemortPosition].classList.add('voldemort')

  }


  //*Removes voldermort from pages
  function removeVoldemort(){
    cells[voldemortPosition].classList.remove('voldemort')
  }
  

  addVoldemort()
  
  const voldemortMovements = ['left', 'right', 'up', 'down']


  function randomiseVoldemortMovements(){
    return voldemortMovements[Math.floor(Math.random() * voldemortMovements.length)]
  }

  let voldemortMoving = randomiseVoldemortMovements()

  
  console.log(cells[55].dataset.id)

  function moveVoldemort(){
    if (voldemortTimer){
      return
    }

   
  


    voldemortTimer = setInterval(() => {
      
      removeVoldemort()
      if (randomiseVoldemortMovements() === 'left'){
        //*Move Left
        if(cells[voldemortPosition - 1].dataset.id !== 'block'){
          removeVoldemort()
          voldemortPosition--
          addVoldemort()
          console.log('left')
        } 
        //*Move Right
      }else if (randomiseVoldemortMovements() === 'right'){
        if(cells[voldemortPosition + 1].dataset.id !== 'block'){
          voldemortPosition++
          console.log('right')
        }
        //*Move Up
      } else if (randomiseVoldemortMovements() === 'up'){
        if(cells[voldemortPosition - width].dataset.id !== 'block'){
       voldemortPosition -= width
       console.log('up')
       }//*Move Down
      } else if (randomiseVoldemortMovements() === 'down'){
        if(cells[voldemortPosition + width].dataset.id !== 'block'){
          voldemortPosition += width
          console.log('down')
        }
        
       
      }
      
     
          
      
      addVoldemort()
    }, 200)
  }


  moveVoldemort()

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


