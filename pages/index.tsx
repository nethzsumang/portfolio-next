import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JumbotronSection from '../components/index/JumbotronSection';
import WhatIDoSection from '../components/index/WhatIDoSection';
import type { RootState } from '../store';

/**
 * Home component
 * @author Kenneth Sumang
 */
export default function Home() {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('container __dark-div');
    } else {
      setContainerStyle('container');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <main>
        <JumbotronSection />
        <WhatIDoSection />
      </main>
    </div>
  )
}
