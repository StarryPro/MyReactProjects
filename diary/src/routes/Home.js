import styled from "styled-components";
import { Icon } from "@iconify/react";
import Navigation from "../routes/navigation";
import Profile from "./Profile";

const HomeGroup = styled.div`
  position: relative;
  width: 375px;
  height: 812px;

  background-color: yellow;
`;

const Title = styled.span`
  position: absolute;
  width: 111px;
  height: 45px;
  left: 10px;
  top: 10px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const HomeContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2px;

  position: absolute;
  width: 87px;
  height: 79px;
  left: 143px;
  top: 332px;
`;

const WriteButton = styled.button`
  border-radius: 20px;
  width: 79.5px;
  height: 18.75px;
  background-color: #d9d9d9;

  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;

const Font = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
const Home = function () {
  return (
    <HomeGroup>
      <Title>일기목록</Title>
      <Profile />
      <HomeContents>
        <Icon
          icon="carbon:face-dissatisfied"
          styled={{
            width: "32px",
            height: "32px",
          }}
        />
        <Font>일기가 없어여..</Font>
        <WriteButton>작성하기</WriteButton>
      </HomeContents>
      <Navigation />
    </HomeGroup>
  );
};

export default Home;
