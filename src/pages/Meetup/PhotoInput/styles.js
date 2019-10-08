import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 900px;
      height: 300px;
      border-radius: 4px;
      border: 0;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
