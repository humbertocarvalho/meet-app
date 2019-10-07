import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  header {
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
  }
`;

export const Meetups = styled.div`
  margin-top: 48px;
`;

export const Meetup = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #fff;

  margin-top: 10px;

  span {
    margin-left: 30px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }

  transition: transform 0.2s opacity 0.2s;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

export const Detalhar = styled.div`
  color: #777;
  display: flex;
  align-items: center;

  p {
    color: #fff;
    opacity: 0.8;
    margin-right: 10px;
  }
  svg {
    margin-right: 10px;
  }
`;
