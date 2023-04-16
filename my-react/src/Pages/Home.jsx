import styled from 'styled-components';
import NewArrivals from '../Components/NewArrivals';
import BestSellers from '../Components/BestSellers';
import BrandStory from '../Components/BrandStory';

function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  `;

  const CarouselImg = styled.img`
    height: 500px;
    width: 100vw;
    object-fit: cover;
    object-position: top;
    margin-bottom: 100px;
  `;

  const NewArrivalsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: auto;
    width: 1000px;
    margin-bottom: 100px;
  `;

  const NewArrivalsFont = styled.div`
    font-family: 'Bodoni Moda', serif;
    font-size: 3rem;
    color: #e4742a;
    margin-bottom: 50px;
  `;

  const BestSellersContainer = styled(NewArrivalsContainer)`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `;

  const BestSellersFont = styled(NewArrivalsFont)`
    margin-bottom: 0px;
  `;

  const BrandStoryContainer = styled.div`
    width: 1200px;
    margin: 100px 0px;
  `;

  return (
    <HomeContainer>
      <CarouselImg src='images/cozy_main.jpg' alt='제목없음' />
      <NewArrivalsFont>New Arrivals</NewArrivalsFont>
      <NewArrivalsContainer>
        <NewArrivals />
        <NewArrivals />
        <NewArrivals />
      </NewArrivalsContainer>
      <BestSellersContainer>
        <BestSellersFont>Best Sellers</BestSellersFont>
        <BestSellers />
        <BestSellers />
        <BestSellers />
      </BestSellersContainer>
      <BrandStoryContainer>
        <BrandStory />
      </BrandStoryContainer>
      <BrandStoryContainer>
        <BrandStory />
      </BrandStoryContainer>
    </HomeContainer>
  );
}

export default Home;
