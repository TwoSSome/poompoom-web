import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Cursor from '../../../../../assets/HorizontalCursor.svg';
import ReviewPostCard from '../../../../../components/ReviewPostCard/ReviewPostCard.container';

export default function LatestGalleryUI({ latestPosts, loader }) {
  const postListRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (postListRef.current) {
        // Prevent the default vertical scroll
        event.preventDefault();
        // Scroll horizontally
        postListRef.current.scrollLeft += event.deltaY;
      }
    };

    const postListElement = postListRef.current;
    if (postListElement) {
      postListElement.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (postListElement) {
        postListElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <Container>
      <Wrapper ref={postListRef}>
        {latestPosts &&
          latestPosts.map((post, index) => <ReviewPostCard key={`${post.reviewId}-${index}`} post={post} />)}
        <ScrollTrigger ref={loader} />
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  padding-left: 32px;
  height: 420px;
  display: flex;
  align-items: center;
  gap: 50px;
  overflow-x: auto; /* 스크롤이 필요할 때만 표시 */
  scrollbar-gutter: stable; /* 스크롤바가 없어질 때 UI가 튀지 않게 */
  cursor: url(${Cursor}), auto; /* SVG 커서 설정 */
  /* 기본적으로 스크롤바 숨김 */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb,
  &.hover-scroll::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Container = styled.div`
  padding: 0 32px;
  background-color: rgba(212, 175, 175, 0.74);
  box-shadow:
    0 6px 8px rgba(178, 153, 153, 0.74),
    0 0 8px rgba(255, 255, 255, 0.92) inset;
  border-radius: 12px;
`;
const ScrollTrigger = styled.div`
  width: 50px; /* 너비를 최소로 설정하여 공간 차지 최소화 */
  height: 100%; /* 높이를 부모 요소와 동일하게 설정 */
  flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */
`;
