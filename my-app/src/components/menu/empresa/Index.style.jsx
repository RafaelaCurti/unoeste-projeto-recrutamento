import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MenuItem = styled.div`
  background: #d9d9d9;
  color: #000;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
`;

export const Icone = styled(MenuItem)`
  font-size: 4em;
`;

export const ContainerMenu = styled(Container)`
  margin-top: -100px;
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;

  :hover {
    color: #504f4f;
  }
`;