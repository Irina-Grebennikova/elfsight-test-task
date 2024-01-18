import { type RefObject, useEffect, useRef, useState } from 'react';

type ReturnValue<T> = {
  ref: RefObject<T>;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

const useOutsideClick = <T extends HTMLElement>(initialValue: boolean): ReturnValue<T> => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef<T>(null);

  const handleClick = (e: MouseEvent): void => {
    if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return (): void => {
      document.removeEventListener('click', handleClick);
    };
  });

  return { ref, isActive, setIsActive };
};

export { useOutsideClick };
