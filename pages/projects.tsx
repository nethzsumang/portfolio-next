import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectList from '../components/projects/ProjectList';
import type { RootState } from '../store';

/**
 * Projects page
 * @author Kenneth Sumang
 */
export default function Projects() {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('projects__container __full-height __dark-div');
    } else {
      setContainerStyle('projects__container __full-height');
    }
  }, [appTheme]);

  return (
    <div className={containerStyle}>
      <main>
        <ProjectList />
      </main>
    </div>
  )
}