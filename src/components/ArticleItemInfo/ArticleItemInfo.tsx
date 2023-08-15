import React, { FC } from 'react';
import { beautifyDate } from '../../utils';
import './ArticleItemInfo.css';

interface ArticleItemInfoProps {
  categoryName: string;
  date: string;
  sourceLink?: string;
  sourceName?: string;
  author?: string;
}

const ArticleItemInfo: FC<ArticleItemInfoProps> = (props) => {
  const { categoryName, sourceName, sourceLink, date, author } = props;

  return (
    <div className="grid">
      <div className="article-item-info__category-container">
        <span className="article-category article-item-info__category">{categoryName}</span>
        {sourceLink && (
          <a className="article-item-info__link" href={sourceLink} target="_blank" rel="noreferrer">
            Источник: {sourceName}
            {author && <span className="article-item-info__author">{author}</span>}
          </a>
        )}
      </div>
      <span className="article-date article-item-info__date">{beautifyDate(date)}</span>
    </div>
  );
};

export default ArticleItemInfo;
