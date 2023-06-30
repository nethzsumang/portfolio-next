import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

/**
 * LanguageBadgeProps structure
 */
interface LanguageBadgeProps {
  content: string;
}

/**
 * LanguageBadge component
 * @author Kenneth Sumang
 */
function LanguageBadge({ content }: LanguageBadgeProps) {
  return (
    <Badge pill bg="primary" className="projects__badge">
      { content }
    </Badge>
  );
}

LanguageBadge.propTypes = {
  content: PropTypes.string.isRequired
};

export default LanguageBadge;