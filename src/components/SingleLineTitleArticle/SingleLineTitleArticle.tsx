import React from 'react';
import './SingleLineArticle.css';

export const SingleLineTitleArticle = () => {
	return (
		<article className="single-line-title-article">
			<img className="single-line-title-article__image" src="" alt="" />
			<span className="single-line-title-article__category">Fashion</span>
			<h2 className="single-line-title-article__title"></h2>
			<p className="single-line-title-article__text"></p>
			<span className="article-source single-line-title-article__source"></span>
		</article>
	);
};
