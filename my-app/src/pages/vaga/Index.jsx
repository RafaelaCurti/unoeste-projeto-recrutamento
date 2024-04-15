import React, { useState } from "react";
import axios, * as others from "axios";
import LayoutDefault from "../../components/layout/default/Index";
import MenuEmpresa from "../../components/menu/empresa/Index";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { ContainerTitulo, ContainerTable, TableDefault } from "./Index.style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Vagas = () => {
  const [listagemVagas, setlistagemVagas] = useState([]);

  const vagasGetAll = () => {
    axios.get("http://localhost:3001/vaga/listagem").then((response) => {
      setlistagemVagas(response.data);
    });
  };
  vagasGetAll();
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
            <h1>Lista de Vagas</h1>
          </ContainerTitulo>
          <ContainerTable>
            <Row>
              <Col md={12}>
                <TableDefault responsive="sm">
                  <thead>
                    <tr>
                      <th>Data Lançamento</th>
                      <th>Empresa</th>
                      <th>Vaga</th>
                      <th>Nível</th>
                      <th>Tipo</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listagemVagas.map((val, key) => {
                      return (
                        <tr key={val.id}>
                          <td>{val.funcao}</td>
                          <td>{val.empresa}</td>
                          <td>{val.nivel}</td>
                          <td>{val.tipoTrabalho}</td>
                          <td>
                            {moment(val.dataLancamento).format(
                              "DD/MM/yyyy HH:mm:ss"
                            )}
                          </td>
                          <td>
                            <Link to={"/inscricao/"}>
                              <Button variant="success">Candidatar-se</Button>{" "}
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </TableDefault>
              </Col>
            </Row>
          </ContainerTable>
        </Container>
      </LayoutDefault>
    </>
  );
};

export default Vagas;
