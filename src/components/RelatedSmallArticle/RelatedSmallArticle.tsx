import React, { FC } from 'react';
import './RelatedSmallArticle.css';
import { Link } from 'react-router-dom';

interface RelatedSmallArticleProps {
  image: string;
  title: string;
  category: string;
  source: string;
  id: number;
}

export const RelatedSmallArticle: FC<RelatedSmallArticleProps> = (props) => {
  const { id, image, title, category, source } = props;

  return (
    <Link to={`/article/${id}`} className="related-small-article">
      <article className="related-small-article__container">
        <img className="related-small-article__image" src={image} alt="img" />
        <div className="related-small-article__content">
          <span className="article-category related-small-article__category">{category}</span>
          <h2 className="related-small-article__title">{title}</h2>
          <span className="article-source related-small-article__source">{source}</span>
        </div>
      </article>
    </Link>
  );
};
