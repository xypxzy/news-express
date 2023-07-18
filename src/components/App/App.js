import React, { useState, useEffect } from 'react';
import { Articles } from '../Articles/Articles.js';
import { Article } from '../ArticleItem/ArticleItem.jsx';
import { Navigation } from '../Navigation/Navigation.js';
import { categoryIds } from '../../utils.js';
import './App.css';

const App = () => {
	const [articleId, setArticleId] = useState(null);
	const [category, setCategory] = useState('index');
	const [articles, setArticles] = useState({
		items: [],
		categories: [],
		sources: [],
	});

	const onNavClick = (e) => {
		e.preventDefault();
		setCategory(e.currentTarget.dataset.href);
	};

	const onArticleClick = (id) => {
		setArticleId(id);
	};

	useEffect(() => {
		fetch(
			'https://frontend.karpovcourses.net/api/v2/ru/news/' +
				categoryIds[category] || ''
		)
			.then((response) => response.json())
			.then((response) => {
				setArticles(response);
			});
	}, [category]);

	return (
		<React.Fragment>
			<header className="header">
				<div className="container">
					<Navigation
						placement="header"
						onNavClick={onNavClick}
						currentCategory={category}
						className="header__navigation"
					/>
				</div>
			</header>

			<main>
				{articleId !== null ? (
					<Article />
				) : (
					<Articles
						articles={articles}
						onArticleClick={onArticleClick}
					/>
				)}
			</main>

			<footer className="footer">
				<div className="container">
					<Navigation
						placement="footer"
						onNavClick={onNavClick}
						currentCategory={category}
						className="footer__navigation"
					/>
					<div className="footer__bottom">
						<p className="footer__text">
							Сделано на Frontend курсе в{' '}
							<a
								className="footer__link"
								href="https://karpov.courses/frontend"
								target="_blank"
							>
								Karpov.Courses
							</a>
						</p>
						<p className="footer__text footer__text--gray">
							© 2021
						</p>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default App;
