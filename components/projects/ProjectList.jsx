import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Badge } from 'react-bootstrap';
import LanguageBadge from './LanguageBadge';

/**
 * ProjectList component
 * @author Kenneth Sumang
 */
export default function ProjectList() {
  const { t } = useTranslation();
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('d-flex align-items-start flex-column __dark-div');
    } else {
      setContainerStyle('d-flex align-items-start flex-column');
    }
  }, [appTheme]);

  return (
    <ListGroup className="mb-5">
      <ListGroup.Item
        className={containerStyle}
      >
        <div>
          <b>Portfolio Website</b>
          &emsp;
          <LanguageBadge content="Next" />
          <LanguageBadge content="React" />
          <LanguageBadge content="JavaScript" />
        </div>
        <div className="mt-1">
          Shows my projects and skills. (You're viewing it right now!)
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        className={containerStyle}
      >
        <div>
          <b>Custom Dashboard App</b>
          &emsp;
          <LanguageBadge content="Vue" />
          <LanguageBadge content="JavaScript" />
        </div>
        <div className="mt-1">
          Allows you to create pages and cards, and set it as your personal dashboard.
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}