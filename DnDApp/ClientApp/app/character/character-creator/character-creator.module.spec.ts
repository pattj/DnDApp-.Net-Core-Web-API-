import { CharacterCreatorModule } from './character-creator.module';

describe('CharacterCreatorModule', () => {
  let characterCreatorModule: CharacterCreatorModule;

  beforeEach(() => {
    characterCreatorModule = new CharacterCreatorModule();
  });

  it('should create an instance', () => {
    expect(characterCreatorModule).toBeTruthy();
  });
});
