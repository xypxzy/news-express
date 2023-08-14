import React, { FC } from 'react';
import './SingleLineArticle.css';
import { Link } from 'react-router-dom';

interface SingleLineArticleProps {
  id: number;
  image: string;
  title: string;
  category: string;
  source: string;
  text: string;
}

export const SingleLineTitleArticle: FC<SingleLineArticleProps> = (props) => {
  const { image, title, category, source, text, id } = props;

  return (
    <Link to={`/article/${id}`} className="single-line-title-article">
      <article className="single-line-title-article__container">
        <img className="single-line-title-article__image" src={image} alt="img" />
        <span className="single-line-title-article__category">{category}</span>
        <h2 className="single-line-title-article__title">{title}</h2>
        <p className="single-line-title-article__text">{text}</p>
        <span className="article-source single-line-title-article__source">{source}</span>
      </article>
    </Link>
  );
};
