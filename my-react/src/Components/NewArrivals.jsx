import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewArrivalsContainer = styled.div`
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

function NewArrivals({ id, imageUrl, price, title }) {
  return (
    <NewArrivalsContainer>
      <Link to={`/${id}`}>
        <ProductImg src={imageUrl} alt='제목없음' />
      </Link>
      <ProductInfo>
        <div>{title}</div>
        <div>{price.toLocaleString()}원</div>
        <AddCartBtn>add cart</AddCartBtn>
      </ProductInfo>
    </NewArrivalsContainer>
  );
}

export default NewArrivals;
