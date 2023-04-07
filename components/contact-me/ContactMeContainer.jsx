import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Contact Me Container page
 * @author Kenneth Sumang
 * @since  2023.04.07
 */
export default function ContactMeContainer() {
  const { t } = useTranslation();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ content, setContent ] = useState('');
  const [ recaptchaValue, setRecaptchaValue ] = useState(false);

  return (
    <div>
      <h3> Contact Me </h3>
      <p>{ t('CONTACT_ME.CONTACT_TEXT') }</p>
      <div className="col-6">
        <Form>
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

          <Row className="mb-3">
            <Col>
              <ReCAPTCHA
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={ () => setRecaptchaValue(true) }
              />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="d-flex flex-row">
              <Button variant="primary" style={{ width: '100px' }}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

    </div>
  );
}