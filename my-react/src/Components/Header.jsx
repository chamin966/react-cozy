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
    padding: 10px 20vh 45px 0px;

    @media (max-width: 768px) {
      padding: 10px 10vh 45px 0px;
    }
  `;

  const CozyLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 17px;

    &:hover {
      opacity: 0.6;
    }
  `;

  return (
    <HeaderContainer>
      <LoginAndCartDiv>
        <Link to={'/signin'}>Singin</Link>
        <Link to={'/cart'}>Cart</Link>
      </LoginAndCartDiv>
      <CozyLogoDiv>
        <Link to={'/'}>
          <img src='/images/cozy_logo.png' alt='제목없음' />
        </Link>
      </CozyLogoDiv>
    </HeaderContainer>
  );
}

export default Header;
