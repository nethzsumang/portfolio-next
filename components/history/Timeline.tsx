import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';
import ShowMore from 'react-show-more-button';
import LanguageBadge from '../projects/LanguageBadge';
import type { RootState } from '../../store';

/**
 * Timeline component
 * @author Kenneth Sumang
 */
export default function Timeline() {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const { t } = useTranslation();
  const [showMoreText, setShowMoreText] = useState('Show More');
  const [timelineLineColor, setTimelineLineColor] = useState('#cccccc');
  const [timeLineContainerColor, setTimelineContainerColor] = useState('rgb(33, 150, 243)');
  const [timelineFontColor, setTimelineFontColor] = useState('#cccccc');
  const [timelineIconContainerColor, setTimelineIconContainerColor] = useState('#3498db');

  useEffect(() => {
    if (appTheme === 'dark') {
      setTimelineLineColor('#cccccc');
      setTimelineFontColor('#cccccc');
      setTimelineContainerColor('#000');
      setTimelineIconContainerColor('#000');
    } else {
      setTimelineLineColor('#000');
      setTimelineFontColor('#000');
      setTimelineContainerColor('#dee4e7');
      setTimelineIconContainerColor('#B3E5FC');
    }
  }, [appTheme]);

  /**
   * Handler when show more button is clicked
   * @param {boolean} state 
   */
  function onShowMoreStateChange(state) {
    if (state === false) {
      setShowMoreText('Show Less');
    } else {
      setShowMoreText('Show More');
    }
  }

  return (
    <div className="history__timeline-container">
      <VerticalTimeline
        layout="2-columns"
        animate={false}
        lineColor={timelineLineColor}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="right"
          contentStyle={{ 
            background: timeLineContainerColor,
            color: timelineFontColor,
            borderRadius: '20px' 
          }}
          contentArrowStyle={{ borderRight: '7px solid  ' + timeLineContainerColor }}
          date="2018 - 2023"
          iconStyle={{ background: timelineIconContainerColor, color: timelineFontColor }}
          icon={<i className="bi bi-briefcase timeline-icon"></i>}
        >
          <h4 className="vertical-timeline-element-title">Cafe24 Philippines Inc.</h4>
          <h6 className="vertical-timeline-element-subtitle">Senior Web Developer</h6>
          <div className="timeline__badge-container">
            <LanguageBadge content='Node' />
            <LanguageBadge content='Typescript' />
            <LanguageBadge content="PHP" />
            <LanguageBadge content="Laravel" />
            <LanguageBadge content="JavaScript" />
            <LanguageBadge content="React" />
            <LanguageBadge content="Vue" />
          </div>
          <div className="show-more-container">
            <ShowMore
              maxHeight={150}
              className="show-more-content-container"
              classNameButtonDiv="show-more-button-div"
              button={
                <span className="show-more-button">
                  <u><a>{ showMoreText }</a></u>
                </span>
              }
              onChange={onShowMoreStateChange}
            >
              <ul>
                <li>{ t('HISTORY.HISTORY_2_6') }</li>
                <li>{ t('HISTORY.HISTORY_2_5') }</li>
                <li>{ t('HISTORY.HISTORY_2_4') }</li>
                <li>{ t('HISTORY.HISTORY_2_3') }</li>
                <li>{ t('HISTORY.HISTORY_2_2') }</li>
                <li>{ t('HISTORY.HISTORY_2_1') }</li>
              </ul>
            </ShowMore>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="left"
          contentStyle={{ 
            background: timeLineContainerColor,
            color: timelineFontColor,
            borderRadius: '20px' 
          }}
          contentArrowStyle={{ borderRight: '7px solid  ' + timeLineContainerColor }}
          date="2017"
          iconStyle={{ background: timelineIconContainerColor, color: timelineFontColor }}
          icon={<i className="bi bi-briefcase timeline-icon"></i>}
        >
          <h4 className="vertical-timeline-element-title">Curo Teknika Inc.</h4>
          <h6 className="vertical-timeline-element-subtitle">Application Developer Intern</h6>
          <div className="timeline__badge-container">
            <LanguageBadge content="PHP" />
            <LanguageBadge content="Zend" />
            <LanguageBadge content="jQuery" />
          </div>
          <p>
          { t('HISTORY.HISTORY_1_1') }
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="right"
          contentStyle={{ 
            background: timeLineContainerColor,
            color: timelineFontColor,
            borderRadius: '20px' 
          }}
          contentArrowStyle={{ borderRight: '7px solid  ' + timeLineContainerColor }}
          date="2014 - 2018"
          iconStyle={{ background: timelineIconContainerColor, color: timelineFontColor }}
          icon={<i className="bi bi-mortarboard timeline-icon"></i>}
        >
          <h4 className="vertical-timeline-element-title">Polytechnic University of the Philippines</h4>
          <h6 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="left"
          contentStyle={{ 
            background: timeLineContainerColor,
            color: timelineFontColor,
            borderRadius: '20px' 
          }}
          contentArrowStyle={{ borderRight: '7px solid  ' + timeLineContainerColor }}
          date="2010 - 2014"
          iconStyle={{ background: timelineIconContainerColor, color: timelineFontColor }}
          icon={<i className="bi bi-mortarboard timeline-icon"></i>}
        >
          <h4 className="vertical-timeline-element-title">Pasig City Science High School</h4>
          <h6 className="vertical-timeline-element-subtitle">High School</h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}