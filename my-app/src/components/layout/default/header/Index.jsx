import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Cabecalho, AreaMenu, EncerrarSessao } from "./Index.style";

const HeaderPartial = () => {
  return (
    <>
      <Cabecalho>
        <Container fluid={false}>
          <Row>
            <Col md={6}>
              <Image src="https://www.unoeste.br/Content/Imagens/logoUnoesteBranco.png" />
            </Col>
            <Col md={6}>
              <EncerrarSessao>
                <Button variant="outline-light" size="md">
                  Sair
                </Button>{" "}
              </EncerrarSessao>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <AreaMenu md={12}></AreaMenu>
    </>
  );
};

export default HeaderPartial;
