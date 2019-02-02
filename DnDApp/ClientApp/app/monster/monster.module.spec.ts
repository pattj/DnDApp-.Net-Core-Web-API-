import { MonsterModule } from './monster.module';

describe('MonsterModule', () => {
  let monsterModule: MonsterModule;

  beforeEach(() => {
    monsterModule = new MonsterModule();
  });

  it('should create an instance', () => {
    expect(monsterModule).toBeTruthy();
  });
});
