import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cartItem';
import CustomButton from '../custom-button/customButton';
import './cartDropdown.scss';

const cartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(cartDropdown);
