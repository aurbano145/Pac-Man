let board = new pacman.Board();
board.addEntity(pacman.PLAYER, 0, 0);
board.addEntity(pacman.ENEMY, 4, 5);
board.drawBoard();
board.moveEntity();