/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import EventCreateModal from './EventCreateModal';
import EventDetailModal from './EventDetailModal';
import PostCreateModal from './PostCreateModal';
import LogCreateModal from './LogCreateModal';

export default function CalendarView({
  isPostModalOpen,
  setIsPostModalOpen,
  isLogModalOpen,
  setIsLogModalOpen,
  handlePostSubmit,
}) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('/calendar', {
          params: { year: selectedYear, month: selectedMonth },
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setEvents(response.data.data);
      } catch (err) {
        console.error('캘린더 데이터를 불러오는 중 오류 발생:', err);
      }
    };

    fetchCalendarData();
  }, [selectedYear, selectedMonth]);

  const handleEventClick = async (event) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(`/calendar/event/${event.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setSelectedEvent(response.data);
    } catch (err) {
      console.error('이벤트 상세 정보를 불러오는 중 오류 발생:', err);
    }
  };

  const startOfMonth = new Date(selectedYear, selectedMonth - 1, 1);
  const endOfMonth = new Date(selectedYear, selectedMonth, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const calendarDates = [];
  for (let i = 0; i < startDay; i++) calendarDates.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarDates.push(day);

  return (
    <CalendarWrapper>
      <Header>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
          {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </Select>
        <Select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}월
            </option>
          ))}
        </Select>
      </Header>

      <DaysRow>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </DaysRow>
      <DateGrid>
        {calendarDates.map((day, index) => {
          const dateKey = day ? new Date(selectedYear, selectedMonth - 1, day) : null;
          const dayEvents = events.filter(
            (event) => dateKey && new Date(event.startDate) <= dateKey && new Date(event.endDate) >= dateKey,
          );

          return (
            <DayCell key={index}>
              <DateNumber>{day}</DateNumber>
              {dayEvents.map((event, idx) => (
                <EventTag
                  key={idx}
                  style={{ background: `#${event.calendarTagInfo.color.toString(16).padStart(6, '0')}` }}
                  onClick={() => handleEventClick(event)}
                >
                  {event.title}
                </EventTag>
              ))}
            </DayCell>
          );
        })}
      </DateGrid>

      <AddEventButton onClick={() => setIsModalOpen(true)}>Add Event</AddEventButton>

      {isModalOpen && <EventCreateModal onClose={() => setIsModalOpen(false)} />}
      {selectedEvent && <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      {isPostModalOpen && <PostCreateModal onClose={() => setIsPostModalOpen(false)} onSubmit={handlePostSubmit} />}
      {isLogModalOpen && <LogCreateModal onClose={() => setIsLogModalOpen(false)} onSubmit={handlePostSubmit} />}
    </CalendarWrapper>
  );
}

// Styled Components
const CalendarWrapper = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const Select = styled.select`
  padding: 4px;
  font-size: 16px;
`;

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 14px;
  color: gray;
  border-bottom: 2px solid #ccc;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const DayCell = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;
  aspect-ratio: 1;
  border: 1px solid #ddd;
`;

const DateNumber = styled.div`
  font-weight: ${(props) => (props.isToday ? 'bold' : 'normal')};
  color: ${(props) => (props.isToday ? 'red' : 'black')};
`;

const EventTag = styled.div`
  margin-top: 4px;
  padding: 4px;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

const AddEventButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
