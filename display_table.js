const board = []

for (let y = 0; y < 5; y++) {
	board[y] = []
	for (let x = 0; x < 5; x++) {
		board[y][x] = ''
	}
}

function renderBoard() {
	// Clear board first
	for (let y = 0; y < 5; y++) {
		for (let x = 0; x < 5; x++) {
			board[y][x] = ''
		}
	}
	// Place piece
	board[piece.y][piece.x] = 'X'
	console.table([...board].reverse()) // reverse to show (0,0) at bottom
}