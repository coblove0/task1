import { GridContainer } from './Catalog.styled';
import { useProductStore } from 'store/productStore';
import ProductCard from 'components/ProductCard/ProductCard';
import { isAuthenticatedAtom } from 'store/authAtom';
import { useAtom } from 'jotai';

function Catalog() {
  const { products, addToCart } = useProductStore();
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);

  if (!products || products.length === 0) {
    return <p>Каталог пуст. Добавьте товары в систему.</p>;
  }

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
