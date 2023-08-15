import React, { FC } from 'react';
import { categoryNames } from '../../utils';
import logo from '../../images/logo.svg';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  className?: string;
  placement: 'header' | 'footer';
}

export const Navigation: FC<NavigationProps> = ({ className = '', placement = 'header' }) => {
  return (
    <nav className={`grid navigation navigation--${placement} ${className}`}>
      <NavLink to={'/'} className="navigation__logo">
        <img className="navigation__logo-image" src={logo} alt="Логотип" />
        {/*<Logo className="navigation__logo-image" />*/}
      </NavLink>
      <ul className="navigation__list">
        {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
          return (
            <li className="navigation__item" key={item}>
              <NavLink to={item === 'index' ? '/' : item} className={`navigation__link `}>
                {categoryNames[item]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
