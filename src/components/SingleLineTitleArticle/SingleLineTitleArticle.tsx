import React, { FC, MouseEvent } from 'react';
import './SingleLineArticle.css';

interface SingleLineArticleProps {
	image: string;
	title: string;
	category: string;
	source: string;
	text: string;
	onClick: (event: MouseEvent<HTMLElement>) => void;
}

export const SingleLineTitleArticle: FC<SingleLineArticleProps> = (props) => {
	const { image, title, category, source, text, onClick } = props;

	return (
		<article className="single-line-title-article" onClick={onClick}>
			<img
				className="single-line-title-article__image"
				src={image}
				alt="img"
			/>
			<span className="single-line-title-article__category">
				{category}
			</span>
			<h2 className="single-line-title-article__title">{title}</h2>
			<p className="single-line-title-article__text">{text}</p>
			<span className="article-source single-line-title-article__source">
				{source}
			</span>
		</article>
	);
};
