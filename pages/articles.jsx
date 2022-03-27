import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/**
 * Articles page
 * @author Kenneth Sumang
 */
export default function Articles() {
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
      </main>
    </div>
  )
}