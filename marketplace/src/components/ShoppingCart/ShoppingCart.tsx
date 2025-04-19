import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { CartContainer } from './ShoppingCart.styled';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/cart'); // Переход на страницу корзины
  };

  return (
    <CartContainer onClick={handleNavigateToCart} style={{ cursor: 'pointer' }}>
      <ShoppingBasketIcon />
    </CartContainer>
  );
}

export default ShoppingCart;
