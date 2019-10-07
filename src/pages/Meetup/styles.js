import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto;

  header {
    width: 100%;
    display: flex;

    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    nav {
      display: flex;

      button {
        width: 132px;
        height: 42px;
        font-weight: bold;
        color: #fff;
        border: 0;

        border-radius: 4px;
        display: flex;
        align-items: center;

        transition: background 0.3s;

        &.edit {
          margin-right: 5px;
          background: #4dbaf9;
        }

        &.cancel {
          background: #d44059;
        }

        svg {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const Details = styled.div`
  margin-top: 38px;
  img {
    width: 900px;
    height: 300px;
    display: block;
  }

  p {
    margin-top: 38px;
    font-size: 18px;
    color: #fff;
  }

  footer {
    display: flex;
    align-items: center;

    margin-top: 30px;
    font-size: 16px;
    color: #fff;
    opacity: 0.6;

    svg {
      margin-left: 40px;
      margin-right: 10px;

      &:first-child {
        margin-left: 0px;
      }
    }
  }
`;
