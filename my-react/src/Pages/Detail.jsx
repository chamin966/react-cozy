import styled from 'styled-components';

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

function Detail() {
  return (
    <DetailContainer>
      <DetailBox>
        <ProductImage src='/images/cozy_item1.jpg' alt='제목없음' />
        <InfoBox>
          <TextInfoBox>
            <h1>제품 이름</h1>
            <div>12,000원</div>
            <div>제품 상세 설명</div>
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
            <button>ADD CART</button>
            <button>ODER</button>
          </PayButtonBox>
        </InfoBox>
      </DetailBox>
    </DetailContainer>
  );
}

export default Detail;
