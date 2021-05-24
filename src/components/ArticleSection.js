import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BG3 from "../assets/bg3.jpg";
import BG14 from "../assets/bg14.jpg";
import BG13 from "../assets/bg13.jpg";


export default function ArticleSection() {
  const ArticleSectionWrapper = styled.div`
    margin: 100px;
  `;
  const ArticleContainer = styled.header`
    width: 100%;
    margin-bottom: 30px;
  `;
  const ArticleWrap = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ArticleTitle = styled.h2`
    margin: 0;
    padding: 0;
  `;
  const Nav = styled.div``;
  const NavLink = styled(Link)`
    margin: 0 20px;
    text-decoration: none;
    color: ${(props) => props.color || "black"};
    font-weight: 600;
  `;

  const GridWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const CardContainer = styled.div``;
  const AssetImage = styled.div`
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: contain;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-bottom: 10px;
  `;
  const CardTitle = styled.h6`
    color: ${(props) => props.color};
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  `;
  const CardSummary = styled.p`
    padding: 0;
    margin: 0;
  `;

  return (
    <ArticleSectionWrapper>
      <ArticleContainer>
        <ArticleWrap>
          <ArticleTitle>The latest from ableton</ArticleTitle>
          <Nav>
            <NavLink to="allPost" color="#0001fb">All post</NavLink>
            <NavLink to="artists" color="#0001fb">artists</NavLink>
            <NavLink to="downloads" color="#0001fb">downloads</NavLink>
            <NavLink to="Tutorials" color="#0001fb">Tutorials</NavLink>
            <NavLink to="videos" color="#0001fb">videos</NavLink>
            <NavLink to="loop" color="#0001fb">loop</NavLink>
          </Nav>
        </ArticleWrap>
      </ArticleContainer>

      <GridWrapper>
        <CardContainer>
          <AssetImage height="200px" background={BG3} />
          <CardTitle color="#fdc733">Artists</CardTitle>
          <CardSummary>
            Just Feeling It: Mapping Live's Musical Evolution{" "}
          </CardSummary>
        </CardContainer>
        <CardContainer>
          <AssetImage height="200px" background={BG14} />
          <CardTitle color="#a12640">Artists</CardTitle>
          <CardSummary>
            Just Feeling It: Mapping Live's Musical Evolution{" "}
          </CardSummary>
        </CardContainer>
        <CardContainer>
          <AssetImage height="200px" background={BG13} />
          <CardTitle color="#fdc733">Artists</CardTitle>
          <CardSummary>
            Just Feeling It: Mapping Live's Musical Evolution{" "}
          </CardSummary>
        </CardContainer>
      </GridWrapper>
    </ArticleSectionWrapper>
  );
}
