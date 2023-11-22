import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  position: relative;
  z-index: 1;
  height: 1000px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
background-color: rgb(10, 10, 10)
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  top: 10vh;

  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 90px;
  text-align: center;
  @media screen and (max-width: 1124px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroHeader = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  margin-top: 40px
  text-align: center;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroSpan = styled.span`
fontSize: "32px",
alignItems: "center",
color: "lightblue",
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderAud = styled.div`
color: "white",
fontSize: "32px",
marginTop: "1rem",
textAlign: "center",
@media screen and (max-width: 1024px) {
  font-size: 16px;
}
@media screen and (max-width: 768px) {
  font-size: 12px;
}

@media screen and (max-width: 480px) {
  font-size: 18px;
}
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
