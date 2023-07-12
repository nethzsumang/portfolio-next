import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import type { RootState } from '../../../store';

/**
 * TechnicalSkillCardProps structure
 */
interface TechnicalSkillCardProps {
  iconSrc: string;
  height?: number;
  width?: number;
  header: string;
  children?: React.ReactNode;
}

/**
 * TechnicalSkillCard component
 * @author Kenneth Sumang
 */
function TechnicalSkillCard (props: TechnicalSkillCardProps) {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);

  return (
    <div className="technical-skills__card">
      <Card className="border-0">
        <Card.Body
          className={appTheme === 'dark' ? 'technical-skills__card__body __dark-div' : 'technical-skills__card__body'}
        >
          <Card.Title>
            <Image
              src={props.iconSrc}
              height={props.height || 24}
              width={props.width || 24}
            />
          </Card.Title>
          <Card.Text>
            <b>{ props.header }</b>
            <br />
            { props.children }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

TechnicalSkillCard.propTypes = {
  header: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired
};

export default TechnicalSkillCard;