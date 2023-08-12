import React, { FC, useEffect, useState } from 'react';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import './ArticleItem.css';
import { ArticleItemAPI, Article, RelatedArticlesAPI, Category, Source } from '../../types';
import { beautifyDate } from '../../utils';

interface ArticleProps {
  id: number;
  categories: Category[];
  sources: Source[];
  onArticleClick: (id: number) => void;
}

export const ArticleItem: FC<ArticleProps> = ({ id, sources, categories, onArticleClick }) => {
  const [articleItem, setArticleItem] = useState<ArticleItemAPI | null>(null);
  const [relatedArticle, setRelatedArticle] = useState<Article[] | null>(null);

  useEffect(() => {
    fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
      .then((response) => response.json())
      .then(setArticleItem);

    fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`)
      .then((response) => response.json())
      .then((response: RelatedArticlesAPI) => {
        setRelatedArticle(response.items);
      });
  }, [id]);

  if (articleItem === null || relatedArticle === null) {
    return null;
  }

  return (
    <section className="article-page">
      <article className="article">
        {articleItem.image.length ? (
          <section className="article__hero" style={{ backgroundImage: `url(${articleItem.image})` }}>
            <div className="container article__hero-content">
              <div className="grid">
                <h1 className="article__hero-title">{articleItem.title}</h1>
              </div>
              <div className="grid">
                <span className="article-category article__category">{articleItem.category.name}</span>
                <span className="article-date article__date">{beautifyDate(articleItem.date)}</span>
              </div>
            </div>
          </section>
        ) : null}
        <div className="grid container article__main">
          <div className="article__content">
            {!articleItem.image.length ? (
              <div className="article__title-container">
                <h1 className="article__title">{articleItem.title}</h1>
                <div className="grid">
                  <span className="article-category article__category">{articleItem.category.name}</span>
                  <span className="article-date article__date">{beautifyDate(articleItem.date)}</span>
                </div>
              </div>
            ) : null}
            <p>{articleItem.text}</p>
          </div>

          <div className="article__small-column">
            {relatedArticle.slice(3, 9).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);
              return (
                <RelatedSmallArticle
                  key={item.id}
                  title={item.title}
                  source={source?.name || ''}
                  image={item.image}
                  category={category?.name || ''}
                  onClick={() => onArticleClick(item.id)}
                />
              );
            })}
          </div>
        </div>
      </article>

      <section className="article-page__related-articles">
        <div className="container">
          <h2 className="article-page__related-articles-title">Most interested</h2>
          <div className="grid article-page__related-articles-list">
            {relatedArticle.slice(0, 3).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);
              return (
                <SingleLineTitleArticle
                  key={item.id}
                  title={item.title}
                  source={source?.name || ''}
                  image={item.image}
                  category={category?.name || ''}
                  text={item.description}
                  onClick={() => onArticleClick(item.id)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
