import React, { FC, useEffect, useState } from 'react';
import './App.css';
import AppFooter from './Components/AppFooter/AppFooter';
import LanguageSelector from './Components/LanguageSelector/LanguageSelector';
import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';

const App: FC = () => {
  const [activePanel, setActivePanel] = useState<string>('initial');
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`App app-bg ${activePanel}`}>
      <Navigation activePanel={activePanel} setActivePanel={setActivePanel} />
      {activePanel === 'initial' && !showLoading && <AppFooter />}
      {activePanel === 'initial' && !showLoading && <LanguageSelector />}
      {showLoading && <Loading />}
    </div>
  );
};

export default App;
