import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart, faBookmark as regularBookMark } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart, faBookmark as solidBookMark } from '@fortawesome/free-solid-svg-icons'; // ♥︎

export default function ReviewDetailUI({
  body,
  price,
  createTime,
  lastModifiedTime,
  memberId,
  isMyPost,
  hashTags,
  reviewType,
  startPoint,
  whereBuy,
  prevSlide,
  nextSlide,
  nickname,
  like,
  bookMark,
  setLike,
  setBookMark,
  currentIndex,
  boardImages,
}) {
  return (
    <Container>
      <ContentBox>
        <Box>
          <LeftBox>
            <div>
              <SliderBtn onClick={prevSlide}>이전</SliderBtn> {/** 추후에 컴포넌트 사용 */}
            </div>
            <ContentImageWrapper>
              <Image src={boardImages[currentIndex]} alt={`이미지 ${currentIndex + 1}`} />;
            </ContentImageWrapper>
            <div>
              <SliderBtn onClick={nextSlide}>다음</SliderBtn> {/** 추후에 컴포넌트 사용 */}
            </div>
          </LeftBox>
          <Types>
            {' '}
            <Type>Price:{price}</Type>
            <Type>구매처:{whereBuy}</Type>
          </Types>
        </Box>
        <RightBox>
          <BoardHeader>
            <ID>@{memberId}</ID>
            <ID>{nickname}</ID>
            <ID>{reviewType === 'given' ? 'lover에게 주는 선물' : 'lover에게 받은 선물'}</ID>
            <FollowButton>팔로우</FollowButton>
          </BoardHeader>
          <BoardBody>
            <Title>누가 누구에게 주는 선물</Title>
            <Body>{body}</Body>
            <TagsContainer>
              #
              {hashTags.map((tag, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>
            <DateWrapper>
              <Dates>
                작성:
                {new Date(
                  createTime[0],
                  createTime[1] - 1,
                  createTime[2],
                  createTime[3],
                  createTime[4],
                  createTime[5],
                  createTime[6],
                ).toLocaleString()}
              </Dates>

              <Dates>
                수정:
                {new Date(
                  lastModifiedTime[0],
                  lastModifiedTime[1] - 1,
                  lastModifiedTime[2],
                  lastModifiedTime[3],
                  lastModifiedTime[4],
                  lastModifiedTime[5],
                  lastModifiedTime[6],
                ).toLocaleString()}
              </Dates>
            </DateWrapper>
            <Type>Member ID: {memberId}</Type>
            <Type>내 포스트:{isMyPost ? 'Yes' : 'No'}</Type>
            <Type>좋아요:{like ? 'Yes' : 'No'} </Type>
            <Type>북마크:{bookMark ? 'Yes' : 'No'}</Type>
            <Type>마음점수:{startPoint}</Type>

            <div>
              {/* {photos.length > 0 ? (
                photos.map((photo) => (
                  <div key={photo.id}>
                    <img src={photo.photoPath} alt={`Photo ${photo.id}`} />
                  </div>
                ))
              ) : (
               No photos available</p>
              )} */}
            </div>
          </BoardBody>

          <BoardNav>
            <FontAwesomeIcon
              icon={like ? solidHeart : regularHeart}
              onClick={() => setLike((prevLike) => !prevLike)}
              style={{ margin: '1rem' }}
            />
            <FontAwesomeIcon
              icon={bookMark ? solidBookMark : regularBookMark}
              onClick={() => setBookMark((prevBM) => !prevBM)}
              style={{ margin: '1rem' }}
            />
          </BoardNav>

          <div>{/* 댓글 작성 */}</div>
        </RightBox>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top: 2%;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
  height: 50rem;
`;
const LeftBox = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightBox = styled.div``;

const Title = styled.h2`
  padding: 1rem;
  border: 1px solid black;
`;

const ContentImageWrapper = styled.div`
  width: 390px;
  height: 510px;
  margin: 0 15px;
`;

const BoardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 0 2rem;
`;

const BoardBody = styled.div`
  width: 100%;
  height: 40vh;
  padding: 1rem;
  border: 1px solid gainsboro;
  overflow-y: auto;
  word-wrap: break-word;
`;

const Body = styled.div`
  width: 654px;
  height: 337px;
  border: none;
  padding: 2rem;
  line-height: 170%;
  font-size: 24px;
  overflow: auto;
`;

const BoardNav = styled.nav`
  display: flex;
`;

const SliderBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;

const Type = styled.div`
  margin: 1rem;
`;

const ID = styled.div`
  font-size: 1.3rem;
`;
const Types = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
const Tag = styled.span`
  border: 1px solid #b1b1b1;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #747474;
    color: #fff;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateX(-140px);
  margin-top: 1rem;
`;
const Dates = styled.div`
  color: #b0b0b1;
  margin: 0.5rem 0;
`;

const FollowButton = styled.button`
  font-size: 20px;
  border-radius: 20px;
  color: #02574e;
  padding: 10px;

  &:hover {
    background-color: #02574e;
    color: white;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

const Image = styled.div`
  object-fit: cover;
`;