import React, { useState } from 'react';
import LanguageBadge from '../projects/LanguageBadge';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ShowMore from 'react-show-more-button';

/**
 * TimelineRecordProps structure
 */
interface TimelineRecordProps {
  timeLineContainerColor: string;
  timelineFontColor: string;
  timelineIconContainerColor: string;
  position: 'left'|'right';
  date: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  languages?: string[];
  hasShowMore: boolean;
  children?: JSX.Element | JSX.Element[] | string;
}

/**
 * TimelineRecord component
 * @author Kenneth Sumang
 */
export default function TimelineRecord(props: TimelineRecordProps) {
  const [showMoreText, setShowMoreText] = useState('Show More');

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
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      position={props.position}
      contentStyle={{
        background: props.timeLineContainerColor,
        color: props.timelineFontColor,
        borderRadius: '20px'
      }}
      contentArrowStyle={{ borderRight: '7px solid  ' + props.timeLineContainerColor }}
      date={props.date}
      iconStyle={{ background: props.timelineIconContainerColor, color: props.timelineFontColor }}
      icon={<i className="bi bi-briefcase timeline-icon"></i>}
    >
      <h4 className="vertical-timeline-element-title">{ props.title }</h4>
      <h6 className="vertical-timeline-element-subtitle">{ props.subtitle }</h6>
      {
        (props.languages)
          ? (
            <div className="timeline__badge-container">
              {
                props.languages.map((language) => {
                  return <LanguageBadge content={language} key={props.title + '_' + language} />;
                })
              }
            </div>
          )
          : <></>
      }
      {
        (props.hasShowMore)
          ? (
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
                { props.children }
              </ShowMore>
            </div>
          )
          : props.children
      }
    </VerticalTimelineElement>
  );
}