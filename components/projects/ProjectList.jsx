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
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding __dark-div');
    } else {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding');
    }
  }, [appTheme]);

  return (
    <div>
      <h3> My Projects </h3>
      <ListGroup className="mb-5 mt-3">
        <ListGroup.Item
          className={containerStyle}
        >
          <div className="projects__project-container">
            <div className="projects__project-header">
              <b>Portfolio Website</b>
            </div>
            <div>
              <LanguageBadge content="Next" />
              <LanguageBadge content="React" />
              <LanguageBadge content="Javascript" />
            </div>
          </div>
          <div className="mt-1">
            { t('PROJECTS.PROJECT_1_DESCRIPTION') }
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
        >
          <div>
            <b>Custom Dashboard App</b>
            &emsp;
            <LanguageBadge content="Vue" />
            <LanguageBadge content="Javascript" />
          </div>
          <div className="mt-1">
          { t('PROJECTS.PROJECT_2_DESCRIPTION') }
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
        >
          <div>
            <b>SAPUI5 Helper</b>
            &emsp;
            <LanguageBadge content="Javascript" />
            <LanguageBadge content="SAPUI5" />
          </div>
          <div className="mt-1">
          { t('PROJECTS.PROJECT_3_DESCRIPTION') }
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
        >
          <div>
            <b>Kita Kita: Automatic Detection of Glaucoma</b>
            &emsp;
            <LanguageBadge content="Python" />
            <LanguageBadge content="MATLAB" />
            <LanguageBadge content="Tensorflow" />
          </div>
          <div className="mt-1">
          { t('PROJECTS.PROJECT_4_DESCRIPTION') }
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}