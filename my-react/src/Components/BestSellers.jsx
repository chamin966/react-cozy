import { Link } from 'react-router-dom';
import styled from 'styled-components';

function BestSellers() {
  const NewArrivalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ProductImg = styled.img`
    height: 245px;
    width: 245px;
    object-fit: cover;
    object-position: top;
    margin-bottom: 30px;
    &:hover {
      border-radius: 50%;
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    }
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
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
    <NewArrivalsContainer>
      <Link to={`/${1234}`}>
        <ProductImg src='images/cozy_new1.jpg' alt='제목없음' />
      </Link>
      <ProductInfo>
        <div>제품 이름</div>
        <div>제품 가격</div>
        <AddCartBtn>add cart</AddCartBtn>
      </ProductInfo>
    </NewArrivalsContainer>
  );
}

export default BestSellers;
