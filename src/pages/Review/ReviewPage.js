import { useState } from 'react';
import styled from 'styled-components';
import PostFilter from '../../components/PostFilter/PostFilter.container';
// import RankingProfileCard from './components/Ranking/RankingProfileCard/RankingProfileCard.container';
import { ScrollToTopButton } from '../../components/common/ScrollToTopButton';
import LatestGallery from './components/Section/LatestGallery/LatestGallery.container';
import SearchGallery from './components/Section/SearchGallery/SearchGallery.container';
import SubAccount from './components/Section/SubAccount/SubAccount.container';
import SubGallery from './components/Section/SubGallery/SubGallery.container';

export default function ReviewPage() {
  const [selectedSort, setSelectedSort] = useState('추천순'); // 기본으로 추천순이 선택되도록 설정

  return (
    <Wrapper>
      {/* <RankingProfileCard /> */}

      <PostFilterContainer>
        <PostFilter selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      </PostFilterContainer>

      <LatestSection>
        <Title>RECENT VIEW</Title>
        <LatestGallery />
      </LatestSection>
      <SubSection>
        <Title>HOW ABOUT THIS</Title>
        <SubBodyContent>
          <SubGallery />
          <SubAccount />
        </SubBodyContent>
      </SubSection>
      <SearchSection>
        <Title>ALL MOOD VIEW</Title>
        <SearchGallery selectedSort={selectedSort} />
      </SearchSection>

      <ScrollToTopButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1% 5%;
  min-width: 1028px;
  width: 80%;
`;
const PostFilterContainer = styled.div`
  position: sticky;
  top: 15vh;
  z-index: 6;
  border-radius: 0 0 12px 12px;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.35);
  box-shadow:
    0 6px 12px rgba(255, 255, 255, 0.63),
    0 0 8px rgba(255, 255, 255, 0.25) inset;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(244, 244, 244, 0.78);
  }
`;

const Title = styled.h3`
  text-align: start;
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.4;
  color: #0e5649;
  margin: 30px 0;
`;
const LatestSection = styled.section`
  width: 100%;
`;
const SubSection = styled.section`
  margin-top: 32px;
  width: 100%;
`;
const SubBodyContent = styled.div`
  display: flex;
  height: 420px;
`;
const SearchSection = styled.section`
  margin-top: 32px;
  width: 100%;
`;
