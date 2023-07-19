import React, { FC, useEffect, useState } from 'react';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import './ArticleItem.css';
import { ArticleItemAPI } from '../../types';
import { beautifyDate } from '../../utils';

interface ArticleProps {
	id: number;
}

export const Article: FC<ArticleProps> = ({ id }) => {
	const [articleItem, setArticleItem] = useState<ArticleItemAPI | null>(null);

	useEffect(() => {
		fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
			.then((response) => response.json())
			.then(setArticleItem);
	}, [id]);

	if (articleItem === null) {
		return null;
	}

	return (
		<section className="article-page">
			<article className="article">
				{articleItem.image.length ? (
					<section
						className="article__hero"
						style={{ backgroundImage: `url(${articleItem.image})` }}
					>
						<div className="container article__hero-content">
							<div className="grid">
								<h1 className="article__hero-title">
									{articleItem.title}
								</h1>
							</div>
							<div className="grid">
								<span className="article-category article__category">
									{articleItem.category.name}
								</span>
								<span className="article-date article__date">
									{beautifyDate(articleItem.date)}
								</span>
							</div>
						</div>
					</section>
				) : null}
				<div className="grid container article__main">
					<div className="article__content">
						{!articleItem.image.length ? (
							<div className="article__title-container">
								<h1 className="article__title">
									{articleItem.title}
								</h1>
								<div className="grid">
									<span className="article-category article__category">
										{articleItem.category.name}
									</span>
									<span className="article-date article__date">
										{beautifyDate(articleItem.date)}
									</span>
								</div>
							</div>
						) : null}
						<p>{articleItem.text}</p>
					</div>

					<div className="article__small-column">
						<RelatedSmallArticle />
						<RelatedSmallArticle />
						<RelatedSmallArticle />
						<RelatedSmallArticle />
						<RelatedSmallArticle />
						<RelatedSmallArticle />
					</div>
				</div>
			</article>

			<section className="article-page__related-articles">
				<div className="container">
					<h2 className="article-page__related-articles-title">
						Most interested
					</h2>
					<div className="grid article-page__related-articles-list">
						<SingleLineTitleArticle />
						<SingleLineTitleArticle />
						<SingleLineTitleArticle />
					</div>
				</div>
			</section>
		</section>
	);
};
