import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cabecalho, AreaMenu } from "./Index.style";

const HeaderPartial = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Cabecalho md={12}>
            <span> Universidade do Oeste Paulista Unoeste - Presidente Prudente/SP</span>
          </Cabecalho>
        </Row>
      </Container>
    </>
  );
};

export default HeaderPartial;
