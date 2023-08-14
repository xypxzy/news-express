import React, { useEffect, useState } from 'react';
import { MainArticle } from '../MainArticles/MainArticles';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import './Articles.css';
import { NewsAPI } from '../../types';
import { categoryIds } from '../../utils';
import { useParams } from 'react-router';

export const Articles = () => {
  const { categoryId = 'index' } = useParams<string>();
  const [articles, setArticles] = useState<NewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });

  useEffect(() => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[categoryId] || '')
      .then((response) => response.json())
      .then((response: NewsAPI) => {
        setArticles(response);
      });
  }, [categoryId]);

  return (
    <section className="articles">
      <div className="container grid">
        <section className="articles__big-column">
          {articles.items.slice(0, 3).map((item) => {
            const category = articles.categories.find(({ id }) => item.category_id === id);
            const source = articles.sources.find(({ id }) => item.source_id === id);

            return (
              <MainArticle
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={category ? category.name : ''}
                source={source?.name || ''}
              />
            );
          })}
        </section>
        <section className="articles__small-column">
          {articles.items.slice(3, 12).map((item) => {
            const source = articles.sources.find(({ id }) => item.source_id === id);
            return (
              <SmallArticle
                id={item.id}
                key={item.id}
                title={item.title}
                source={source?.name || ''}
                date={item.date}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
