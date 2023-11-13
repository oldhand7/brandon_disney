import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  paddin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #f6f6fd;
  display: flex;
  background: #00000066;
  border: 1px solid white;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  padding-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 5px 0px rgb(69 65 221 / 47%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  max-width: 1000px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
