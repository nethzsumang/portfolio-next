import { ListGroup } from 'react-bootstrap';
import {useSelector} from "react-redux";
import {useEffect, useState} from 'react';

/**
 * CertificatesContainer component
 * @author Kenneth Sumang
 * @since  2023.03.23
 */
export default function CertificatesContainer() {
  const appTheme = useSelector(state => state.app.appTheme);
  const [containerStyle, setContainerStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding __dark-div');
    } else {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding');
    }
  }, [appTheme]);

  /**
   * Executes action based on project's index
   * @param {number} index
   */
  function executeAction(index) {
    switch (index) {
      case 1:
        window.open('https://www.coursera.org/account/accomplishments/certificate/FV3LJR58WYT7', '_blank');
        break;
      case 2:
        window.open('https://www.coursera.org/account/accomplishments/certificate/CRYQKRUNU4WW', '_blank');
        break;
      case 3:
        window.open('https://courses.edx.org/certificates/dd5249b1eeb74832ab566db5b366aac8', '_blank');
        break;
    }
  }

  return (
    <div>
      <h3> Certificates </h3>
      <ListGroup className="mb-5 mt-3">
        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(1)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>Neural Networks and Deep Learning</b>
            </div>
          </div>
          <div className="mt-1">
            DeepLearning.AI
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(2)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>Machine Learning with Python</b>
            </div>
          </div>
          <div className="mt-1">
            IBM Skills Network
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(3)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>PH125.8x: Data Science: Machine Learning</b>
            </div>
          </div>
          <div className="mt-1">
            HarvardX
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}