import styled from "styled-components";
import { Icon } from "@iconify/react";

const FeelingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 11px;

  position: absolute;
  width: 317px;
  height: 645px;
  left: 28px;
  top: 88px;
`;

const FeelingChoice = styled.div`
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  box-sizing: border-box;
  border-radius: 20px;

  width: 317px;
  height: 191px;
`;
const BigTitleFont = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;
const SmallTitleFont = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;
const FeelingFaceGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  gap: 5px;
`;
const FeelingFace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
`;
const FeelingFaceTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 23px;
`;
const FeelingFaceTitleFont = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`;

const Feeling = function () {
  return (
    <FeelingGroup>
      <FeelingChoice>
        <BigTitleFont>기분 선택</BigTitleFont>
        <SmallTitleFont>오늘의 기분을 선택해주세요.</SmallTitleFont>
        <FeelingFaceGroup>
          <FeelingFace>
            <Icon icon="fa6-regular:face-angry" />
            <Icon icon="fa6-regular:face-grin-wink" />
            <Icon icon="fa6-regular:face-sad-tear" />
            <Icon icon="fa6-regular:face-dizzy" />
            <Icon icon="fa6-regular:face-laugh" />
          </FeelingFace>
          <FeelingFaceTitle>
            <FeelingFaceTitleFont>화남</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>쿨</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>슬픔</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>아픔</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>웃음</FeelingFaceTitleFont>
          </FeelingFaceTitle>
          <FeelingFace>
            <Icon icon="fa6-regular:face-meh" />
            <Icon icon="fa6-regular:face-frown" />
            <Icon icon="fa6-regular:face-laugh-beam" />
            <Icon icon="fa6-regular:face-grimace" />
            <Icon icon="fa6-regular:face-kiss-wink-heart" />
          </FeelingFace>
          <FeelingFaceTitle>
            <FeelingFaceTitleFont>화남</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>쿨</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>슬픔</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>아픔</FeelingFaceTitleFont>
            <FeelingFaceTitleFont>웃음</FeelingFaceTitleFont>
          </FeelingFaceTitle>
        </FeelingFaceGroup>
      </FeelingChoice>
    </FeelingGroup>
  );
};

export default Feeling;
