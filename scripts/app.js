

function init (){

  //* Dom Variables
  const grid = document.querySelector('.grid')

  //*Game variable
  const cells = []
  const width = 14
	const gridCellCount = width * width
	let blockPosition = []

	blockPosition.push(58,67,30,39,33,31,32,34,35,36,44,53,100,108,156,163,105,104,75,89, 86,128,78,129,136,157,164,142,149,144,151 )

  //*Board Functions
  function createGameGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      // cell.innerHTML = i
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

	for(let i = 14; i < 182; i += 14){
			cells[i].classList.add('left-side-border')
			blockPosition.push(i)
	}

	for(let i = 27; i < 195; i += 14){
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

 for(let i = 59; i < 67; i++){
	cells[i].classList.add('block-bottom-side')
	blockPosition.push(i)
 }

 cells[58].classList.add('block-bottom-left-corner')
 cells[100].classList.add('block-bottom-left-corner')
 cells[108].classList.add('block-bottom-left-corner')
 cells[156].classList.add('block-bottom-left-corner')
 cells[163].classList.add('block-bottom-left-corner')
 cells[103].classList.add('block-bottom-left-corner')
 
 cells[67].classList.add('block-bottom-right-corner')
 cells[101].classList.add('block-bottom-right-corner')
 cells[106].classList.add('block-bottom-right-corner')
 cells[109].classList.add('block-bottom-right-corner')
 cells[158].classList.add('block-bottom-right-corner')
 cells[165].classList.add('block-bottom-right-corner')
 
 cells[30].classList.add('block-top-left-corner')
 cells[86].classList.add('block-top-left-corner')
 cells[94].classList.add('block-top-left-corner')
 cells[135].classList.add('block-top-left-corner')
 cells[128].classList.add('block-top-left-corner')
 cells[37].classList.add('block-top-left-corner')

 cells[39].classList.add('block-top-right-corner')
 cells[87].classList.add('block-top-right-corner')
 cells[95].classList.add('block-top-right-corner')
 cells[130].classList.add('block-top-right-corner')
 cells[137].classList.add('block-top-right-corner')
 cells[32].classList.add('block-top-right-corner')

 cells[31].classList.add('block-top-side')
 cells[129].classList.add('block-top-side')
 cells[136].classList.add('block-top-side')
 cells[38].classList.add('block-top-side')

 cells[34].classList.add('block-bottom-side')
 cells[35].classList.add('block-bottom-side')
 cells[36].classList.add('block-bottom-side')
 cells[33].classList.add('block-bottom-side')
 cells[105].classList.add('block-bottom-side')
 cells[104].classList.add('block-bottom-side')
 cells[157].classList.add('block-bottom-side')
 cells[164].classList.add('block-bottom-side')

 cells[44].classList.add('block-left-side')
 cells[89].classList.add('block-left-side')
 cells[75].classList.add('block-left-side')
 cells[142].classList.add('block-left-side')
 cells[149].classList.add('block-left-side')

 cells[53].classList.add('block-right-side')
 cells[78].classList.add('block-right-side')
 cells[144].classList.add('block-right-side')
 cells[151].classList.add('block-right-side')
}

createGameBlocks()



	console.log(blockPosition)
	



}

window.addEventListener('DOMContentLoaded', init)


// topSide = 1,2,3,4,5,6,7,8,9,10,11,12,13