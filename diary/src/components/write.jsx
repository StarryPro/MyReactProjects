import styled from "styled-components";
import Navigation from "../routes/navigation";
import { Icon } from "@iconify/react";
import Feeling from "./feeling";

const WriteGroup = styled.div`
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
const RegisterIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;

  position: absolute;
  width: 55px;
  height: 24px;
  left: 317px;
  top: 21px;
`;

const Weather = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  height: 25px;
  left: 28px;
  top: 54px;
`;

const MonthYear = styled.div`
  position: absolute;
  width: 271px;
  height: 21px;
  left: 97px;
  top: 58px;
`;

const DateFont = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;
`;

const AreaFont = styled.span`
  position: absolute;
  width: 89px;
  height: 10px;
  left: 269px;
  top: 63px;

  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #000000;
`;

const Write = function () {
  return (
    <WriteGroup>
      <Title>일기 작성</Title>
      <RegisterIcon>
        <Icon icon="bx:trash"></Icon>
        <Icon icon="akar-icons:circle-check" styled={{ left: "338px" }}></Icon>
      </RegisterIcon>
      <Weather>
        <Icon icon="fluent:weather-sunny-16-filled"></Icon>
        <Icon icon="dashicons:arrow-down-alt2"></Icon>
      </Weather>
      <MonthYear>
        <DateFont>2022년 07월 10일</DateFont>
        <Icon icon="dashicons:arrow-down-alt2"></Icon>
      </MonthYear>
      <AreaFont>수원시 권선구 금곡동</AreaFont>
      <Feeling />
      <Navigation />
    </WriteGroup>
  );
};

export default Write;
