import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { addProuct } from '../store';

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 20px;
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px 0px;
  gap: 30px;
  width: 1000px;
`;

const ProductImage = styled.img`
  max-height: auto;
  max-width: 100%;
  right: 0px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInfoBox = styled.div`
  h1 {
    margin: 15px 0px;
  }
  div {
    margin-bottom: 30px;
  }

  border-bottom: 1px solid gainsboro;
`;

const EaInfoBox = styled.div`
  display: flex;
  gap: 10px;
  height: 1.2rem;
  input {
    width: 35px;
  }
`;

const PayInfoBox = styled.div`
  margin-top: 30px;
`;

const PayInfoBoxPriceAndTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PayButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  button {
    height: 40px;
    background-color: #e57428;
    color: white;
    border: none;
    border-radius: 12px;
  }
  button:hover {
    cursor: pointer;
  }
`;

function Detail({ addCart }) {
  const location = useLocation();
  const productInfo = location.state;

  const onClickAddCartBtn = () => {
    addCart(productInfo);
    alert('장바구니에 품목이 담겼습니다.');
  };

  return (
    <DetailContainer>
      <DetailBox>
        <ProductImage src={productInfo.imageUrl} alt='제목없음' />
        <InfoBox>
          <TextInfoBox>
            <h1>{productInfo.title}</h1>
            <div>{productInfo.price.toLocaleString()}원</div>
            <div>{productInfo.title}</div>
            <EaInfoBox>
              <div>수량</div>
              <input type='number' defaultValue={1} />
            </EaInfoBox>
          </TextInfoBox>
          <PayInfoBox>
            <PayInfoBoxPriceAndTotal>
              <div>Total Price</div>
              <div>12,000 원</div>
            </PayInfoBoxPriceAndTotal>
            <PayInfoBoxPriceAndTotal>
              <div>Total Item</div>
              <div>1 ea</div>
            </PayInfoBoxPriceAndTotal>
          </PayInfoBox>
          <PayButtonBox>
            <button onClick={onClickAddCartBtn}>ADD CART</button>
            <button>ODER</button>
          </PayButtonBox>
        </InfoBox>
      </DetailBox>
    </DetailContainer>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addCart: (productInfoObj) => dispatch(addProuct(productInfoObj)),
  };
}

export default connect(null, mapDispatchToProps)(Detail);
