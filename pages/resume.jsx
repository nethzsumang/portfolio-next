import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NameSection from '../components/resume/NameSection';
import ContactSection from '../components/resume/ContactSection';

/**
 * Portfolio page
 * @author Kenneth Sumang
 */
export default function Resume () {
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('resume__container __full-height __dark-div');
    } else {
      setContainerStyle('resume__container __full-height');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <NameSection />
      <ContactSection />
    </div>
  );
}