import { useTranslation } from 'react-i18next';
import TechnicalSkillCard from './technical-skills/TechnicalSkillCard';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

/**
 * WhatIDoSection component
 * @author Kenneth Sumang
 */
export default function WhatIDoSection () {
  const { t } = useTranslation();
  const jiraLogoUrl = useSelector((state: RootState) => `/images/jira-icon-${state.app.appTheme}.png`);
  const confluenceLogoUrl = useSelector((state: RootState) => `/images/confluence-icon-${state.app.appTheme}.png`);

  return (
    <div className="what-i-do__container">
      <h3>{ t('WHAT_I_DO.HEADER') }</h3>
      <p>{ t('WHAT_I_DO.DESCRIPTION') }</p>

      <div className="technical-skills__container">
        <TechnicalSkillCard header="Laravel" iconSrc="/images/laravel-icon.svg">
          { t('WHAT_I_DO.WHAT_I_DO_1') }
        </TechnicalSkillCard>
        <TechnicalSkillCard header="MySQL" iconSrc="/images/mysql-icon.png">
          { t('WHAT_I_DO.WHAT_I_DO_2') }
        </TechnicalSkillCard>
        <TechnicalSkillCard header="JavaScript" iconSrc="/images/js-icon.png">
          { t('WHAT_I_DO.WHAT_I_DO_3') }
        </TechnicalSkillCard>
        <div className="technical-skills__break"></div>
        <TechnicalSkillCard header="Jira" iconSrc={jiraLogoUrl} height={24} width={58}>
          { t('WHAT_I_DO.WHAT_I_DO_4') }
        </TechnicalSkillCard>
        <TechnicalSkillCard header="Confluence" iconSrc={confluenceLogoUrl} height={24} width={137}>
          { t('WHAT_I_DO.WHAT_I_DO_5') }
        </TechnicalSkillCard> 
      </div>
    </div>
  );
}