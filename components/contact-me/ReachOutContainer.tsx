import Image from 'next/image';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

/**
 * ReachOutContainer component
 * @author Kenneth Sumang
 */
export default function ReachOutContainer() {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const [githubImgSrc, setGithubImgSrc] = useState('/images/github-icon-light.svg');

  useEffect(() => {
    setGithubImgSrc(`/images/github-icon-${appTheme}.svg`);
  }, [appTheme]);

  return (
    <>
      <p>You can reach out to me in these channels.</p>
      <div className="d-flex align-items-center justify-content-center contact-me__reach-out__logo-container">
        <a href="https://www.linkedin.com/in/kenneth-sumang/" target="_blank">
          <Image
            src="/images/linkedin-icon.png"
            height={22}
            width={28}
          />
        </a>
        <a href="https://github.com/nethzsumang" target="_blank">
          <Image
            src={githubImgSrc}
            height={22}
            width={22}
          />
        </a>
        <a href="viber://add?number=%2B639292061793" target="_blank">
          <Image
            src="/images/viber-icon.svg"
            height={24}
            width={30}
          />
        </a>
        <a href="mailto:work@kennethsumang.com" target="_blank">
          <i className="bi bi-envelope contact-me__reach-out__mail"></i>
        </a>
      </div>
    </>
  );
}