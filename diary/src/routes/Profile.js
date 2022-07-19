import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const LogoutButton = styled.span`
  position: absolute;
  left: 335px;
  top: 20px;
`;
const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <LogoutButton onClick={onLogOutClick}>
      <Link to="/profile">
        <Icon
          icon="ant-design:logout-outlined"
          styled={{
            width: "24px",
            height: "24px",
          }}
        />
      </Link>
    </LogoutButton>
  );
};
export default Profile;
