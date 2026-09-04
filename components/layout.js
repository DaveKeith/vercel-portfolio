import { Fragment, useEffect } from 'react';
import Footer from './footer/footer';
import MainNavigation from './header/main-navigation';

function Layout({ children }) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const onPreferenceChange = (event) => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch (error) {
        return;
      }

      document.documentElement.setAttribute(
        'data-theme',
        event.matches ? 'dark' : 'light'
      );
    };

    media.addEventListener('change', onPreferenceChange);
    return () => media.removeEventListener('change', onPreferenceChange);
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);

    try {
      localStorage.setItem('theme', next);
    } catch (error) {
      // Ignore storage failures (private mode, disabled storage).
    }
  };

  return (
    <Fragment>
      <MainNavigation toggleTheme={toggleTheme} />
      <div className="bg-face" />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
