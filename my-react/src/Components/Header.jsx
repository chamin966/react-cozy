import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const HeaderContainer = styled.div`
    height: 30vh;
    width: 100vw;
    background-color: #faf9f7;
  `;

  const LoginAndCartDiv = styled.div`
    display: flex;
    gap: 10px;
    justify-content: end;
    padding: 10px 150px 45px 0px;
  `;

  const CozyLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 17px;
  `;

  return (
    <HeaderContainer>
      <LoginAndCartDiv>
        <Link>Singin</Link>
        <Link>Cart</Link>
      </LoginAndCartDiv>
      <CozyLogoDiv>
        <img src='/images/cozy_logo.png' alt='제목없음' />
      </CozyLogoDiv>
    </HeaderContainer>
  );
}

export default Header;
