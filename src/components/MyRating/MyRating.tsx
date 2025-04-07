import { Rating } from '@mui/material';
import React from 'react';

function MyRating() {
  return <Rating name="half-rating" defaultValue={2.5} precision={0.5} />;
}

export default MyRating;
