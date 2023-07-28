import { validateRecaptcha } from '../libraries/recaptcha.library';
import * as EmailValidator from 'email-validator';

/**
 * ValidationResultResponse structure
 */
interface ValidationResultResponse {
  valid: boolean;
  message?: string;
  source?: string[];
}

/**
 * ContactEmailFormData structure
 */
export type ContactEmailFormData = {
  name: string;
  email: string;
  subject: string;
  content: string;
}

/**
 * ContactService class
 * @author Kenneth Sumang
 */
export default class ContactService {
  /**
   * Validates contact form datya
   * @param   {Record<string, any>} formData
   * @returns {Promise<ValidationResultResponse>}
   */
  async validateContactFormData(formData: Record<string, any>): Promise<ValidationResultResponse> {
    const emptyFields = this.getFormEmptyFields(formData, ['name', 'email', 'subject', 'content', 'recaptcha']);
    if (emptyFields.length !== 0) {
      return {
        valid: false,
        message: 'You are missing some of the form\'s data. Please check your submission and try again.',
        source: emptyFields,
      };
    }

    const isRecaptchaValid = await validateRecaptcha(formData.recaptcha);
    if (!isRecaptchaValid) {
      return {
        valid: false,
        message: 'Verification failed. Please try again.',
        source: ['recaptcha'],
      };
    }

    const isEmailValid = EmailValidator.validate(formData.email);
    if (!isEmailValid) {
      return {
        valid: false,
        message: 'You have entered an invalid email address. Please check your submission and try again.',
        source: ['email'],
      };
    }

    return { valid: true };
  }

  /**
   * Get empty fields from form
   * @param   {Record<string, any>} data
   * @param   {string[]}            colList
   * @returns {string[]}
   */
  getFormEmptyFields(data: Record<string, any>, colList: string[]): string[] {
    const emptyFields: string[] = [];
    for (const column of colList) {
      if (!data[column]) {
        emptyFields.push(column);
      }
    }
    return emptyFields;
  }

  /**
   * Sends the contact email
   * @param   {ContactEmailFormData} formData
   * @returns {Promise<boolean>}
   */
  async sendContactEmail(formData: ContactEmailFormData): Promise<boolean> {
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response.ok;
  }
}