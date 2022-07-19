import styled from "styled-components";
import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const NavButton = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;

  position: absolute;
  width: 228px;
  height: 24px;
  left: 73px;
  top: 678px;
`;

const Navigation = function () {
  return (
    <NavButton>
      <Link to="/">
        <Icon
          icon="akar-icons:home"
          styled={{
            width: "24px",
            height: "24px",
          }}
        />
      </Link>

      <Link to="/calender">
        <Icon
          icon="uil:calender"
          styled={{
            width: "24px",
            height: "24px",
          }}
        />
      </Link>

      <Link to="/write">
        <Icon
          icon="clarity:pencil-line"
          styled={{
            width: "24px",
            height: "24px",
          }}
        />
      </Link>

      <Link to="/feeling">
        <Icon
          icon="carbon:face-add"
          styled={{
            width: "24px",
            height: "24px",
          }}
        />
      </Link>
    </NavButton>
  );
};

export default Navigation;
