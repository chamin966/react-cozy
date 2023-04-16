import styled from 'styled-components';

function NewArrivals() {
  const NewArrivalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ProductImg = styled.img`
    height: 325px;
    width: 325px;
    object-fit: cover;
    object-position: top;
    margin-bottom: 30px;
    &:hover {
      border-radius: 50%;
      cursor: pointer;
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    }
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  `;

  const AddCartSpan = styled.span`
    height: auto;
    width: fit-content;
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
      <ProductImg src='images/cozy_new1.jpg' alt='제목없음' />
      <ProductInfo>
        <div>제품 이름</div>
        <div>제품 가격</div>
        <AddCartSpan>add cart</AddCartSpan>
      </ProductInfo>
    </NewArrivalsContainer>
  );
}

export default NewArrivals;
