import styled from 'styled-components';
import ProductInCart from '../Components/ProductInCart';

function Cart() {
  const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 45vh;
    padding: 150px 20px;
    font-size: 0.8rem;
  `;

  const CartContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 1000px;
    h1 {
      font-family: 'Bodoni Moda', serif;
      color: #e4742a;
    }
  `;

  const ProductTextTable = styled.table`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    border-collapse: collapse;

    th,
    tr {
      border-bottom: 1px solid black;
      padding: 10px;
    }
  `;

  const ProductTextLower = styled.div`
    display: grid;
    grid-template-columns: 5fr 5fr;
    width: 100%;
    align-items: center;
    text-align: start;
    gap: 20px;
    border: none;
    padding-top: 10px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      margin-bottom: 0px;
    }
  `;

  const ChooseBox = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
  `;

  const PriceAndEaBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    border-bottom: 1px solid black;
    @media (max-width: 768px) {
      gap: 15px;
      padding: 20px 0px;
      border-bottom: none;
    }
  `;

  const OderButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `;

  const CozyOrderBtn = styled.button`
    height: 40px;
    background-color: #e57428;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0px 15px;
    box-sizing: content-box;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const CozyCancleBtn = styled(CozyOrderBtn)`
    background-color: #194b44;
    @media (max-width: 768px) {
      width: auto;
    }
  `;

  return (
    <CartContainer>
      <CartContentBox>
        <h1>Cart</h1>
        <ProductTextTable>
          <tr>
            <th>
              <input type='checkbox' />
            </th>
            <th>전체선택 0/3</th>
            <th>상품정보</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
        </ProductTextTable>
        <ProductTextLower>
          <ChooseBox>
            <div>전체선택 0/3</div>
            <CozyCancleBtn>선택 취소</CozyCancleBtn>
          </ChooseBox>
          <PriceAndEaBox>
            <div>Total Price</div>
            <div>Total (0 item)</div>
            <div>0 won</div>
          </PriceAndEaBox>
        </ProductTextLower>
        <OderButtonBox>
          <CozyOrderBtn>ORDER</CozyOrderBtn>
        </OderButtonBox>
      </CartContentBox>
    </CartContainer>
  );
}

export default Cart;
