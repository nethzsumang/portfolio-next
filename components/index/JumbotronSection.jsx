import { useTranslation } from 'react-i18next';

/**
 * JumbotronSection component
 * @author Kenneth Sumang
 */
export default function JumbotronSection () {
  const { t } = useTranslation();

  return (
    <div>
      <div className="home__jumbotron">
        <h1>Kenneth Sumang</h1>
        <p>{ t('HOME.DESCRIPTION') }</p>
      </div>
    </div>
  );
}