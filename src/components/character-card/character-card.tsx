import { type JSX } from 'react';

import { ThemeDefault } from '@/styles';
import { type Character, CharacterGender } from '@/types';

import { StyledCard, StyledGender, StyledStatus } from './character-card-styles';

const getGenderData = (gender: CharacterGender): { char: string; color: keyof ThemeDefault['colors'] } => {
  switch (gender) {
    case CharacterGender.male:
      return { char: '♂', color: 'darkBlue' };
    case CharacterGender.female:
      return { char: '♀', color: 'pink' };
    case CharacterGender.genderless:
      return { char: '—', color: 'black' };
    default:
      return { char: '?', color: 'grey' };
  }
};

const getStatusColor = (status: string): keyof ThemeDefault['colors'] => {
  switch (status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'pink';
    default:
      return 'grey';
  }
};

const CharacterCard = ({ character }: { character: Character }): JSX.Element => {
  const { gender, status, name, image } = character;
  const genderData = getGenderData(gender);

  return (
    <StyledCard>
      <img className="image" src={image} width={300} height={300} alt="" />
      <StyledStatus color={getStatusColor(status)}>{status}</StyledStatus>
      <section className="description">
        <h3 className="name">{name}</h3>
        <StyledGender color={genderData.color} title={gender}>
          {genderData.char}
        </StyledGender>
      </section>
    </StyledCard>
  );
};

export { CharacterCard };
