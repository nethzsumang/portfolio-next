import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

/**
 * LanguageBadge component
 * @author Kenneth Sumang
 */
function LanguageBadge(props) {
  return (
    <Badge pill variant="primary" className="projects__badge">
      { props.content }
    </Badge>
  );
}

LanguageBadge.propTypes = {
  content: PropTypes.string.isRequired
};

export default LanguageBadge;