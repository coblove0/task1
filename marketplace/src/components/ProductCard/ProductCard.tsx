import React from 'react';
import { TProduct } from 'store/productStore';
import { StyledImage } from '../Catalog/Catalog.styled';

interface ProductCardProps {
  product: TProduct;
  onAddToCart: (id: number) => void;
  isAuthenticated: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, isAuthenticated }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <StyledImage src={product.pic} alt={product.name} />
      <h2 className="text-lg font-semibold">
        {product.name}{' '}
        {isAuthenticated && ( // Условный рендеринг кнопки
          <button onClick={() => onAddToCart(product.id)}>
            {product.inCart ? 'Убрать из корзины' : 'В корзину'}
          </button>
        )}
      </h2>
    </div>
  );
};

export default ProductCard;
