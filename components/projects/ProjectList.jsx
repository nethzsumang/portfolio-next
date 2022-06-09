import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
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

  /**
   * Executes action based on project's index
   * @param {number} index 
   */
  function executeAction(index) {
    switch (index) {
      case 1:
        alert('You are looking at it right now!');
        break;
      case 2:
        window.open('https://custom-dashboard.kennethsumang.com', '_blank');
        break;
      case 3:
        window.open('https://www.npmjs.com/package/sapui5-helper', '_blank');
        break;
      case 4:
        alert('This project is private. Ask me for access. Email me at kdsumang@outlook.com.');
        break;
    }
  }

  return (
    <div>
      <h3> My Projects </h3>
      <ListGroup className="mb-5 mt-3">
        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(1)}
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
          action
          onClick={() => executeAction(2)}
        >
          <div className="projects__project-container">
            <div className="projects__project-header">
              <b>Custom Dashboard App</b>
            </div>
            <div>
              <LanguageBadge content="Vue" />
              <LanguageBadge content="Javascript" />
            </div>
          </div>
          <div className="mt-1">
            { t('PROJECTS.PROJECT_2_DESCRIPTION') }
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(3)}
        >
          <div className="projects__project-container">
            <div className="projects__project-header">
              <b>SAPUI5 Helper</b>
            </div>
            <div>
              <LanguageBadge content="Javascript" />
              <LanguageBadge content="SAPUI5" />
            </div>
          </div>
          <div className="mt-1">
            { t('PROJECTS.PROJECT_3_DESCRIPTION') }
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(4)}
        >
          <div className="projects__project-container">
            <div className="projects__project-header">
              <b>Kita Kita: Automatic Detection of Glaucoma</b>
            </div>
            <div>
              <LanguageBadge content="Python" />
              <LanguageBadge content="MATLAB" />
              <LanguageBadge content="Tensorflow" />
            </div>
          </div>
          <div className="mt-1">
            { t('PROJECTS.PROJECT_4_DESCRIPTION') }
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}