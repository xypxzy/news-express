import React, { useState, useEffect, MouseEvent } from 'react';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Navigation } from '../Navigation/Navigation';
import { categoryIds } from '../../utils';
import './App.css';
import { NewsAPI } from '../../types';

console.log('hello');

const App = () => {
  const [articleId, setArticleId] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('index');
  const [articles, setArticles] = useState<NewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });

  const onNavClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setArticleId(null);

    const category = e.currentTarget.dataset.href;
    if (category) setCategory(category);
  };

  const onArticleClick = (id: number) => {
    setArticleId(id);
  };

  useEffect(() => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
      .then((response) => response.json())
      .then((response: NewsAPI) => {
        setArticles(response);
      });
  }, [category]);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <Navigation
            placement="header"
            onNavClick={onNavClick}
            currentCategory={category}
            className="header__navigation"
          />
        </div>
      </header>

      <main>
        {articleId !== null ? (
          <ArticleItem
            id={articleId}
            categories={articles.categories}
            sources={articles.sources}
            onArticleClick={onArticleClick}
          />
        ) : (
          <Articles articles={articles} onArticleClick={onArticleClick} />
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <Navigation
            placement="footer"
            onNavClick={onNavClick}
            currentCategory={category}
            className="footer__navigation"
          />
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
    </React.Fragment>
  );
};

export default App;
