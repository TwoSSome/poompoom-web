import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/PoomPoom.svg';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 15vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
`;
export const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  min-width: 1028px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #a3a3a3;
`;
export const IconBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoBox = styled.div`
  width: 15%;
  height: 100%;
  padding: 0.5% 0%;
`;
export const LogoSvg = styled(Logo)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const ProfileBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
`;
export const ProfileParagraph = styled.p`
  width: 70%;
  margin-top: 5%;
  font-weight: bold;
`;

export const MenuBar = styled.ul`
  width: 55%;
  min-width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-top: 10px;
`;
export const MenuItem = styled.li`
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  position: relative; /* ::after 위치를 설정하기 위해 relative 위치 지정 */
  color: #072623;
  &:hover {
    color: #c52c27;
    cursor: pointer;
  }
  margin: 1px 0;
  &:hover::after {
    content: '';
    position: absolute;
    right: 0px; /* li의 오른쪽에서 15px 떨어진 위치에 점을 추가 */
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: #c52c27; /* 점의 색상을 설정 */
    border-radius: 50%;
  }
`;
