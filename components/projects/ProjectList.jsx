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
      <ListGroup className="mb-5">
        <ListGroup.Item
          className={containerStyle}
        >
          <div>
            <b>Portfolio Website</b>
            &emsp;
            <LanguageBadge content="Next" />
            <LanguageBadge content="React" />
            <LanguageBadge content="Javascript" />
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
            <LanguageBadge content="Javascript" />
          </div>
          <div className="mt-1">
            Allows you to create pages and cards, and set it as your personal dashboard.
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
            This is an NPM package that helps SAPUI5 developers to create boilerplate files.
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
            This is my thesis project. It detects glaucoma using image processing and neural network.
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}