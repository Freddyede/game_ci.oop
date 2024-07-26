import { battle, inputConsoleMock, monster } from "./constants/battle.constants";

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
});
