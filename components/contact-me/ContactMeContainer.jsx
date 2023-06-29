import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import ReachOutContainer from "./ReachOutContainer";
import HorizontalRuleWithText from "./HorizontalRuleWithText";

/**
 * Contact Me Container page
 * @author Kenneth Sumang
 * @since  2023.04.07
 */
export default function ContactMeContainer() {
  const { t } = useTranslation();
  const appTheme = useSelector(state => state.app.appTheme);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ content, setContent ] = useState('');
  const [ recaptchaValue, setRecaptchaValue ] = useState(false);
  const [ isProcessing, setIsProcessing ] = useState(false);
  let recaptchaRef;

  /**
   * Sets ref for recaptcha
   * @param ref
   */
  function setRecaptchaRef(ref) {
    if (ref) {
      recaptchaRef = ref;
    }
  }

  /**
   * Handles contact form submission
   */
  async function handleContactFormSubmit() {
    setIsProcessing(true);
    if (recaptchaValue !== true) {
      alert('Please check the captcha checkbox.');
      setIsProcessing(false);
      return;
    }

    const verifyTokenResponse = await verifyRecaptcha();
    if (verifyTokenResponse === false) {
      alert('Verification failed. Please try again.');
      setIsProcessing(false);
      return;
    }

    if (name.length === 0 || email.length === 0 || subject.length === 0 || content.length === 0) {
      alert('You are missing some of the form\'s data. Please check your submission and try again.');
      setIsProcessing(false);
      return;
    }

    const formData = {
      name: name,
      email: email,
      subject: subject,
      content: content
    };

    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok === false) {
      alert('Form submission failed.');
      setIsProcessing(false);
      return;
    }

    alert('Successfully submitted. Expect a reply to the email that you provided.');
    // reset form
    setName('');
    setEmail('');
    setSubject('');
    setContent('');
    recaptchaRef.reset();
    setIsProcessing(false);
  }

  /**
   * Verify recaptcha
   * @returns {Promise<boolean>}
   */
  async function verifyRecaptcha() {
    const token = recaptchaRef.getValue();
    const response = await fetch('/api/verify-captcha', {
      method: 'POST',
      body: JSON.stringify({ token: token })
    });
    return response.ok;
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
                  value={name}
                  onChange={ (e) => setName(e.target.value) }
                />
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={ (e) => setSubject(e.target.value) }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Content"
                  style={{ height: '150px' }}
                  value={content}
                  onChange={ (e) => setContent(e.target.value) }
                />
              </Col>
            </Row>
          </div>

          <Row className="mb-3">
            <Col>
              <ReCAPTCHA
                ref={(ref) => setRecaptchaRef(ref)}
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={ () => setRecaptchaValue(true) }
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