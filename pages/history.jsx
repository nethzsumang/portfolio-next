import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HistoryHeader from '../components/history/HistoryHeader';
import Timeline from '../components/history/Timeline';

/**
 * History component
 * @author Kenneth Sumang
 */
export default function History() {
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('history__container __full-height __dark-div');
    } else {
      setContainerStyle('history__container __full-height');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <main>
        <HistoryHeader />
        <Timeline />
      </main>
    </div>
  );
}