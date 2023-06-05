import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPagination = ({ productsPerPage, totalProducts, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const linkClassNameHandler = (number) => {
    const className = 'page-link';
    const modificator = currentPage === number ? ' active' : '';
    return `${className}${modificator}`;
  };

  return (
    <nav>
      <ul className='products-pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <Link to={`/products?page=${number}`} className={linkClassNameHandler(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductsPagination;
