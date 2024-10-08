import axios from 'axios';

// 전역 설정: 기본 API URL 및 기타 설정을 지정합니다.
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true; // 쿠키 포함을 위한 설정
axios.defaults.headers.common['Content-Type'] = 'application/json'; // 기본 Content-Type 설정

/**
 * Axios 요청 인터셉터를 설정합니다.
 * 모든 HTTP 요청이 서버로 전송되기 전에 실행되며, 주로 요청을 변경하거나 추가 작업을 수행합니다.
 *
 * @function
 * @param {Object} config - HTTP 요청에 대한 모든 설정을 담고 있는 객체입니다.
 * @returns {Object} 수정된 요청 설정을 반환합니다.
 * @throws {Promise} 요청 전에 발생한 에러를 반환합니다.
 */
axios.interceptors.request.use(
  /**
   * 요청이 서버로 전송되기 전에 실행되는 함수입니다.
   * 인증 토큰을 모든 요청의 헤더에 자동으로 추가합니다.
   *
   * @param {Object} config - Axios 요청 설정 객체입니다.
   * @returns {Object} 수정된 Axios 요청 설정 객체를 반환합니다.
   */
  (config) => {
    // 로컬스토리지에서 accessToken을 가져옵니다.
    const accessToken = localStorage.getItem('accessToken');

    // /reissue 요청이 아닐 때만 accessToken을 헤더에 추가
    if (accessToken && config.url !== '/reissue') {
      // config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.access = accessToken; // 헤더에 access 속성 추가
    }

    // 요청 헤더를 콘솔에 출력합니다. (디버깅 용도)
    console.log('Axios Request Headers: ', config.headers);

    // 수정된 요청 설정을 반환하여, 서버로 전송합니다.
    return config;
  },

  /**
   * 요청을 보내기 전에 발생한 에러를 처리하는 함수입니다.
   *
   * @param {Object} error - 요청 중 발생한 에러 객체입니다.
   * @returns {Promise} 에러를 그대로 반환하여 이후의 에러 처리 흐름이 이어지게 합니다.
   */
  (error) => Promise.reject(error),
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    console.log('Axios Response: ', response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await axios.post(
          `/reissue`,
          {},
          {
            headers: {
              // Authorization: `Bearer ${refreshToken}`,
              refresh: refreshToken, // refresh 속성만 헤더로 전송
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );

        if (response.status === 200) {
          const { access: newAccessToken, refresh: newRefreshToken } = response.data;

          // 기존의 accessToken과 refreshToken을 로컬스토리지에서 가져옴
          const currentAccessToken = localStorage.getItem('accessToken');
          const currentRefreshToken = localStorage.getItem('refreshToken');

          // 새롭게 받은 accessToken이 기존 accessToken과 다르면 업데이트
          if (newAccessToken && newAccessToken !== currentAccessToken) {
            localStorage.setItem('accessToken', newAccessToken);
            // axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            axios.defaults.headers.common.access = newAccessToken;
            originalRequest.headers.access = newAccessToken;
          }

          // 새롭게 받은 refreshToken이 존재하고 기존 refreshToken과 다르면 업데이트
          if (newRefreshToken && newRefreshToken !== currentRefreshToken) {
            localStorage.setItem('refreshToken', newRefreshToken);
          }

          console.log('Axios Response Headers: ', originalRequest.headers);

          // 토큰을 새롭게 받은 후에 원래의 요청(originalRequest)을 재시도
          return axios(originalRequest);
        }
      } catch (refreshError) {
        console.error('Token refresh failed', refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axios;
