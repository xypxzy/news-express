import React, { useEffect } from 'react';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Navigation } from '../Navigation/Navigation';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="container">
          <Navigation placement="header" className="header__navigation" />
        </div>
      </header>

      <main>
        <Routes>
          <Route path={`/article/:id`} element={<ArticleItem />} />
          <Route path={`/:categoryId`} element={<Articles />} />
          <Route path={'/'} element={<Articles />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <Navigation placement="footer" className="footer__navigation" />
          <div className="footer__bottom">
            <p className="footer__text">
              Сделано на Frontend курсе в{' '}
              <a className="footer__link" href="https://karpov.courses/frontend" target="_blank" rel="noreferrer">
                Karpov.Courses
              </a>
            </p>
            <p className="footer__text footer__text--gray">© 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
