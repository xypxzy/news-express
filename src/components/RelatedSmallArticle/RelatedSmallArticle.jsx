import React from 'react';
import './RelatedSmallArticle.css';

export const RelatedSmallArticle = () => {
	return (
		<article className="related-small-article">
			<img className="related-small-article__image" src="" alt="logo" />
			<div className="related-small-article__content">
				<span className="article-category related-small-article__category">
					Fashion
				</span>
				<h2 className="related-small-article__title">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				</h2>
				<span className="article-source related-small-article__source">
					Bulak
				</span>
			</div>
		</article>
	);
};
