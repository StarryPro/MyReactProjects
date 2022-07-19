import styled from "styled-components";
import Navigation from "./navigation";
import { Icon } from "@iconify/react";

const CalenderGroup = styled.div`
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

const CalenderContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 419px;
  height: 358px;
  top: 45px;
  left: -22px;
`;
const MonthYearLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 100px;

  width: 419px;
  height: 56px;
`;

const MonthYear = styled.span`
  width: 82px;
  height: 24px;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;

  opacity: 0.2;
`;

const Line = styled.div`
  width: 355px;
  height: 0px;

  border: 1px solid #bdbdbd;
`;

const Calender = function () {
  return (
    <CalenderGroup>
      <Title>달력 일기</Title>
      <CalenderContents>
        <MonthYearLine>
          <Icon
            icon="akar-icons:chevron-left"
            style={{ width: "24px", height: "24px" }}
          />
          <MonthYear>7월 2022</MonthYear>
          <Icon
            icon="akar-icons:chevron-right"
            style={{ width: "24px", height: "24px" }}
          />
        </MonthYearLine>
        <Line />
      </CalenderContents>
      <Navigation />
    </CalenderGroup>
  );
};

export default Calender;
