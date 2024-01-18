import { type JSX } from 'react';

import { getStatusColor } from '@/helpers';
import { useOutsideClick } from '@/hooks';
import { StyledStatus } from '@/styles';
import { type Character } from '@/types';

import { StyledMask, StyledPopup } from './character-popup-styles';

type Props = {
  character: Character | null;
};

const CharacterPopup = ({ character }: Props): JSX.Element => {
  const { ref, isActive } = useOutsideClick<HTMLDivElement>(false);

  if (!character) {
    return (
      <StyledMask isOpen={false}>
        <StyledPopup />
      </StyledMask>
    );
  }

  const { gender, status, name, image, species, type, origin, location } = character;
  const statusColor = getStatusColor(status);

  const InfoItems = [
    { label: 'Name', value: name },
    { label: 'Gender', value: gender },
    { label: 'Status', value: status },
    { label: 'Species', value: species },
    { label: 'Type', value: type },
    { label: 'Origin', value: origin.name },
    { label: 'Location', value: location.name },
  ].filter((item) => item.value !== '');

  return (
    <StyledMask isOpen={isActive}>
      <StyledPopup>
        <div ref={ref}>
          <img className="image" src={image} width={300} height={300} alt="" />
          <StyledStatus color={statusColor}>{status}</StyledStatus>
          <section className="description">
            {InfoItems.map(({ label, value }) => (
              <p className="info-line" key={label}>
                {label}: <span className="value">{value}</span>
              </p>
            ))}
          </section>
        </div>
        <button className="close-btn" aria-label="Close modal" />
      </StyledPopup>
    </StyledMask>
  );
};

export { CharacterPopup };
