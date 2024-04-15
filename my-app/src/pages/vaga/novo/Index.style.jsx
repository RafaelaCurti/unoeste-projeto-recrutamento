import styled from "styled-components";
import { Container, Table, Form } from "react-bootstrap";


export const Formulario = styled(Form)`
  margin-top: 80px;
  padding:15px;
`;

export const ContainerTitulo = styled(Container)`
  margin-top: -160px;

  Button {
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