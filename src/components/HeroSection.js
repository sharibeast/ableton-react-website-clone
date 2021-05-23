import React from "react";
import styled from "styled-components";
import BG from "../assets/bg.jpg";
import BG1 from "../assets/bg1.jpg";
import BG2 from "../assets/bg2.jpg";

export default function HeroSection(props) {
  const HeroWrapper = styled.section`
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 800px;
  `;

  const Container = styled.div`
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: contain;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    position: absolute;
    padding: 40px;
    z-index: ${(props) => props.zindex};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
  `;
  const MainText = styled.h2`
    color: ${(props) => props.color};
    font-size: ${(props) => props.font};
    font-weight: 600;
  `;
  const SubText = styled.p`
    font-size: ${(props) => props.font};
    text-decoration: underline;
    color: ${(props) => props.color};
  `;
  return (
    <HeroWrapper>
      <Container background={BG} width="50%" height="500px">
        <MainText color="#0ef5ac" font="52px">
          Krust: Dialing back the <br />
          critical mind
        </MainText>
        <SubText font="28px" color="#0ef5ac">
          Learn more{" "}
        </SubText>
      </Container>
      <Container
        background={BG1}
        bottom="-675px"
        left="40%"
        zindex="100"
        width="400px"
        color="#fdc733"
        weight="800"
      >
        <MainText>
          Live 11 and Max for live: Get a Glimpse of what's possible with some
          free devices
        </MainText>
        <SubText>Checkout the effects </SubText>
      </Container>
      <Container
        background={BG2}
        right="-550px"
        top="200px"
        height="200px"
        width="55rem"
        color="#ffffff"
      >
        <MainText>
          Loop create: Take part in a <br /> New Event for music Makers
        </MainText>
        <SubText>Find out more</SubText>
      </Container>
    </HeroWrapper>
  );
}
