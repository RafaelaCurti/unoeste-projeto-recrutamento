import { React, useState } from "react";
import LayoutDefault from "../../../components/layout/default/Index";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { ContainerTitulo, Formulario } from "./Index.style";

function Pagina404() {

  return (
    <>
      <LayoutDefault>
        <Container>
          <ContainerTitulo>
            <h1>404 Página não Encontrada!</h1>
          </ContainerTitulo>
        </Container>
      </LayoutDefault>
    </>
  );
}

export default Pagina404;
