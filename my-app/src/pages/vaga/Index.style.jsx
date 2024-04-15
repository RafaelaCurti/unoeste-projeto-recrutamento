import styled from "styled-components";
import { Container, Table } from "react-bootstrap";

export const ContainerTitulo = styled(Container)`
  margin-top: -160px;

  Button{
    margin-bottom: 20px;
  }
`;

export const ContainerTable = styled.div`
  background-color: #e7e7e7;
  padding: 5px;
  border-radius: 10px;
`;


export const TableDefault = styled(Table)`
  border-radius: 10px;
  background-color: #e7e7e7;

  td,
  th {
    background-color: #e7e7e7;
  }
`;