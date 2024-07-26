import {battle, inputConsoleMock, monster, player} from "./constants/battle.constants";
import {randomNumberMock} from "./mock/randomNumberMock";

describe('Battle test', () => {
    it('should select first attack', async () => {
        inputConsoleMock.read.first();
        await battle.selectAttack();
        expect(monster.hp).toEqual(80);
    });
    it('should select last attack', async () => {
        inputConsoleMock.read.second();
        await battle.selectAttack();
        expect(monster.hp).toEqual(60);
    });
    it('should should monster attack', async () => {
        const number = randomNumberMock(monster.attack.length - 1);
        await battle.monsterAttack();
        expect(player.hp).toEqual(player.hp - number);
    });
    it('should should monster attack', async () => {
        randomNumberMock(monster.attack.length);
        await battle.monsterAttack();
        expect(player.hp).toEqual(90);
    });
});
