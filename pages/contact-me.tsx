import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ContactMeContainer from '../components/contact-me/ContactMeContainer';
import type { RootState } from '../store';

/**
 * Contact Me page
 * @author Kenneth Sumang
 * @since  2023.04.07
 */
export default function ContactMe() {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('contact-me__main-container __full-height __dark-div');
    } else {
      setContainerStyle('contact-me__main-container __full-height');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <main>
        <ContactMeContainer />
      </main>
    </div>
  );
}