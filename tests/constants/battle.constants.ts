import Player from "../../src/Player";
import Monster from "../../src/Monster";
import Battle from "../../src/Battle";
import { mockInput } from "../mock/InputConsoleMock";
export { inputConsoleMock } from '../mock/InputConsoleMethodMock';

export let player: Player;
export let monster: Monster;
export let battle: Battle;

beforeEach(() => {
    player = new Player(3, 3);
    monster = new Monster(3, 3);
    battle = new Battle(player, monster, mockInput);
});
