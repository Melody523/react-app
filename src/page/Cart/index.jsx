import React, { PureComponent } from 'react';
import { CartWrapper } from './style';
import Header from '../../components/Cart/Header.jsx';

class Cart extends PureComponent{
    render() {
        return (
            <CartWrapper>
                <Header></Header>
            </CartWrapper>
        )
    }
}

export default Cart;
