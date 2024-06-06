import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ReviewWritePage() {
  const [review, setReview] = useState({
    body: '',
    price: 0,
    whereBuy: '',
    starPoint: 0,
    category: '',
    reviewType: '',
  });

  // const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  // const [reviewId, setReviewId] = useState();
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const bodyJson = JSON.stringify({
      body: review.body,
      price: review.price,
      whereBuy: review.whereBuy,
      starPoint: review.starPoint,
      category: review.category,
      reviewType: review.reviewType,
    });
    formData.append('body', new Blob([bodyJson], { type: 'application/json' }));
    photos.forEach((photo) => {
      formData.append('photos', photo);
    });
    const AccessToken = localStorage.getItem('AccessToken');

    try {
      const response = await axios.post('/review/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          access: `${AccessToken}`,
        },
      });

      if (response.status === 200) {
        console.log('Review created successfully', response.data);
        // setReviewId(response.data.createdId);
        // navigate(`/review/${reviewId}`);
      } else {
        console.error('Failed to create review', response.data);
      }
    } catch (error) {
      if (error.response) {
        console.error('Error@@:', error.response.data);

        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      } else {
        console.error('Error!!:', error.message);
      }
    }
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  return (
    <Form onSubmit={handleSubmitReview}>
      <Section>
        <Label>리뷰 작성</Label>
        <TextArea name="body" value={review.body} onChange={handleReviewChange} />
      </Section>
      <Section>
        <Label>가격</Label>
        <Input type="number" name="price" value={review.price} onChange={handleReviewChange} />
      </Section>
      <Section>
        <Label>누가 누구한테 보내는지</Label>
        <Input type="text" name="whereBuy" value={review.whereBuy} onChange={handleReviewChange} />
      </Section>
      <Section>
        <Label>별점</Label>
        <Input type="number" name="starPoint" value={review.starPoint} onChange={handleReviewChange} />
      </Section>

      <Section>
        <Label>리뷰 타입</Label>
        <select name="reviewType" value={review.reviewType} onChange={handleReviewChange}>
          <option value="">Select Review Type</option>
          <option value="GIVEN">GIVEN</option>
          <option value="RECEIVED">RECEIVED</option>
        </select>
      </Section>

      <Section>
        <Label>카테고리</Label>
        <select name="category" value={review.category} onChange={handleReviewChange}>
          <option value="">Select Category</option>
          <option value="100일">100일</option>
          <option value="n주년">n주년</option>
          <option value="생일">생일</option>
          <option value="크리스마스">크리스마스</option>
          <option value="가벼운 선물">가벼운 선물</option>
          <option value="사과의 선물">사과의 선물</option>
          <option value="청혼">청혼</option>
        </select>
      </Section>

      <Section>
        <Label>사진 선택</Label>
        <Input type="file" multiple onChange={handlePhotoChange} />
      </Section>
      <Button type="submit">Submit Review</Button>
    </Form>
  );
}

const Form = styled.form`
  margin: 20rem auto;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 500px;
`;

const TextArea = styled.textarea`
  width: 500px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
