import styled from 'styled-components';

export default function LatestHeaderUI() {
  return <Wrapper>RECENT VIEW</Wrapper>;
}

const Wrapper = styled.h3`
  width: 100%;
  margin-top: 2rem;
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #0e5649;
  text-align: start;
`;
