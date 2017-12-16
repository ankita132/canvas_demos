(function () {
  const WIDTH = 50
  const HEIGHT = 50
  const TICK = 1000
  const canvas = document.getElementById('game')
  const context = canvas.getContext('2d')
  canvas.width = context.canvas.clientWidth
  canvas.height = context.canvas.clientHeight  
  
  const cellWidth = canvas.width / WIDTH
  const cellHeight = canvas.height / HEIGHT
  
  let loop
  let board = []
  
  function populateBoard () {
    for (let x = 0; x < WIDTH; x += 1) {
      board[x] = []
      for (let y = 0; y < HEIGHT; y += 1) {
        board[x][y] = Math.round(Math.random())
      }
    }
  }
    
  function draw () {
    board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        console.log(cellHeight, cellWidth)
        if (cell) {
          context.fillRect(
            rowIndex * cellWidth, 
            cellIndex * cellHeight,
            cellWidth, 
            cellHeight
          )
        }
      })
    })
  }
  
  populateBoard()
  draw()
  
}())