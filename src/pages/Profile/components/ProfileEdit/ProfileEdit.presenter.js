import * as S from './ProfileEdit.styles';

export default function ProfileEditUI({ handleLogout }) {
  return (
    <S.Wrapper>
      <S.Title>설정 탭</S.Title>
      <S.List>내 포인트</S.List>
      <S.List>
        팔로우 리스트
        <S.FollowerList />
      </S.List>
      <S.List>로그인 정보 수정</S.List>
      <S.List onClick={handleLogout}>로그아웃</S.List>
    </S.Wrapper>
  );
}
