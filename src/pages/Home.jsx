import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 130px;
  transform: translateY(-50%);
  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Header = styled.div`
  font-size: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 300px;
    height: 300px;
    border: 4px solid #eee;
    object-fit: cover;
    @media screen and (max-width: 780px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  text-align: center;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 😺고양이 찾기!</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
