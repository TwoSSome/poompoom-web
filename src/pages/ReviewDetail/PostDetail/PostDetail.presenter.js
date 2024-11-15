import { faBookmark as emptyBookmark, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import FollowBtnComponent from '../../../atoms/FollowBtnComponent';
import OverflowMenuComponent from '../../../atoms/OverflowMenuComponent';
import PostCommentWrite from '../PostComment/PostCommentWrite/PostCommentWrite.container';
import * as S from './PostDetail.styles';

export default function ReviewDetailUI({
  currentImageIndex,
  setCurrentImageIndex,
  prevImage,
  nextImage,
  onUpdate,
  onDelete,
  photos,
  whereBuy,
  price,
  profileImage,
  nickname,
  reviewType,
  isMyPost,
  body,
  hashTags,
  createTime,
  lastModifiedTime,
  formatDate,
  like,
  likeAmount,
  bookMark,
  handleLike,
  handleBookmark,
}) {
  return (
    <S.DetailSection>
      <S.DetailContent>
        <S.LeftBox>
          <S.PhotoBox>
            <S.LeftBtn onClick={prevImage}>&#8249;</S.LeftBtn>
            <S.ImageBox>
              {photos.length !== 0 && (
                <S.Image
                  key={photos[currentImageIndex].id}
                  src={photos[currentImageIndex].photoPath}
                  alt={`사진${photos[currentImageIndex].id}`}
                />
              )}
            </S.ImageBox>
            <S.RightBtn onClick={nextImage}>&#8250;</S.RightBtn>
          </S.PhotoBox>
          <S.ImageDots>
            {photos.map((_, index) => (
              <S.Dot
                active={index === currentImageIndex}
                onClick={() => {
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </S.ImageDots>
          <S.InfoBox>
            <S.Info>구매처: {whereBuy || `경산 다이소 영남대점`}</S.Info>
            <S.Info>Price: {price}</S.Info>
          </S.InfoBox>
        </S.LeftBox>

        <S.RightBox>
          <S.RightBoxContent>
            <S.BoardHeader>
              <S.AuthorCircleBox>
                <S.AuthorImg src={profileImage} alt="프로필 사진" />
              </S.AuthorCircleBox>
              <S.ID>{`@${nickname}`}</S.ID>
              <S.Title2>Lover에게 {reviewType === 'GIVEN' ? '주는 선물' : '받은 선물'}</S.Title2>
              {isMyPost ? <OverflowMenuComponent onUpdate={onUpdate} onDelete={onDelete} /> : <FollowBtnComponent />}
            </S.BoardHeader>
            <S.BoardBody>{body}</S.BoardBody>
            <S.HashtagList>
              {hashTags && hashTags.map((tag) => <S.HashtagItem key={tag.id}>{`#${tag.name}`}</S.HashtagItem>)}
            </S.HashtagList>
            <S.DateWrapper>
              <S.Dates>{`${formatDate(lastModifiedTime)}(수정됨)`}</S.Dates>
              <S.Dates>{`${formatDate(createTime)}(작성됨)`}</S.Dates>
            </S.DateWrapper>
            <S.BoardNavBar>
              <S.BoardIcon icon={like ? faHeart : emptyHeart} onClick={handleLike} />
              <S.LikeAmount>{`${likeAmount}`}</S.LikeAmount>
              <S.BoardIcon icon={bookMark ? faBookmark : emptyBookmark} onClick={handleBookmark} />
            </S.BoardNavBar>

            <S.CommentWriteBox>
              <PostCommentWrite />
            </S.CommentWriteBox>
          </S.RightBoxContent>
        </S.RightBox>
      </S.DetailContent>
    </S.DetailSection>
  );
}
