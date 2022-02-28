import PropTypes from 'prop-types';

/**
 * ResumeSection component
 * @author Kenneth Sumang
 */
function ResumeSection (props, children) {
  return (
    <div className="col-md-12">
      <div className="row resume__header">
        <div className="col-md-12">
          <center>
            <h2>{ props.header }</h2>
          </center>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          { props.children }
        </div>
      </div>
    </div>
  );
}

ResumeSection.propTypes = {
  header: PropTypes.string
};

export default ResumeSection;