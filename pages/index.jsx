import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JumbotronSection from '../components/index/JumbotronSection';
import ArticlesSection from '../components/index/ArticlesSection';

/**
 * Home component
 * @author Kenneth Sumang
 */
export default function Home() {
  const appTheme = useSelector(state => state.app.appTheme);
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
        <ArticlesSection />
      </main>
    </div>
  )
}
