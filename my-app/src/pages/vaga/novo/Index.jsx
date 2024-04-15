import { React, useState } from "react";
import Axios from "axios";
import LayoutDefault from "../../../components/layout/default/Index";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { ContainerTitulo, Formulario } from "./Index.style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

function Novo() {
  const [validated, setValidated] = useState(false);
  const [funcao, setFuncao] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [nivel, setNivel] = useState("");
  const [tipoTrabalho, setTipoTrabalho] = useState("");

  const add = () => {
    Axios.post("http://localhost:3001/vaga/novo", {
      funcao: funcao,
      empresa: empresa,
      nivel: nivel,
      tipoTrabalho: tipoTrabalho,
      // dataLancamento: dataLancamento,
    }).then(() => {
      alert("Vaga lançada com sucesso!");
      window.location.reload();
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    add();
  };

  return (
    <>
      <LayoutDefault>
        <Container>
          <ContainerTitulo>
            <Link to={"/"}>
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={faRotateLeft} />
                &nbsp; Retornar
              </Button>{" "}
            </Link>
            <h1>Lançamento de Nova Vaga</h1>
          </ContainerTitulo>
        </Container>
        <Container>
          <Formulario noValidate validated={validated} onSubmit={handleSubmit}>
            {/* <Formulario> */}
            <Row className="mb-3">
              <h4>Função:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Título da vaga:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setFuncao(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Empresa:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setEmpresa(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Nível Experiência:</Form.Label>
                <Form.Select
                  aria-label="-- Qual o nível de experiência? --"
                  onChange={(event) => {
                    setNivel(event.target.value);
                  }}
                >
                  <option>-- Qual o nível de experiência? --</option>
                  <option value="1">Júnior</option>
                  <option value="2">Pleno</option>
                  <option value="3">Sênior</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Forma Trabalho:</Form.Label>
                <Form.Select
                  aria-label="-- Qual o nível de experiência? --"
                  onChange={(event) => {
                    setTipoTrabalho(event.target.value);
                  }}
                >
                  <option>-- Qual será a forma de trabalho? --</option>
                  <option value="1">Presencial</option>
                  <option value="2">Híbrido</option>
                  <option value="3">Remoto</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="btn btn-sm btn-success" type="submit">
              Cadastrar
            </Button>
          </Formulario>
          <br /> <br /> <br /> <br />
        </Container>
      </LayoutDefault>
    </>
  );
}

export default Novo;
