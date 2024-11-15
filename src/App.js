import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as S from './App.styles';
import GlobalStyle from './GlobalStyle';
import ProtectedRoute from './ProtectedRoute';
import Footer from './components/Footer/Footer.container';
import Header from './components/Header/Header.container';

import SignupPage from './pages/Join/Signup/SignupPage';
import SignupTagPage from './pages/Join/SignupTag/SignupTag.container';
import LoginPage from './pages/Login/LoginPage';
import LoginSocial from './pages/OAuth/LoginSocial';
import SocialSignUp from './pages/OAuth/SignUp/SignUp.container';
import SignUpSocial from './pages/OAuth/SignUpSocial';

import {
  HomePage,
  ProfileEditPage,
  ProfilePage,
  QueryPage,
  ReviewDetailPage,
  ReviewPage,
  ReviewWritePage,
  Welcome,
} from './pages/index';

import { basicTheme } from './shared/Theme';

const queryClient = new QueryClient();

const isAuthenticated = async () => {
  // AT 만료여부 확인해서 새로운 AT인지 확인해야 함.
  return localStorage.getItem('accessToken') !== null;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<ProtectedRoute element={ReviewPage} isAuthenticated={isAuthenticated} />} />
      <Route
        path="/review/:reviewId"
        element={<ProtectedRoute element={ReviewDetailPage} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/review/write"
        element={<ProtectedRoute element={ReviewWritePage} isAuthenticated={isAuthenticated} mode="create" />}
      />
      <Route
        path="/review/update/:reviewId"
        element={<ProtectedRoute element={ReviewWritePage} isAuthenticated={isAuthenticated} mode="edit" />}
      />
      <Route
        path="/review/query-result"
        element={<ProtectedRoute element={QueryPage} isAuthenticated={isAuthenticated} />}
      />
      {/* <Route
        path="/lovers-profile"
        element={<ProtectedRoute element={LoversProfilePage} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/lovers-profile-set"
        element={<ProtectedRoute element={LoversProfileSetPage} isAuthenticated={isAuthenticated} />}
      /> */}
      <Route path="/profile/*" element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated} />} />
      <Route
        path="/profile/edit"
        element={<ProtectedRoute element={ProfileEditPage} isAuthenticated={isAuthenticated} />}
      />
      {/* <Route path="/community" element={<ProtectedRoute element={CommunityList} isAuthenticated={isAuthenticated} />} />
      <Route
        path="/community/detail"
        element={<ProtectedRoute element={CommunityDetailPage} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/community/write"
        element={<ProtectedRoute element={CommunityWrite} isAuthenticated={isAuthenticated} />}
      /> */}
    </Routes>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
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
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup/tag" element={<SignupTagPage />} />
            <Route path="/signup/social" element={<SignUpSocial />} />
            <Route path="/Login/Social" element={<LoginSocial />} />
            <Route path="/signUp/social/form" element={<SocialSignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/*" element={<MainLayout />}>
              <Route path="*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </S.AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
