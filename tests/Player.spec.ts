import Player from "../src/Player";
import { Direction } from "../src/Direction";

let player: Player;

describe('Player direction', () => {
    beforeEach(() => {
        player = new Player(3, 3);
    });
    it('should be move to NORTH', () => {
        player.move(Direction.NORD);
        expect(player.y).toEqual(2);
    });
    it('should be move to SOUTH', () => {
        player.move(Direction.SUD);
        expect(player.y).toEqual(4);
    });
    it('should be move to EAST', () => {
        player.move(Direction.EST);
        expect(player.x).toEqual(4);
    });
    it('should be move to WEST', () => {
        player.move(Direction.OUEST);
        expect(player.x).toEqual(2);
    });
});

describe('Player attack/damage', () => {
    it('player should get damage', () => {
        player.getDamage(50);
        expect(player.hp).toEqual(50);
    });
});