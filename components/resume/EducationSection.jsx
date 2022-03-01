import { useTranslation } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ExperienceSection from './work-experience/ExperienceSection';

/**
 * EducationSection component
 * @author Kenneth Sumang
 */
export default function EducationSection () {
  const { t } = useTranslation();

  return (
    <ResumeSection header={ t('EDUCATION.HEADER').toUpperCase() }>
      <ExperienceSection
        company="Polytechnic University of the Philippines"
        position="Bachelor of Science in Computer Science"
        yearStart="2014"
        yearEnd="2018"
      ></ExperienceSection>
    </ResumeSection>
  );
}