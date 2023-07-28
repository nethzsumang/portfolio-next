import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LangLibrary from '../libraries/lang.library';

i18n
  .use(initReactI18next)
  .init({
    resources: LangLibrary.getAllTranslations(),
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

/**
 * react-i18n setup
 * @author Kenneth Sumang 
 */
export default i18n;