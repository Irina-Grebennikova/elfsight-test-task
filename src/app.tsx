import { type JSX } from 'react';

import { MainPage } from '@/main-page';
import { Theme } from '@/styles';

const App = (): JSX.Element => {
  return (
    <Theme>
      <MainPage />
    </Theme>
  );
};

export default App;
