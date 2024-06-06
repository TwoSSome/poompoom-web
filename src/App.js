import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import * as S from './App.styles';
import CommunityList from './components/Community/CommunityList/CommunityList';
import CommunityWrite from './components/Community/CommunityWrite/CommunityWrite';
import Footer from './components/Footer/Footer.container';
import Header from './components/Header/Header.container';
import CommunityDetailPage from './pages/Community/Detail/CommunityDetailPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import LoverProfilePage from './pages/LoverProfile/LoverProfilePage';
import SetLoverProfilePage from './pages/LoverProfile/SetLoverProfilePage';
import ProfilePage from './pages/Profile/ProfilePage';
import QueryResultPage from './pages/QueryResult/QueryResultPage';
import ReviewPage from './pages/Review/ReviewPage';
import ReviewWritePage from './pages/ReviewWrite/ReviewWritePage';
import SignUpPage from './pages/SignUp/SignUpPage';
import SignUpTagPage from './pages/SignUp/SignUpTagPage';
import { basicTheme } from './shared/Theme';
import LoginSuccessPage from './pages/Login/LoginSuccessPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import Review from './components/PostDetail/PostDetail.container';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/review/:reviewId" element={<Review />} />
      <Route path="/review/write" element={<ReviewWritePage />} />
      <Route path="/review/query-result" element={<QueryResultPage />} />
      <Route path="/lovers-profile" element={<LoverProfilePage />} />
      <Route path="/lovers-profile-set" element={<SetLoverProfilePage />} />
      <Route path="/profile/like" element={<ProfilePage />} />
      <Route path="/profile/bookmark" element={<ProfilePage />} />
      <Route path="/profile/recent" element={<ProfilePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<ProfileEditPage />} />
      <Route path="/community" element={<CommunityList />} />
      <Route path="/community/detail" element={<CommunityDetailPage />} />
      <Route path="/community/write" element={<CommunityWrite />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/tag" element={<SignUpTagPage />} />
      <Route path="/success" element={<LoginSuccessPage />} />
    </Routes>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <S.AppLayout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/login2" element={<SignUpPage />} /> */}
            <Route element={<MainLayout />}>
              <Route path="/*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </S.AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// <CommunityDetailPage /> 커뮤니티 글 확인 페이지
// <CommunityWrite /> 커뮤니티 글 작성 페이지
// <CommunityList /> 커뮤니티 리스트 (메인)페이지
// <ReviewPage /> 선물 리뷰글 페이지
// <ReviewWritePage> 리뷰글 작성, 수정 페이지
// <ProfilePage /> 프로필 페이지
// <UserSetting /> 사용자 설정 페이지
