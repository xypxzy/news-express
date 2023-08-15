import React, { useEffect, useState } from 'react';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import './ArticleItem.css';
import { Article, ArticleItemAPI, Category, RelatedArticlesAPI, Source } from '../../types';
import { useParams } from 'react-router';
import ArticleItemInfo from '../ArticleItemInfo/ArticleItemInfo';

export const ArticleItem = () => {
  const [articleItem, setArticleItem] = useState<ArticleItemAPI | null>(null);
  const [relatedArticle, setRelatedArticle] = useState<Article[] | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sources, setSources] = useState<Source[]>([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
      .then((response) => response.json())
      .then(setArticleItem);

    Promise.all([
      fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/categories`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/sources`).then((response) => response.json()),
    ]).then((responses) => {
      const articles: RelatedArticlesAPI = responses[0];
      const categories: Category[] = responses[1];
      const sources: Source[] = responses[2];

      setRelatedArticle(articles.items);
      setCategories(categories);
      setSources(sources);
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
              <ArticleItemInfo
                categoryName={articleItem.category.name}
                date={articleItem.date}
                author={articleItem.author}
                sourceLink={articleItem.link}
                sourceName={articleItem.source.name}
              />
            </div>
          </section>
        ) : null}
        <div className="grid container article__main">
          <div className="article__content">
            {!articleItem.image.length ? (
              <div className="article__title-container">
                <h1 className="article__title">{articleItem.title}</h1>
                <ArticleItemInfo
                  categoryName={articleItem.category.name}
                  date={articleItem.date}
                  author={articleItem.author}
                  sourceLink={articleItem.link}
                  sourceName={articleItem.source.name}
                />
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
                  id={item.id}
                  title={item.title}
                  source={source?.name || ''}
                  image={item.image}
                  category={category?.name || ''}
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
                  id={item.id}
                  title={item.title}
                  source={source?.name || ''}
                  image={item.image}
                  category={category?.name || ''}
                  text={item.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
