import { useTranslation } from 'react-i18next';
import TechnicalSkillCard from './technical-skills/TechnicalSkillCard';

/**
 * WhatIDoSection component
 * @author Kenneth Sumang
 */
export default function WhatIDoSection () {
  const { t } = useTranslation();

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
        <TechnicalSkillCard header="Vanilla JavaScript" iconSrc="/images/js-icon.png">
          { t('WHAT_I_DO.WHAT_I_DO_3') }
        </TechnicalSkillCard>
        <div className="technical-skills__break"></div>
        <TechnicalSkillCard header="VueJS" iconSrc="/images/vue-icon.png">
          { t('WHAT_I_DO.WHAT_I_DO_4') }
        </TechnicalSkillCard>
        <TechnicalSkillCard header="ReactJS" iconSrc="/images/react-icon.png">
          { t('WHAT_I_DO.WHAT_I_DO_5') }
        </TechnicalSkillCard> 
      </div>
    </div>
  );
}