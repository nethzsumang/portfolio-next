import PropTypes from 'prop-types';

/**
 * ExperienceSection component
 * @author Kenneth Sumang
 */
function ExperienceSection (props) {
  return (
    <div>
      <div className="resume__work-experience__company-header">
        <div className="resume__work-experience__company">
          <b>{ props.company }</b>
          <br />
          { props.position }
        </div>
        <div className="resume__work-experience__year-container">
          { props.yearStart } ~ { props.yearEnd }
        </div>
      </div>

      <div className="row col-md-12">
        { props.children }
      </div>
    </div>
  );
}

ExperienceSection.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  yearStart: PropTypes.string.isRequired,
  yearEnd: PropTypes.string
}

export default ExperienceSection;