import React, { FC } from 'react';
import { MainArticle } from '../MainArticles/MainArticles';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import './Articles.css';
import { NewsAPI } from '../../types';

interface ArticlesProps {
	articles: NewsAPI;
	onArticleClick: (id: number) => void;
}

export const Articles: FC<ArticlesProps> = ({ articles, onArticleClick }) => {
	return (
		<section className="articles">
			<div className="container grid">
				<section className="articles__big-column">
					{articles.items.slice(0, 3).map((item) => {
						const category = articles.categories.find(
							({ id }) => item.category_id === id
						);
						const source = articles.sources.find(
							({ id }) => item.source_id === id
						);

						return (
							<MainArticle
								key={item.title}
								title={item.title}
								description={item.description}
								image={item.image}
								category={category ? category.name : ''}
								source={source?.name || ''}
								onClick={() => onArticleClick(item.id)}
							/>
						);
					})}
				</section>
				<section className="articles__small-column">
					{articles.items.slice(3, 12).map((item) => {
						const source = articles.sources.find(
							({ id }) => item.source_id === id
						);
						return (
							<SmallArticle
								key={item.title}
								title={item.title}
								source={source?.name || ''}
								date={item.date}
								onClick={() => onArticleClick(item.id)}
							/>
						);
					})}
				</section>
			</div>
		</section>
	);
};
