import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Eyes } from '../../../assets/eyes.svg';

export function NotFound({ searchContent, currentKeyword }) {
  return (
    <Wrapper>
      <EyesIcon />
      <NoResults>
        <ColorSpan style={{ color: '#9D1B23' }}>{`"${searchContent}"`}</ColorSpan>
        에 대한 검색 결과를 찾지 못했습니다.
        <br />
        {`추천 검색어 `}
        <ColorSpan style={{ color: '#0D3F39' }}>{`"${currentKeyword}"`}</ColorSpan>에 대한 검색 결과입니다.
      </NoResults>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
  width: 800px;
  border: 3px solid #dcdcdc;
  border-radius: 30px;
`;
const EyesIcon = styled(Eyes)`
  width: 50px;
  height: 100%;
`;
const NoResults = styled.p`
  font-size: 24px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  color: #8c8c8c;
`;
const ColorSpan = styled.span`
  font-size: 24px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  color: #8c8c8c;
`;