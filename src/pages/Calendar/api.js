import axios from 'axios';

// 일정 생성
export const createSchedule = async (eventData) => {
  try {
    const response = await axios.post('/calendar/schedule/create', null, {
      params: eventData,
    });
    console.log('createSchedule:', response.data);
    return response.data;
  } catch (error) {
    console.error('일정 생성 중 오류 발생:', error);
    return null;
  }
};

// 로그 생성
export const createLog = async (logData) => {
  try {
    const req = new Blob([JSON.stringify(logData.req)], { type: 'application/json' });

    const formData = new FormData();

    formData.append('req', req);

    logData.photos.forEach((index) => {
      formData.append('photos', logData.photos[index]);
    });

    const response = await axios.post('/calendar/post/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('createlog:', response.data);
    return response.data;
  } catch (error) {
    console.error('게시물 생성 중 오류 발생:', error);
    return null;
  }
};

// 플랜 생성
export const createPlan = async (planData) => {
  try {
    const response = await axios.post('/calendar/plan/create', planData);
    return console.log('createPlan:', response.data);
  } catch (error) {
    console.error('플랜 생성 중 오류 발생:', error);
    return null;
  }
};

// 커스텀 태그 생성
export const createCustomTag = async (tagName) => {
  try {
    const response = await axios.post('/calendar/tag/create', tagName);
    return console.log('createCustomTag:', response.data);
  } catch (error) {
    console.error('커스텀 태그 생성 중 오류 발생:', error);
    return null;
  }
};

// 캘린더 조회(작동X)
export const getCalendarInfo = async (year = 2025, month = 1) => {
  try {
    const response = await axios.get('/calendar', {
      params: { year, month },
    });
    return console.log('getCalendarInfo:', response.data);
  } catch (error) {
    console.error('캘린더 데이터를 불러오는 중 오류 발생:', error);
    return null;
  }
};

// 태그 조회(작동X)
export const getCalendarTag = async () => {
  try {
    const response = await axios.get('/calender/tag');
    return console.log('getCalendarTag', response.data);
  } catch (error) {
    console.error('태그를 불러오는 중 오류 발생:', error);
    return null;
  }
};

// 일정 조회
export const getSchedule = async () => {
  try {
    const id = 13;
    const response = await axios.get(`/calendar/schedule/${id}`);
    return console.log('getSchedule:', response.data);
  } catch (error) {
    console.error('일정을 불러오는 중 오류 발생:', error);
    return null;
  }
};

// 로그 조회
export const getLog = async () => {
  try {
    const id = 12;
    const response = await axios.get(`/calendar/post/${id}`);
    return console.log('getLog:', response.data);
  } catch (error) {
    console.error('로그를 불러오는 중 오류 발생:', error);
    return null;
  }
};
// 플랜 조회
export const getPlan = async () => {
  try {
    const id = 12;
    const response = await axios.get(`/calendar/plan/${id}`);
    return console.log('getPlan:', response.data);
  } catch (error) {
    console.error('플랜을 불러오는 중 오류 발생:', error);
    return null;
  }
};

// 품품 로그 조회(작동X)
export const getPoompoomLog = async (cursorId = 1, size = 1) => {
  try {
    const response = await axios.get('/calendar/poompoom', { params: { cursorId, size } });
    return console.log('getPoompoomLog:', response.data);
  } catch (error) {
    console.error('품품 로그를 불러오는 중 오류 발생:', error);
    return null;
  }
};
