import React, { useEffect, useState } from 'react';
import ProductsList from './products-list';
import Loader from '../../components/loader/loader';
import axios from 'axios';
import ProductsPagination from './products-pagination';
import { useSearchParams } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 20;

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      document.title = 'E-Commerce - Produsts';
      setIsLoading(true);

      const page = searchParams.get('page') ?? 1;
      setCurrentPage(+page);

      const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const response = await axios.get(`https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`);

      setTotalProducts(response.data.total);
      setProducts(response.data.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, [currentPage, searchParams]);

  return (
    <Loader isLoading={isLoading}>
      <ProductsPagination productsPerPage={PRODUCTS_PER_PAGE} totalProducts={totalProducts} currentPage={currentPage} />
      <div className='offers__content'>
        <ProductsList products={products} />
      </div>
    </Loader>
  );
};

export default ProductsContainer;
