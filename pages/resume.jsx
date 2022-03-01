import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NameSection from '../components/resume/NameSection';
import ContactSection from '../components/resume/ContactSection';
import SkillsSection from '../components/resume/SkillsSection';
import AchievementsSection from '../components/resume/AchievementsSection';
import WorkExperienceSection from '../components/resume/WorkExperienceSection';
import EducationSection from '../components/resume/EducationSection';

/**
 * Portfolio page
 * @author Kenneth Sumang
 */
export default function Resume () {
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('resume__container __full-height mb-5 __dark-div');
    } else {
      setContainerStyle('resume__container __full-height mb-5');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <NameSection />
      <ContactSection />
      <SkillsSection />
      <AchievementsSection />
      <WorkExperienceSection />
      <EducationSection />
    </div>
  );
}