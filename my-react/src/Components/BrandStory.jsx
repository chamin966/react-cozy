import styled from 'styled-components';

function BrandStory() {
  const BrandStoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 40px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
      display: block;
    }
  `;

  const BrandStoryImg = styled.img`
    height: auto;
    width: 100%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
  `;

  const BrandStoryTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    @media (max-width: 768px) {
      padding-left: 0px;
      padding-top: 20px;
    }
  `;

  const BrandStoryStyedSpan = styled.span`
    font-family: 'Bodoni Moda', serif;
    font-weight: 600;
    font-size: 2.8rem;
    color: #194b44;
  `;

  const BrandStoryStyedP = styled.p`
    color: #a7a19a;
    line-height: 23px;
  `;

  return (
    <BrandStoryContainer>
      <BrandStoryImg src='/images/cozy_introduction1.jpg' art='제목없음' />
      <BrandStoryTextBox>
        <BrandStoryStyedSpan>with COZY</BrandStoryStyedSpan>
        <BrandStoryStyedP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus placeat laboriosam, amet repellat quam unde
          repellendus consequatur totam accusamus deserunt exercitationem nemo impedit porro, nesciunt, ratione quos veritatis
          alias. Illo.
        </BrandStoryStyedP>
      </BrandStoryTextBox>
    </BrandStoryContainer>
  );
}

export default BrandStory;
