import ProductsItem from './products-item';

const ProductsList = ({ products }) => {
  return products.map((item) => <ProductsItem key={item.id} item={item} />);
};

export default ProductsList;
