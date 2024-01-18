import { type JSX, useState } from 'react';
import styled from 'styled-components';

import logo from '@/assets/icons/logo.png';
import { Search } from '@/components/search';

const Logo = styled.img`
  width: 250px;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 1.5% 15px 15px;
`;

const MainPage = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Wrapper>
  );
};

export { MainPage };
