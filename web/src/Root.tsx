import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';

import FullscreenLayout from './components/layout/FullscreenLayout';
import FlexContainer from './components/layout/FlexContainer';



import IndexPage from './pages/Index';
import Dashboard from './pages/Dashboard';

function Root() {
  return (
    <FlexContainer>
      <FullscreenLayout>
        <Router className="flex-column full flex1">
          <IndexPage path="/" />
          <Dashboard path="/dashboard" />
        </Router>
      </FullscreenLayout>
    </FlexContainer>
  );
}

export default hot(Root);
