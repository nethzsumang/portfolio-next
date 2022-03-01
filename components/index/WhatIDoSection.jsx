import { useTranslation } from 'react-i18next';
import TechnicalSkillCard from './technical-skills/TechnicalSkillCard';

/**
 * WhatIDoSection component
 * @author Kenneth Sumang
 */
export default function WhatIDoSection () {
  return (
    <div className="what-i-do__container">
      <h3> What I Do </h3>
      <p>
        I have almost 4 years of experience developing customer-facing web applications. Below are some of my 
        technical skills.
      </p>

      <div className="technical-skills__container">
        <TechnicalSkillCard header="Laravel" iconSrc="/images/laravel-icon.svg">
          Almost 4 years experience in developing back-end web applications using PHP and Laravel.
        </TechnicalSkillCard>
        <TechnicalSkillCard header="MySQL" iconSrc="/images/mysql-icon.png">
          Almost 4 years experience in creating normalized and optimized tables and queries for efficient web applications.
        </TechnicalSkillCard>
        <TechnicalSkillCard header="Vanilla JavaScript" iconSrc="/images/js-icon.png">
          1 year experience in developing web applications using ES6 and ES5 JavaScript functions.
        </TechnicalSkillCard>
        <TechnicalSkillCard header="VueJS" iconSrc="/images/vue-icon.png">
          2 years experience in creating front-end applications using Vue 2, Vuex, Vue i18n and Vue Router.
        </TechnicalSkillCard>
        <TechnicalSkillCard header="ReactJS" iconSrc="/images/react-icon.png">
          1 year experience in coding React web applications.
        </TechnicalSkillCard> 
      </div>
    </div>
  );
}