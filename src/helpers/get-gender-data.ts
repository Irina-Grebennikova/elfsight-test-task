import { ThemeDefault } from '@/styles';
import { CharacterGender } from '@/types';

const getGenderData = (gender: CharacterGender): { char: string; color: keyof ThemeDefault['colors'] } => {
  switch (gender) {
    case CharacterGender.male:
      return { char: '♂', color: 'darkBlue' };
    case CharacterGender.female:
      return { char: '♀', color: 'pink' };
    case CharacterGender.genderless:
      return { char: '—', color: 'grey' };
    default:
      return { char: '?', color: 'grey' };
  }
};

export { getGenderData };
