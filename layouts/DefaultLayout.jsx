import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import DarkModeToggle from 'react-dark-mode-toggle';
import { changeAppTheme, changeLang } from '../store/slices/appSlice';

/**
 * DefaultLayout component
 * @author Kenneth Sumang
 */
export default function DefaultLayout ({ children }) {
  const appTheme = useSelector(state => state.app.appTheme);
  const lang = useSelector(state => state.app.lang);
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(async () => {
    if (window !== undefined) {
      if (appTheme === null) {
        const storageAppTheme = window.localStorage.getItem('portfolio-app-theme') ?? 'light';
        dispatch(changeAppTheme(storageAppTheme));
      }

      const lang = window.localStorage.getItem('portfolio-lang') ?? 'en';
      dispatch(changeLang(lang));
      await i18n.changeLanguage(lang);
    }
  }, []);

  useEffect(() => {
    const pathSetMaxHeight = ['/', '/projects', '/articles'];
    if (pathSetMaxHeight.includes(router.pathname) === true) {
      document.querySelector('html').style.height = '100%';
      document.querySelector('body').style.height = '100%';
      document.querySelector('#__next').style.height = '100%';
    } else {
      document.querySelector('html').style.height = '';
      document.querySelector('body').style.height = '';
      document.querySelector('#__next').style.height = '';
    }
  }, [router.pathname]);

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
   * On change handler for dark mode
   * @param {boolean} isDark
   * @return {void}
   */
  function onChangeThemeToggle(isDark) {
    const theme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-app-theme', theme);
    dispatch(changeAppTheme(theme));
  }

  /**
   * Change language
   * @param {string} langCode 
   */
  async function changeLanguageEvent(langCode) {
    await i18n.changeLanguage(langCode);
    window.localStorage.setItem('portfolio-lang', langCode);
    dispatch(changeLang(langCode));
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

  return (
    <div className={appTheme === 'dark' ? 'd-flex flex-column h-100 __dark-div' : 'd-flex flex-column h-100'}>
      <Navbar bg={appTheme} variant={appTheme} expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            { t('APP_TITLE') }
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                onClick={event => navigate(event, "/")}
                active={isNavActive("/")}
              >
                { t('NAV.HOME') }
              </Nav.Link>

              <Nav.Link
                href="/history"
                onClick={event => navigate(event, "/history")}
                active={isNavActive("/history")}
              >
                { t('NAV.HISTORY' )}
              </Nav.Link>

              <Nav.Link
                href="/projects"
                onClick={event => navigate(event, "/projects")}
                active={isNavActive("/projects")}
              >
                { t('NAV.PROJECTS' )}
              </Nav.Link>

              <Nav.Link
                href="/articles"
                onClick={event => navigate(event, "/articles")}
                active={isNavActive("/articles")}
              >
                { t('NAV.ARTICLES' )}
              </Nav.Link>
            </Nav>

            <Nav className="__dark-mode-toggle-nav">
              <DarkModeToggle
                onChange={onChangeThemeToggle}
                checked={appTheme === 'dark'}
                size={70}
              />
            </Nav>

            <NavDropdown
              title={ t('NAV.LANGUAGE') } menuVariant={appTheme}
              className="language__dropdown">
              <NavDropdown.Item
                onClick={() => changeLanguageEvent("en")}
                active={lang === "en"}
              >
                <Flag code="US" height={16} className="__flag-icon" />
                English
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => changeLanguageEvent("kr")}
                active={lang === "kr"}
              >
                <Flag code="KR" height={20} className="__flag-icon" />
                ??????
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{children}</main>

      <footer className={appTheme === 'dark' ? "footer __dark-div" : "footer"}>
        Site by Kenneth Sumang, 2022
      </footer>
    </div>
  );
}