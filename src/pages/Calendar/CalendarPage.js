import { useState } from 'react';
import styled from 'styled-components';
import CalendarView from './components/CalendarView/CalendarView';
import Sidebar from './components/Sidebar/Sidebar';
import DatePlanModal from './components/Modal/DatePlanModal';

export default function CalendarPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null); // 선택된 이벤트
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [ClickedDate, setClickedDate] = useState(null);

  console.log('selectedEvent:', ClickedDate);
  const handleEventClick = (event, setDate) => {
    setSelectedEvent(event); // 선택된 이벤트 설정
    if (setDate) setClickedDate(setDate);
  };

  const handleCloseDetailModal = () => {
    setSelectedEvent(null); // 이벤트 선택 해제
    setClickedDate(null);
  };

  /*
  const logData = {
    req: {
      calendarScheduleId: 12,
      title: 'string',
      body: 'string',
    },
    photos: [],
  };

  const planData = {
    calendarScheduleId: 12,
    body: 'string',
    localDate: '2025-02-14',
  };
  */
  // Api.createLog(logData);
  // Api.createPlan(planData);
  // Api.createSchedule(eventData);
  // Api.getSchedule();
  // Api.getLog(); 12로 연결
  // Api.getPlan();

  // Api.getCalendarInfo();
  // Api.getCalendarTag();
  // Api.getPoompoomLog();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const posts = [];
  const logs = [];
  const events = [];

  return (
    <Container>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        posts={posts}
        logs={logs}
        events={events}
        selectedEvent={selectedEvent}
        handleCloseDetailModal={handleCloseDetailModal}
        setIsLogModalOpen={setIsLogModalOpen}
        handleEventClick={handleEventClick}
      />
      <CalendarView
        isPostModalOpen={isPostModalOpen}
        setIsPostModalOpen={setIsPostModalOpen}
        isLogModalOpen={isLogModalOpen}
        setIsLogModalOpen={setIsLogModalOpen}
      />
      <DatePlanModal />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
