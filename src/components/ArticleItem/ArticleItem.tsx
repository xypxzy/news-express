import React from 'react';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import './ArticleItem.css';

export const Article = () => {
	return (
		<section className="article-page">
			<article className="article">
				<section className="article__hero">
					<div className="container article__hero-content">
						<div className="grid">
							<h1 className="article__hero-title">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Atque enim vero perspiciatis
								fugit explicabo, ullam praesentium sit autem
								repellendus nesciunt ipsum blanditiis voluptatum
								porro laboriosam cum sunt quod nulla excepturi.
								Cupiditate nostrum cumque ducimus, provident,
								doloremque voluptates porro quas non enim illum
								fugit magni rem blanditiis beatae praesentium
								laborum harum illo possimus tenetur! Aut in
								quisquam illum odit! Ex, molestiae.
							</h1>
						</div>
						<div className="grid">
							<span className="article-category article__category">
								News
							</span>
							<span className="article-date article__date">
								9 may
							</span>
						</div>
					</div>
				</section>
				<div className="grid container article__main">
					<div className="article__content">
						<div className="article__title-container">
							<h1 className="article__title">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Deleniti quo et magni ullam
								modi, reiciendis expedita ea ipsam impedit aut.
								Laboriosam voluptates quisquam natus vel
								veritatis ipsa adipisci magnam facilis?
							</h1>
							<div className="grid">
								<span className="article-category article__category">
									News
								</span>
								<span className="article-date article__date">
									9 may
								</span>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Harum
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit.
						</p>
						<img src="" alt="logo" />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit.
						</p>
						<img src="" alt="logo" />
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
