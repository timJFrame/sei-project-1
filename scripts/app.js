

function init (){

  //* Dom Variables
  const grid = document.querySelector('.grid')

  //*Game variable
  const cells = []
  const width = 14
  const gridCellCount = width * width
  let harryPosition = 180
  const harryClass = 'harry'
	
  //*Aray holds the position of all block positions harry cannot move through when going down
  const downPositionsToBlock = [168,169,170,171,172,173,174,175,176,177,178,179,180,181,149,150,151,194,128,114,115,116,104,105,121,122,123,80,81,16,17,18,20,21,23,24,25,72,73,64,61]

  //*Aray holds the position of all block positions harry cannot move through when going up
  const upPositionsToBlock = [15,16,17,18,19,20,21,22,23,24,25,26,27,72,73,74,103,76,77,106,79,80,81,122,123,170,171,172,174,175,177,178,179,114,115]

  //*Aray holds the position of all block positions harry cannot move through when going left
  const leftPositionsToAvoid = [15,29,43,57,71,85,99,113,127,141,155,169,33,47,61,88,102,131,145,159,36,50,64,79,93,120,134,148,162,40,54,68,96,110,138,152,166, 76,90]

  //*Aray holds the position of all block positions harry cannot move through when going right
  const rightPositionsToAvoid = [29,43,57,85,99,127,141,155,74,88,77,91,117,131,145,159,36,50,64,93,107,134,148,162,26,40,54,68,82,96,110,124,138,152,166,180,33,47,61]


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
    }
	
    for (let i = 183; i < 195; i++){
      cells[i].classList.add('bottom-border')
    }

    for (let i = 14; i < 182; i += 14){
      cells[i].classList.add('left-side-border')
    }

    for (let i = 27; i < 195; i += 14){
      cells[i].classList.add('right-side-border')
    }

    cells[0].classList.add('top-left-corner-border')
    cells[13].classList.add('top-right-corner-border')
    cells[182].classList.add('bottom-left-corner-border')
    cells[195].classList.add('bottom-right-corner-border')
  }

  createGameBorder()

  //*Creates Blocks for Game
  function createGameBlocks(){

    function createBottomLeftCorner(index){
      cells[index].classList.add('block-bottom-left-corner')
    }

    function createBottomRightCorner(index){
      cells[index].classList.add('block-bottom-right-corner')
    }

    function createTopLeftCorner(index){
      cells[index].classList.add('block-top-left-corner')
    }
		
    function createTopRightCorner(index){
      cells[index].classList.add('block-top-right-corner')
    }

    function createTopBlock(index){
      cells[index].classList.add('block-top-side')
    }

    function createBottomBlock(index){
      cells[index].classList.add('block-bottom-side')
    }

    function createLeftBlock(index){
      cells[index].classList.add('block-left-side')
    }

    function createRightBloc(index){
      cells[index].classList.add('block-right-side')
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

    //*Tests if harry position is the same a gameboard block
    function avoidBlock(blockPosition){
      return blockPosition !== harryPosition
    }
		
    switch (e.keyCode){
      case 39: //Move Right
        if (horizontalPosition < width - 1 && rightPositionsToAvoid.every(avoidBlock)) 
          harryPosition++
        flipHarry()
        break
      case 37://*Move Left
        if (horizontalPosition > 0 && leftPositionsToAvoid.every(avoidBlock)) 
          harryPosition--
        break
      case 38://*Move Up
        if (verticalPosition > 0 && upPositionsToBlock.every(avoidBlock)) harryPosition -= width
        rotateHarryUp()
        break
      case 40://*Move down
        if (verticalPosition < width - 1 && downPositionsToBlock.every(avoidBlock)) 
          harryPosition += width
        rotateHarryDown()
        break
      default:
        console.log('invaild key')
    } 
    addHarry()
    
  }


//!-------------------EVENT HANDLER--------------------------------------

  document.addEventListener('keyup', handleKeyUp)


}

window.addEventListener('DOMContentLoaded', init)


