import { Link } from 'react-router-dom';
import styled from 'styled-components';

//TODO: NewArrivals  컴포넌트랑 내부 구성 똑같음 나중에 최적화시키기

function BestSellers() {
  const BestSellersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 50px;
    }
  `;

  const ProductImg = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: top;
    margin-bottom: 30px;
    &:hover {
      border-radius: 50%;
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    }
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  `;

  const AddCartBtn = styled.button`
    height: auto;
    width: fit-content;
    border: none;
    background-color: white;
    font-size: medium;
    &:hover {
      cursor: pointer;
    }
  `;

  const ProductInfo = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
  `;

  return (
    <BestSellersContainer>
      <Link to={`/${1234}`}>
        <ProductImg src='images/cozy_new1.jpg' alt='제목없음' />
      </Link>
      <ProductInfo>
        <div>제품 이름</div>
        <div>제품 가격</div>
        <AddCartBtn>add cart</AddCartBtn>
      </ProductInfo>
    </BestSellersContainer>
  );
}

export default BestSellers;
