

function init (){

  //* Dom Variables
  const grid = document.querySelector('.grid')

  //*Game variable
  const cells = []
  const width = 14
  const gridCellCount = width * width
	const blockPosition = []
	let harryPosition = 180


  blockPosition.push(58,67,30,39,33,31,32,34,35,36,44,53,100,108,156,163,105,104,75,89, 86,128,78,129,136,157,164,142,149,144,151 )

  //*Board Functions
  function createGameGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      cell.innerHTML = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  createGameGrid()



  function createGameBorder(){
    for (let i = 1; i < 13; i++){
      cells[i].classList.add('top-border')
      blockPosition.push(i)
    }
	
    for (let i = 183; i < 195; i++){
      cells[i].classList.add('bottom-border')
      blockPosition.push(i)
    }

    for (let i = 14; i < 182; i += 14){
      cells[i].classList.add('left-side-border')
      blockPosition.push(i)
    }

    for (let i = 27; i < 195; i += 14){
      cells[i].classList.add('right-side-border')
      blockPosition.push(i)
    }

    cells[0].classList.add('top-left-corner-border')
    cells[13].classList.add('top-right-corner-border')
    cells[182].classList.add('bottom-left-corner-border')
    cells[195].classList.add('bottom-right-corner-border')
  }

  createGameBorder()

  function createGameBlocks(){

    // for (let i = 59; i < 67; i++){
    //   cells[i].classList.add('block-bottom-side')
    //   blockPosition.push(i)
    // }

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









  console.log(blockPosition)
	



}

window.addEventListener('DOMContentLoaded', init)


// topSide = 1,2,3,4,5,6,7,8,9,10,11,12,13