import styled from '@emotion/styled';
import { useState } from 'react';

type TButton = {
  primary: boolean;
};

const Button = styled.button<TButton>`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: ${(props) => (props.primary ? 'red' : 'turquoise')};
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

function EmotionButton() {
  const [isPrimary, setIsPrimary] = useState(true);

  const handleClick = () => {
    if (isPrimary) {
      setIsPrimary(false);
    } else {
      setIsPrimary(true);
    }
  };
  return (
    <Button primary={isPrimary} onClick={handleClick}>
      This my button component.
    </Button>
  );
}

export default EmotionButton;
