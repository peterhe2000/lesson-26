import React from 'react';

import {
  CardItemContainer,
  CartItemImg,
  ItemDetailsContainer,
  ItemDetailsName
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CardItemContainer>
    <CartItemImg src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemDetailsName>{name}</ItemDetailsName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CardItemContainer>
);

export default CartItem;
