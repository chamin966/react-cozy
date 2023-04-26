import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeProduct } from '../store';

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

function ProductInCart({ id, imageUrl, price, title, remove }) {
  const onClickRemoveProductBtn = () => {
    remove(id);
    alert('장바구니에서 해당 품목이 삭제 되었습니다.');
  };
  return (
    <ProductInCartContainer>
      <td>
        <input type='checkbox' />
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
        <input type='number' id='productCount' defaultValue={1} />
      </ProductCountTd>
      <td>{price.toLocaleString()}￦</td>
      <td>
        <RemoveBtn onClick={onClickRemoveProductBtn}>
          <span className='material-symbols-outlined'>close</span>
        </RemoveBtn>
      </td>
    </ProductInCartContainer>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { remove: (id) => dispatch(removeProduct(id)) };
}

export default connect(null, mapDispatchToProps)(ProductInCart);
