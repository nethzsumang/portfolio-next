import { useTranslation } from 'react-i18next';
import ResumeSection from './ResumeSection';

/**
 * AchievementsSection component
 * @author Kenneth Sumang
 */
export default function AchievementsSection () {
  const { t } = useTranslation();

  return (
    <ResumeSection header={ t('ACHIEVEMENTS.HEADER').toUpperCase() }>
      <b>{ t('ACHIEVEMENTS.UNIVERSITY') }:</b>
      <ul>
        <li>{ t('ACHIEVEMENTS.ACHIEVEMENT_1') }</li>
        <li>{ t('ACHIEVEMENTS.ACHIEVEMENT_2') }</li>
        <li>{ t('ACHIEVEMENTS.ACHIEVEMENT_3') }</li>
        <li>{ t('ACHIEVEMENTS.ACHIEVEMENT_4') }</li>
        <li>{ t('ACHIEVEMENTS.ACHIEVEMENT_5') }</li>
        <li>{ t('ACHIEVEMENTS.ACHIEVEMENT_6') }</li>
      </ul>
    </ResumeSection>
  );
}