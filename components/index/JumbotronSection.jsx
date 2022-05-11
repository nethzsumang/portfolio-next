import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

/**
 * JumbotronSection component
 * @author Kenneth Sumang
 */
export default function JumbotronSection () {
  const { t } = useTranslation();
  const router = useRouter();

  /**
   * Navigates to resume page
   * @returns {void}
   */
  function navigateToResumePage () {
    window.open('/download/resume.pdf', '_blank');
  }

  return (
    <div>
      <div className="home__jumbotron">
        <h1>Kenneth Sumang</h1>
        <p>{ t('HOME.DESCRIPTION') }</p>
        <Button onClick={navigateToResumePage}>
          { t('NAV.RESUME') }
        </Button>
      </div>
    </div>
  );
}