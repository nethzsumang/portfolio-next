import { useSelector } from 'react-redux';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';
import type { RootState } from '../../store';
import TimelineRecord from './TimelineRecord';

/**
 * Timeline component
 * @author Kenneth Sumang
 */
export default function Timeline() {
  const timelineLineColor = useSelector((state: RootState) => {
    return (state.app.appTheme === 'dark') ? '#cccccc' : '#000';
  });
  const timelineFontColor = useSelector((state: RootState) => {
    return (state.app.appTheme === 'dark') ? '#cccccc' : '#000';
  });
  const timeLineContainerColor = useSelector((state: RootState) => {
    return (state.app.appTheme === 'dark') ? '#000' : '#dee4e7';
  });
  const timelineIconContainerColor = useSelector((state: RootState) => {
    return (state.app.appTheme === 'dark') ? '#000' : '#B3E5FC';
  });
  const { t } = useTranslation();

  return (
    <div className="history__timeline-container">
      <VerticalTimeline
        layout="2-columns"
        animate={false}
        lineColor={timelineLineColor}
      >
        <TimelineRecord
          timeLineContainerColor={timeLineContainerColor}
          timelineFontColor={timelineFontColor}
          timelineIconContainerColor={timelineIconContainerColor}
          position="left"
          date="2023 - Present"
          icon={<i className="bi bi-briefcase timeline-icon"></i>}
          title="Accenture Inc."
          subtitle="Advanced App Engineering Sr. Analyst"
          hasShowMore={false}
          languages={['NextJS', 'Express', 'React', 'Jest', 'Tailwind']}
        >
          <ul>
            <li>Review functional specifications and create technical specifications out of it.</li>
            <li>Implement and customize third-party libraries for diagramming and rich-text editing.</li>
            <li>Design, develop, and implement React front-end components.</li>
            <li>Utilize CSS and other CSS frameworks, such as Tailwind, in building user-friendly user interface.</li>
            <li>Create unit tests for the service layer in the application.</li>
          </ul>
        </TimelineRecord>

        <TimelineRecord
          timeLineContainerColor={timeLineContainerColor}
          timelineFontColor={timelineFontColor}
          timelineIconContainerColor={timelineIconContainerColor}
          position="right"
          date="2018 - 2023"
          icon={<i className="bi bi-briefcase timeline-icon"></i>}
          title="Cafe24 Philippines Inc."
          subtitle="Senior Web Developer"
          hasShowMore={true}
          languages={['Node', 'Typescript', 'PHP', 'Laravel', 'Javascript', 'React', 'Vue']}
        >
          <ul>
            <li>{ t('HISTORY.HISTORY_2_6') }</li>
            <li>{ t('HISTORY.HISTORY_2_5') }</li>
            <li>{ t('HISTORY.HISTORY_2_4') }</li>
            <li>{ t('HISTORY.HISTORY_2_3') }</li>
            <li>{ t('HISTORY.HISTORY_2_2') }</li>
            <li>{ t('HISTORY.HISTORY_2_1') }</li>
          </ul>
        </TimelineRecord>

        <TimelineRecord
          timeLineContainerColor={timeLineContainerColor}
          timelineFontColor={timelineFontColor}
          timelineIconContainerColor={timelineIconContainerColor}
          position="left"
          date="2017"
          icon={<i className="bi bi-briefcase timeline-icon"></i>}
          title="Curo Teknika Inc."
          subtitle="Application Developer Intern"
          hasShowMore={false}
          languages={['PHP', 'Zend', 'jQuery']}
        >
          <p style={{ fontWeight: '400 !important' }}>
            { t('HISTORY.HISTORY_1_1') }
          </p>
        </TimelineRecord>

        <TimelineRecord
          timeLineContainerColor={timeLineContainerColor}
          timelineFontColor={timelineFontColor}
          timelineIconContainerColor={timelineIconContainerColor}
          position="right"
          date="2014 - 2018"
          icon={<i className="bi bi-mortarboard timeline-icon"></i>}
          title="Polytechnic University of the Philippines"
          subtitle="Bachelor of Science in Computer Science"
          hasShowMore={false}
        >
        </TimelineRecord>

        <TimelineRecord
          timeLineContainerColor={timeLineContainerColor}
          timelineFontColor={timelineFontColor}
          timelineIconContainerColor={timelineIconContainerColor}
          position="left"
          date="2010 - 2014"
          icon={<i className="bi bi-mortarboard timeline-icon"></i>}
          title="Pasig City Science High School"
          subtitle="High School"
          hasShowMore={false}
        >
        </TimelineRecord>
      </VerticalTimeline>
    </div>
  );
}