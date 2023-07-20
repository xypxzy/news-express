import React, { FC, MouseEvent } from 'react';
import './RelatedSmallArticle.css';

interface RelatedSmallArticleProps {
	image: string;
	title: string;
	category: string;
	source: string;
	onClick: (event: MouseEvent<HTMLElement>) => void;
}

export const RelatedSmallArticle: FC<RelatedSmallArticleProps> = (props) => {
	const { image, title, category, source, onClick } = props;

	return (
		<article className="related-small-article" onClick={onClick}>
			<img
				className="related-small-article__image"
				src={image}
				alt="img"
			/>
			<div className="related-small-article__content">
				<span className="article-category related-small-article__category">
					{category}
				</span>
				<h2 className="related-small-article__title">{title}</h2>
				<span className="article-source related-small-article__source">
					{source}
				</span>
			</div>
		</article>
	);
};
