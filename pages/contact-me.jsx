import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

/**
 * Contact Me page
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContactMe() {
  const appTheme = useSelector(state => state.app.appTheme);
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
        <h1>Contact Me</h1>
      </main>
    </div>
  );
}