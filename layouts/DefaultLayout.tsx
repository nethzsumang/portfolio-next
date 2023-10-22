import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { changeAppTheme } from '../store/slices/appSlice';
import type { RootState } from '../store';

/**
 * RouteInfo structure
 */
interface RouteInfo {
  link: string;
  title: string;
}

/**
 * DefaultLayout component
 * @author Kenneth Sumang
 */
export default function DefaultLayout ({ children }) {
  const appTheme = useSelector((state: RootState) => state.app.appTheme);
  const [appVersion, setAppVersion] = useState('');
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const routes: RouteInfo[] = [
    {
      link: '/',
      title: t('NAV.HOME'),
    },
    {
      link: '/history',
      title: t('NAV.HISTORY'),
    },
    {
      link: '/projects',
      title: t('NAV.PROJECTS'),
    },
    {
      link: '/articles',
      title: t('NAV.ARTICLES'),
    },
    {
      link: '/certificates',
      title: t('NAV.CERTIFICATES'),
    },
    {
      link: '/contact-me',
      title: t('NAV.CONTACT_ME'),
    },
  ];

  useEffect(() => {
    getAppVersion();
    dispatch(changeAppTheme('light'));
  }, []);

  useEffect(() => {
    // fix for white div on the index page
    if (router.pathname === '/') {
      document.querySelectorAll('main div').forEach((element: HTMLElement) => {
        element.style.height = '100%';
        element.style.minHeight = '100%';
      });
    }

    const pathSetMaxHeight = ['/', '/projects', '/articles', '/certificates', '/contact-me'];
    if (pathSetMaxHeight.includes(router.pathname) === true) {
      document.querySelector('html').style.height = '100%';
      document.querySelector('body').style.height = '100%';
      (document.querySelector('#__next') as HTMLElement).style.height = '100%';
    } else {
      document.querySelector('html').style.height = '';
      document.querySelector('body').style.height = '';
      (document.querySelector('#__next') as HTMLElement).style.height = '';
    }
  }, [router.pathname]);

  /**
   * Sets the app version
   * @returns {Promise<void>}
   */
  async function getAppVersion() {
    const response = await fetch('/api/version', {
      method: 'GET'
    });
    const responseJson = await response.json();
    setAppVersion(responseJson);
  }

  /**
   * Navigates to a given path
   * @param {object} event
   * @param {string} path
   * @returns {void}
   */
  function navigate(event, path) {
    event.preventDefault();
    event.stopPropagation();
    router.push(path);
  }

  /**
   * Checks if nav is active
   * @param {string} navPath 
   * @returns 
   */
  function isNavActive(navPath) {
    const pathName = router.pathname;
    return navPath === pathName;
  }

  function getAppVersionString() {
    const appVersionString = appVersion['version'] || '';
    const appVersionDate = appVersion['since'] ? appVersion['since'].substring(0, 10) : '';

    return 'Portfolio v' + appVersionString + ' (' + appVersionDate + ')';
  }

  return (
    <div className='d-flex flex-column h-100 container__div'>
      <Navbar bg={appTheme} variant={appTheme} expand="lg" collapseOnSelect={true} >
        <Container>
          <Navbar.Brand href="#home">
            { t('APP_TITLE') }
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                routes.map((route: RouteInfo) => {
                  return (
                    <Nav.Link
                      key={route.link}
                      href={route.link}
                      onClick={(event) => navigate(event, route.link)}
                      active={isNavActive(route.link)}
                    >
                      { route.title }
                    </Nav.Link>
                  );
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{children}</main>

      <footer className="d-flex flex-column pt-2 pb-2 footer container__div">
        <p className="mb-0 text-center"> { getAppVersionString() } </p>
        <small className="mb-0 text-center">All trademarks, logos and brand names are the property of their respective owners.</small>
      </footer>
    </div>
  );
}