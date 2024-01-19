import { type JSX } from 'react';

import { getGenderData, getStatusColor } from '@/helpers';
import { StyledGender, StyledStatus } from '@/styles';
import { type Character } from '@/types';

import { StyledCard } from './character-card-styles';

type Props = {
  character: Character;
  showPopup: (character: Character) => void;
};

const CharacterCard = ({ character, showPopup }: Props): JSX.Element => {
  const { gender, status, name, image } = character;
  const genderData = getGenderData(gender);

  return (
    <StyledCard onClick={() => showPopup(character)}>
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
