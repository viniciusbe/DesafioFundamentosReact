import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #eee;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #eee;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 604px) {
    justify-content: center;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;
    margin-right: 16px;

    @media (max-width: 604px) {
      margin-bottom: 16px;
    }

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #00adb5;
    color: #eee;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#00adb5')};
    }
  }
`;
