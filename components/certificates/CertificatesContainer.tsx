import { ListGroup } from 'react-bootstrap';

/**
 * CertificateInfo structure
 */
interface CertificateInfo {
  name: string;
  url: string;
  issuer: string;
  issuedAt: string;
}

/**
 * CertificatesContainer component
 * @author Kenneth Sumang
 * @since  2023.03.23
 */
export default function CertificatesContainer() {
  const certificates: CertificateInfo[] = [
    {
      name: 'Learning Next.js',
      url: 'https://www.linkedin.com/learning/certificates/bb536673fb939f19a6e50ab3f0a9b91c548965ed5dbf9522b83630b04b0981a0',
      issuer: 'LinkedIn Learning',
      issuedAt: 'July 2023',
    },
    {
      name: 'React.js Essential Training',
      url: 'https://www.linkedin.com/learning/certificates/d9f89924e0452a3934f63f8c1c4d9cb5bdee3bf3cd53158439810d140279e70a',
      issuer: 'LinkedIn Learning',
      issuedAt: 'June 2023',
    },
    {
      name: 'TypeScript Essential Training',
      url: 'https://www.linkedin.com/learning/certificates/8fae98083879c65608b41d1b13c523cc7aa7a1c775cd0a3ddb066c38046987bf',
      issuer: 'LinkedIn Learning',
      issuedAt: 'June 2023',
    },
    {
      name: 'How to Run truly Productive Meetings - and add value',
      url: 'https://www.udemy.com/certificate/UC-7b5988a1-42fb-470e-8e7c-f3812b39962a/',
      issuer: 'Udemy',
      issuedAt: 'May 2023',
    },
    {
      name: 'Clean Code',
      url: 'https://www.udemy.com/certificate/UC-1fc816ce-cd58-4170-8378-86f5be9986af/',
      issuer: 'Udemy',
      issuedAt: 'May 2023',
    },
    {
      name: 'Neural Networks and Deep Learning',
      url: 'https://www.coursera.org/account/accomplishments/certificate/FV3LJR58WYT7',
      issuer: 'DeepLearning.AI',
      issuedAt: 'November 2020',
    },
    {
      name: 'Machine Learning with Python',
      url: 'https://www.coursera.org/account/accomplishments/certificate/CRYQKRUNU4WW',
      issuer: 'IBM Skills Network',
      issuedAt: 'August 2020',
    },
    {
      name: 'PH125.8x: Data Science: Machine Learning',
      url: 'https://courses.edx.org/certificates/dd5249b1eeb74832ab566db5b366aac8',
      issuer: 'HarvardX',
      issuedAt: 'June 2020',
    },
  ];

  return (
    <>
      <h3> Certificates </h3>
      <ListGroup className="mb-5 mt-3">
        {
          certificates.map((certificate) => {
            return (
              <ListGroup.Item
                key={certificate.name}
                className="d-flex align-items-start flex-column __no-left-padding container__div"
                action
                onClick={ () => window.open(certificate.url, '_blank') }
              >
                <div className="certificates__certificate-container">
                  <div className="certificates__certificate-header">
                    <b>{certificate.name}</b>
                  </div>
                </div>
                <div className="mt-1">{certificate.issuer}</div>
                <small className="certificates__certificate-date">Issued {certificate.issuedAt}</small>
              </ListGroup.Item>
            );
          })
        }
      </ListGroup>
    </>
  );
}