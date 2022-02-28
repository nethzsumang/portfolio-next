import { useTranslation } from 'react-i18next';
import ResumeSection from './ResumeSection';

/**
 * SkillsSection component
 * @author Kenneth Sumang
 */
export default function SkillsSection () {
  const { t } = useTranslation();

  return (
    <ResumeSection header={t('SKILLS.HEADER').toUpperCase()}>
      <ul>
        <li>{ t('SKILLS.SKILL_1') }</li>
        <li>{ t('SKILLS.SKILL_2') }</li>
        <li>{ t('SKILLS.SKILL_3') }</li>
        <li>{ t('SKILLS.SKILL_4') }</li>
        <li>{ t('SKILLS.SKILL_5') }</li>
        <li>{ t('SKILLS.SKILL_6') }</li>
        <li>{ t('SKILLS.SKILL_7') }</li>
      </ul>
    </ResumeSection>
  );
}