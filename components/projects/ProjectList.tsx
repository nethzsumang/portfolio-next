import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import LanguageBadge from './LanguageBadge';
import type { RootState } from '../../store';

interface ProjectDetail {
  name: string;
  description: string;
  languages: string[];
  onClick: Function;
}

/**
 * ProjectList component
 * @author Kenneth Sumang
 */
export default function ProjectList() {
  const { t } = useTranslation();
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding __dark-div');
    } else {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding');
    }
  }, [appTheme]);

  const projects: ProjectDetail[] = [
    {
      name: 'Portfolio Website',
      description: t('PROJECTS.PROJECT_1_DESCRIPTION'),
      languages: [
        'Next',
        'React',
        'Javascript',
      ],
      onClick: () => alert('You are looking at it right now!'),
    },
    {
      name: 'SAPUI5 Helper',
      description: t('PROJECTS.PROJECT_3_DESCRIPTION'),
      languages: [
        'Javascript',
        'SAPUI5',
      ],
      onClick: () => window.open('https://www.npmjs.com/package/sapui5-helper', '_blank'),
    },
    {
      name: 'Kita Kita: Automatic Detection of Glaucoma',
      description: t('PROJECTS.PROJECT_4_DESCRIPTION'),
      languages: [
        'Python',
        'MATLAB',
        'Tensorflow',
      ],
      onClick: () => alert('This project is private. Ask me for access. Email me at dev@kennethsumang.com.')
    }
  ];

  return (
    <div>
      <h3> My Projects </h3>
      <ListGroup className="mb-5 mt-3">
        {
          projects.map(project => {
            return (
              <ListGroup.Item
                key={project.name}
                className={containerStyle}
                action
                onClick={() => project.onClick()}
              >
                <div className="projects__project-container">
                  <div className="projects__project-header">
                    <b>{ project.name }</b>
                  </div>
                  <div>
                    {
                      project.languages.map(language => {
                        return (
                          <LanguageBadge key={project.name + '-' + language} content={language} />
                        );
                      })
                    }
                  </div>
                </div>
                <div className="mt-1">{ project.description }</div>
              </ListGroup.Item>
            );
          })
        }
      </ListGroup>
    </div>
  );
}