import HomeContainer from '../pages/home/home-container';
import CartContainer from '../pages/cart/cart-container';
import ProductsContainer from '../pages/products/products-container';
import withBasicLayout from '../hocs/with-basic-layout/with-basic-layout';

export const routers = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: withBasicLayout(HomeContainer)(),
      },
      {
        path: "products",
        children: [
          {
            path: "/products",
            element: withBasicLayout(ProductsContainer)(),
          }
        ]
      },
      {
        path: "/cart",
        element: withBasicLayout(CartContainer)(),
      }
    ]
  }
];