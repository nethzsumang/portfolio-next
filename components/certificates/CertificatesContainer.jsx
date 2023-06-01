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
  const [certificateDateStyle, setCertificateDateStyle] = useState('');

  useEffect(() => {
    if (appTheme === 'dark') {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding __dark-div');
      setCertificateDateStyle('certificates__certificate-date-dark');
    } else {
      setContainerStyle('d-flex align-items-start flex-column __no-left-padding');
      setCertificateDateStyle('certificates__certificate-date-light');
    }
  }, [appTheme]);

  /**
   * Executes action based on project's index
   * @param {number} index
   */
  function executeAction(index) {
    switch (index) {
      case 1:
        window.open('https://courses.edx.org/certificates/dd5249b1eeb74832ab566db5b366aac8', '_blank');
        break;
      case 2:
        window.open('https://www.coursera.org/account/accomplishments/certificate/CRYQKRUNU4WW', '_blank');
        break;
      case 3:
        window.open('https://www.coursera.org/account/accomplishments/certificate/FV3LJR58WYT7', '_blank');
        break;
      case 4:
        window.open('https://www.udemy.com/certificate/UC-1fc816ce-cd58-4170-8378-86f5be9986af/', '_blank');
        break;
      case 5:
        window.open('https://www.udemy.com/certificate/UC-7b5988a1-42fb-470e-8e7c-f3812b39962a/', '_blank');
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
          onClick={() => executeAction(5)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>How to Run truly Productive Meetings - and add value</b>
            </div>
          </div>
          <div className="mt-1">
            Udemy
          </div>
          <small className={certificateDateStyle}>Issued May 2023</small>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(4)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>Clean Code</b>
            </div>
          </div>
          <div className="mt-1">
            Udemy
          </div>
          <small className={certificateDateStyle}>Issued May 2023</small>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(3)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>Neural Networks and Deep Learning</b>
            </div>
          </div>
          <div className="mt-1">
            DeepLearning.AI
          </div>
          <small className={certificateDateStyle}>Issued November 2020</small>
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
          <small className={certificateDateStyle}>Issued August 2020</small>
        </ListGroup.Item>

        <ListGroup.Item
          className={containerStyle}
          action
          onClick={() => executeAction(1)}
        >
          <div className="certificates__certificate-container">
            <div className="certificates__certificate-header">
              <b>PH125.8x: Data Science: Machine Learning</b>
            </div>
          </div>
          <div className="mt-1">
            HarvardX
          </div>
          <small className={certificateDateStyle}>Issued June 2020</small>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}