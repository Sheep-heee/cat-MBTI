import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";

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
  text-align: center;
  margin: 10px 0;
  font-size: 20px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, mbti);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImg>
          <img className="rounded-circle" src={resultData.image} />
        </LogoImg>
        <Desc>
          😘예비집사님과 찰떡궁합인 😺고양이는 <br /> {resultData.best}형{" "}
          {resultData.name}
        </Desc>
        <Desc>{resultData.desc}</Desc>
        <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
