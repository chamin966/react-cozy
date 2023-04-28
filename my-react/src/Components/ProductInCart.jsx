import { connect } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { addProuct, removeProduct } from '../products-in-cart-slice';
import { addOrder, removeOrder } from '../order-slice';

const ProductInCartContainer = styled.tr`
  height: 100px;
`;
const ProductImage = styled.img`
  height: 55px;
  width: 55px;
`;

const ProductInfoTd = styled.td`
  text-align: start;
  #product-info__name {
    font-weight: 600;
    font-size: 1.1rem;
    word-break: keep-all;
    margin-bottom: 5px;
  }
`;

const ProductCountTd = styled.td`
  label {
    margin-right: 5px;
  }
  input {
    width: 30px;
    padding-left: 5px;
  }
`;

const RemoveBtn = styled.button`
  background-color: white;
  border: none;
`;

function ProductInCart({ products, checkedToOrder, id, imageUrl, price, title, count, addP, removeP, addO, removeO }) {
  const [productCount, setProductCount] = useState(count);
  const [totalPrice, setTotalPrice] = useState(price);

  const onClickRemoveProductBtn = () => {
    removeProduct(id);
    alert('장바구니에서 해당 품목이 삭제 되었습니다.');
  };

  const onChangeProductCount = (e) => {
    setProductCount(e.target.value);
    setTotalPrice(price * e.target.value);
    addP({ id, imageUrl, price, title, count: Number(e.target.value) });
    if (checkedToOrder[id] !== undefined) {
      addO({ id, imageUrl, price, title, count: Number(e.target.value) });
    }
    alert('수량이 변경되었습니다.');
  };

  const onChangeChecked = (e) => {
    if (e.target.checked) {
      addO({ id, imageUrl, price, title, count });
    } else {
      removeO(id);
    }
  };

  return (
    <ProductInCartContainer>
      <td>
        <input type='checkbox' name='checkboxForOrder' checked={checkedToOrder[id]} value={id} onChange={onChangeChecked} />
      </td>
      <td>
        <ProductImage src={imageUrl} alt='제목없음' />
      </td>
      <ProductInfoTd>
        <div id='product-info__name'>{title}</div>
        <div>{price.toLocaleString()}￦</div>
      </ProductInfoTd>
      <ProductCountTd>
        <label htmlFor='productCount'>수량</label>
        <input
          type='number'
          id='productCount'
          min={1}
          max={99}
          value={productCount}
          onChange={onChangeProductCount}
          itemID={id}
        />
      </ProductCountTd>
      <td>{totalPrice.toLocaleString()}￦</td>
      <td>
        <RemoveBtn onClick={onClickRemoveProductBtn}>
          <span className='material-symbols-outlined'>close</span>
        </RemoveBtn>
      </td>
    </ProductInCartContainer>
  );
}

function mapStateToProps(state, ownProps) {
  return { products: state.cartReducer, checkedToOrder: state.orderReducer };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addP: (productInfoObj) => dispatch(addProuct(productInfoObj)),
    removeP: (id) => dispatch(removeProduct(id)),
    addO: (productInfoObj) => dispatch(addOrder(productInfoObj)),
    removeO: (id) => dispatch(removeOrder(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCart);
