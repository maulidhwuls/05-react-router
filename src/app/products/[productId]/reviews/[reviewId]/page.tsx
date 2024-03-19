// pages/products/[productId]/reviews/[reviewId].tsx

import React from 'react';

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetailPage = ({ params }: Props) => {
  const { productId, reviewId } = params;

  return (
    <div>
      <h1>Review Detail Page</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
};

export default ReviewDetailPage;
