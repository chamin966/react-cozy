import styled from 'styled-components';

function Footer() {
  const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    width: 100%;
    background-color: #f3f2ed;
    font-size: small;
    gap: 6px;
    padding-left: 40px;
    ul {
      display: flex;
      gap: 5px;
    }
    div {
      margin-top: 15px;
      display: flex;
      gap: 20px;
    }
  `;
  return (
    <FooterContainer>
      <ul>
        <li>상호: 코지</li>
        <li>|</li>
        <li>대표: 000</li>
        <li>|</li>
        <li>개인정보관리책임자: 000</li>
        <li>|</li>
        <li>전화: 미입력</li>
        <li>|</li>
        <li>이메일: cozy@email.com</li>
      </ul>
      <ul>
        <li>주소: 서울특별시 000구 000000길 5-10</li>
        <li>|</li>
        <li>사업자등록번호: 125-56-123456</li>
        <li>|</li>
        <li>통신판매: 제 2222-0000-3333 호</li>
      </ul>
      <div>
        <span>이용약관 </span>
        <span>개인정보처리방침</span>
        <span>사업자정보확인</span>
      </div>
    </FooterContainer>
  );
}

export default Footer;
