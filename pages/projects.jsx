import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectList from '../components/projects/ProjectList';

/**
 * Projects page
 * @author Kenneth Sumang
 */
export default function Projects() {
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('container __dark-div');
    } else {
      setContainerStyle('container');
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