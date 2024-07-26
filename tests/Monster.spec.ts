import Player from "../src/Player";
import Monster from "../src/Monster";

let player: Player;
let monster: Monster;

describe('Monster', function () {
    beforeEach(() => {
        player = new Player(3, 3);
        monster = new Monster(3, 3);
    })
    it('player should set attack', function () {
        player.attack(1, monster);
        expect(monster.hp).toEqual(60);
    });
});