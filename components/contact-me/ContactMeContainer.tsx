import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import ReachOutContainer from './ReachOutContainer';
import HorizontalRuleWithText from './HorizontalRuleWithText';
import type { RootState } from '../../store';
import ContactService, { ContactEmailFormData } from '../../services/contact.service';

/**
 * Contact Me Container page
 * @author Kenneth Sumang
 * @since  2023.04.07
 */
export default function ContactMeContainer() {
  const { t } = useTranslation();
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const contentInputRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [ isProcessing, setIsProcessing ] = useState(false);

  /**
   * Handles contact form submission
   */
  async function handleContactFormSubmit() {
    setIsProcessing(true);
    const formData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      subject: subjectInputRef.current.value,
      content: contentInputRef.current.value,
    };

    const contactService = new ContactService();
    const validationResult = await contactService.validateContactFormData({
      ...formData,
      recaptcha: recaptchaRef.current.getValue(),
    });
    if (!validationResult.valid) {
      alert(validationResult.message + ' (' + validationResult.source.join(', ') + ')');
      setIsProcessing(false);
      return;
    }


    const validResponse = await contactService.sendContactEmail(formData as ContactEmailFormData);
    if (!validResponse) {
      alert('Form submission failed.');
      setIsProcessing(false);
      return;
    }

    alert('Successfully submitted. Expect a reply to the email that you provided.');
    // reset form
    resetForm();
    setIsProcessing(false);
  }

  /**
   * Resets the form
   */
  function resetForm() {
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    subjectInputRef.current.value = '';
    contentInputRef.current.value = '';
    recaptchaRef.current.reset();
  }

  return (
    <div>
      <h3 className="pb-3"> Contact Me </h3>
      <div className="col-md-6 col-sm-12">
        <ReachOutContainer />
        <HorizontalRuleWithText text="OR" />
      </div>
      <p>{ t('CONTACT_ME.CONTACT_TEXT') }</p>
      <div className="col-md-6 col-sm-12">
        <Form>
          <div data-bs-theme={appTheme}>
            <Row className="mb-3">
              <Col className="col-md-5">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  ref={nameInputRef}
                />
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  ref={emailInputRef}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  ref={subjectInputRef}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Content"
                  style={{ height: '150px' }}
                  ref={contentInputRef}
                />
              </Col>
            </Row>
          </div>

          <Row className="mb-3">
            <Col>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                theme={appTheme}
                key={appTheme}
              />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="d-flex flex-row">
              <Button
                variant="primary"
                style={{ width: '100px' }}
                onClick={handleContactFormSubmit}
                disabled={isProcessing === true}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

    </div>
  );
}