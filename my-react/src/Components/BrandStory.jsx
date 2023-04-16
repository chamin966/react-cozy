import styled from 'styled-components';

function BrandStory() {
  const BrandStoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;

  const BrandStoryImg = styled.img`
    height: 470px;
    width: 480px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
  `;

  const BrandStoryTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    border-left: 1px solid gainsboro;
  `;

  const BrandStoryStyedSpan = styled.span`
    font-family: 'Bodoni Moda', serif;
    font-weight: 600;
    font-size: 2.8rem;
    color: #194b44;
  `;

  const BrandStoryStyedPre = styled.pre`
    color: #a7a19a;
    line-height: 23px;
  `;

  return (
    <BrandStoryContainer>
      <BrandStoryImg src='/images/cozy_introduction1.jpg' art='제목없음' />
      <BrandStoryTextBox>
        <BrandStoryStyedSpan>with COZY</BrandStoryStyedSpan>
        <BrandStoryStyedPre>
          {`따뜻한 커피 한 잔으로 시작하는 아침의 홈카페,
간단하게 즐기는 여유로운 브런치와 하루의 피로를 씻어주는 저녁 식사,
소중한 사람들과 함께하는 주말의 홈파티`}
        </BrandStoryStyedPre>
      </BrandStoryTextBox>
    </BrandStoryContainer>
  );
}

export default BrandStory;
