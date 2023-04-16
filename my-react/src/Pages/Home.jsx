import styled from 'styled-components';

function Home() {
  const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
  `;

  const CarouselImg = styled.img`
    height: 500px;
    width: 100vw;
    object-fit: cover;
    object-position: top;
  `;
  return (
    <HomeContainer>
      <CarouselImg src='images/cozy_main.jpg' alt='제목없음' />
    </HomeContainer>
  );
}

export default Home;
