import { type JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainPage } from '@/main-page';
import { Theme } from '@/styles';

const App = (): JSX.Element => {
  return (
    <Theme>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
