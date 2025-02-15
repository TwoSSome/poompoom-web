import { useState } from 'react';
import styled from 'styled-components';
import { createSchedule } from '../../api';

export default function EventCreateModal({ onClose }) {
  const [eventData, setEventData] = useState({
    title: '',
    categoryId: null,
    startDate: '',
    endDate: '',
  });

  const categories = [
    { id: 1, color: '#4B0082', label: '남자친구' },
    { id: 2, color: '#cc2200', label: '여자친구' },
    { id: 3, color: '#FFD700', label: 'OO데이' },
    { id: 4, color: '#FF69B4', label: 'n주년' },
    { id: 5, color: '#4169E1', label: '일반데이트' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (categoryId) => {
    setEventData((prev) => ({ ...prev, categoryId }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (eventData.endDate < eventData.startDate) {
      alert('종료 날짜는 시작 날짜보다 늦어야 합니다.');
      return;
    }

    const planData = {
      CalendarTagId: eventData.categoryId,
      title: eventData.title,
      startDate: eventData.startDate,
      endDate: eventData.endDate,
    };

    const result = await createSchedule(planData);
    if (result) {
      onClose();
    }
  };

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>새로운 일정을 생성하세요</ModalHeader>
        <Form onSubmit={handleFormSubmit}>
          <Label>
            제목:
            <Input type="text" name="title" value={eventData.title} onChange={handleInputChange} required />
          </Label>
          <Label>
            카테고리:
            <CategorySelector>
              {categories.map(({ id, color, label }) => (
                <>
                  <CategoryButton
                    key={id}
                    color={color}
                    isSelected={eventData.categoryId === id}
                    onClick={() => handleCategoryChange(id)}
                    type="button"
                  />
                  <div>{label}</div>
                </>
              ))}
            </CategorySelector>
          </Label>
          <DateContainer>
            <Label>
              시작 날짜:
              <Input type="date" name="startDate" value={eventData.startDate} onChange={handleInputChange} required />
            </Label>
            <Label>
              종료 날짜:
              <Input type="date" name="endDate" value={eventData.endDate} onChange={handleInputChange} required />
            </Label>
          </DateContainer>
          <ButtonContainer>
            <SubmitButton type="submit">저장</SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </Modal>
  );
}

// Styled Components
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
`;

const ModalHeader = styled.h2`
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CategorySelector = styled.div`
  display: flex;
  gap: 8px;
`;

const CategoryButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: ${(props) => (props.isSelected ? '2px solid black' : '1px solid #ccc')};
  cursor: pointer;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  flex: 1;
  background: #007bff;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  background: #ccc;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #aaa;
  }
`;
