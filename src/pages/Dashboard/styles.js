import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  justify-content: space-between;

  h1 {
    color: #fff;
  }

  a {
    background: #f94d6a;
    border-radius: 4px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    color: #fff;
    transition: background 0.3s;
  }

  svg {
    margin-right: 5px;
  }
`;
