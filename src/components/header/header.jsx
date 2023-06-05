import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const navLinkClassNameHandler = ({ isActive, isPending }) => {
    const className = 'navbar-primary__link';
    const modificator = isPending ? ' pending' : isActive ? ' active' : '';
    return `${className}${modificator}`;
  };

  const renderNavSection = () => {
    return (
      <nav className='navbar-primary'>
        <ul className='navbar-primary__list'>
          <li className='navbar-primary__item'>
            <NavLink to='/' className={navLinkClassNameHandler}>
              Home
            </NavLink>
          </li>
          <li className='navbar-primary__item'>
            <NavLink to='/products' className={navLinkClassNameHandler}>
              Products
            </NavLink>
          </li>
          <li className='navbar-primary__item'>
            <NavLink to='/cart' className={navLinkClassNameHandler}>
              Cart ({cart.length})
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className='header'>
      <div className='container'>{renderNavSection()}</div>
    </header>
  );
};

export default Header;
