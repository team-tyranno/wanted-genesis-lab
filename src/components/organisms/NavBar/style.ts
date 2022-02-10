import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  /* background-color: beige; */
  margin-right: 10px;
`;

export const Line = styled.hr`
  margin-top: 20px;
  width: 100%;
  border: 0;
  border-top: 1px solid #e6e6e6;
`;

export const UserBox = styled.div`
  margin: 5px 10px;
  display: flex;
  gap: 20px;
`;

export const Search = styled.div`
  background-color: #f8fafb;
  padding: 10px;
  color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
  svg {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  &::placeholder {
    color: #c4c4c4;
  }
  width: 90%;
  outline: none;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const UserInfo = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const UserDesc = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
`;

export const UserName = styled.div`
  color: #ff595d;
  font-weight: 800;
  font-size: 24px;
`;
