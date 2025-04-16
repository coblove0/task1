import { GridContainer } from './Catalog.styled';
import { useProductStore } from 'store/productStore';
import ProductCard from 'components/ProductCard/ProductCard';
import { isAuthenticatedAtom } from 'store/authAtom';
import { useAtom } from 'jotai';

function Catalog() {
  const { products, addToCart } = useProductStore();
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);

  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </GridContainer>
  );
}

export default Catalog;
