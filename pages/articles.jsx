import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ArticlesSection from '../components/articles/ArticlesSection';

/**
 * Articles page
 * @author Kenneth Sumang
 */
export default function Articles() {
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('articles__main-container __full-height __dark-div');
    } else {
      setContainerStyle('articles__main-container __full-height');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <main>
        <ArticlesSection />
      </main>
    </div>
  )
}