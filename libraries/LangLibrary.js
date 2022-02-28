import enTranslation from '../i18n/en';
import krTranslation from '../i18n/kr';

/**
 * Language Library class
 * @author Kenneth Sumang
 */
export default class LangLibrary {
  /**
   * Gets all translation, bundled with react-i18n format
   * @returns {object}
   */
  static getAllTranslations() {
    return {
      en: {
        translation: enTranslation.translation
      },
      kr: {
        translation: krTranslation.translation
      }
    };
  }
}