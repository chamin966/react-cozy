import styled from 'styled-components';

function ProductInCart() {
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
  return (
    <ProductInCartContainer>
      <td>
        <input type='checkbox' />
      </td>
      <td>
        <ProductImage src='/images/cozy_item1.jpg' alt='제목없음' />
      </td>
      <ProductInfoTd>
        <div id='product-info__name'>플레이트 접시 & 카트러리 세트</div>
        <div>28,000 ￦</div>
      </ProductInfoTd>
      <ProductCountTd>
        <label htmlFor='productCount'>수량</label>
        <input type='number' id='productCount' defaultValue={1} />
      </ProductCountTd>
      <td>28,000 ￦</td>
      <td>
        <RemoveBtn>
          <span class='material-symbols-outlined'>close</span>
        </RemoveBtn>
      </td>
    </ProductInCartContainer>
  );
}

export default ProductInCart;

// 천단위 콤마: console.log(number.toLocaleString('ko-KR')); // 3,500 한국기준
