import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import CertificatesContainer from '../components/certificates/CertificatesContainer';
import type { RootState } from '../store';

/**
 * Certificates page
 * @author Kenneth Sumang
 * @since  2023.03.23
 */
export default function Certificates() {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
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
        <CertificatesContainer />
      </main>
    </div>
  );
}