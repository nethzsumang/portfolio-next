import { useTranslation } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ExperienceSection from './work-experience/ExperienceSection';

/**
 * WorkExperienceSection component
 * @author Kenneth Sumang
 */
export default function WorkExperienceSection () {
  const { t } = useTranslation();

  return (
    <ResumeSection header={ t('WORK_EXPERIENCE.HEADER').toUpperCase() }>
      <ExperienceSection
        company="Cafe24 Philippines Inc."
        position="Senior Web Developer"
        yearStart="2021"
        yearEnd="Present"
      >
        <ul className="resume__work-experience__parent_ul">
          <li>
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1') }
            <ul>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1_1') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1_2') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1_3') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1_4') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1_5') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_1_1_6') }</li>
            </ul>
          </li>
        </ul>
      </ExperienceSection>

      <ExperienceSection
        company="Cafe24 Philippines Inc."
        position="Junior Web Developer"
        yearStart="2018"
        yearEnd="2021"
      >
        <ul className="resume__work-experience__parent_ul">
          <li>
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_1') }
            <ul>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_1_1') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_1_2') }</li>
            <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_1_3') }</li>
            </ul>
          </li>
          <li className="resume__work-experience__li">
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_2') }
            <ul>
              <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_2_1') }</li>
              <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_2_2') }</li>
            </ul>
          </li>
          <li className="resume__work-experience__li">
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_3') }
            <ul>
              <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_3_1') }</li>
              <li>{ t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_3_2') }</li>
            </ul>
          </li>
          <li className="resume__work-experience__li">
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_4') }
          </li>
          <li className="resume__work-experience__li">
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_5') }
          </li>
          <li className="resume__work-experience__li">
            { t('WORK_EXPERIENCE.WORK_EXPERIENCE_2_6') }
          </li>
        </ul>
      </ExperienceSection>
    </ResumeSection>
  );
}