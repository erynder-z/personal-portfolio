import React, { FC, useEffect, useState } from 'react';

import './App.css';
import AppFooter from './Components/AppFooter/AppFooter';
import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';

const App: FC = () => {
  const [activePanel, setActivePanel] = useState<string>('initial');
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isInitial, setIsInitial] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsInitial(false);
    }, 8000);
  }, []);

  return (
    <div className={`App app-bg ${activePanel}`}>
      <Navigation
        isInitial={isInitial}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
      {activePanel === 'initial' && <AppFooter />}
      {showLoading && <Loading />}
    </div>
  );
};

export default App;
