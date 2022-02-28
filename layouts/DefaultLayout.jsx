import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import DarkModeToggle from 'react-dark-mode-toggle';
import { changeAppTheme } from '../store/slices/appSlice';

/**
 * DefaultLayout component
 * @author Kenneth Sumang
 */
export default function DefaultLayout ({ children }) {
  const appTheme = useSelector(state => state.app.appTheme);
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

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
    dispatch(changeAppTheme(theme));
  }

  function isNavActive(navPath) {
    const pathName = router.pathname;
    return navPath === pathName;
  }

  return (
    <div className={appTheme === 'dark' ? '__dark-div' : ''}>
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
                href="/resume"
                onClick={event => navigate(event, "/resume")}
                active={isNavActive("/resume")}
              >
                { t('NAV.RESUME' )}
              </Nav.Link>

              <Nav.Link
                href="/skills"
                disabled={true}
                onClick={event => navigate(event, "/skills")}
                active={isNavActive("/skills")}
              >
                { t('NAV.SKILLS' )}
              </Nav.Link>
            </Nav>

            <Nav>
              <DarkModeToggle
                onChange={onChangeThemeToggle}
                checked={appTheme === 'dark'}
                size={70}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{children}</main>
      <footer className="footer">
        © Kenneth Sumang, 2022
      </footer>
    </div>
  );
}