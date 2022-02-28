import enTranslation from '../i18n/en';

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
      }
    };
  }
}