import { CharacterRoutingModule } from './character-routing.module';

describe('CharacterRoutingModule', () => {
  let characterRoutingModule: CharacterRoutingModule;

  beforeEach(() => {
    characterRoutingModule = new CharacterRoutingModule();
  });

  it('should create an instance', () => {
    expect(characterRoutingModule).toBeTruthy();
  });
});
