import {Game} from './draw';

$(() => {
	let game = new Game();
	game.init();
	game.addObject();
	game.render();
});