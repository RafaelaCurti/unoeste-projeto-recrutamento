import { React, useState } from "react";
import Axios from "axios";
import LayoutDefault from "../../../components/layout/default/Index";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { ContainerTitulo, Formulario } from "./Index.style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import axios, * as others from "axios";

function FormularioInscricao() {
  const [validated, setValidated] = useState(false);

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [orgaoEmissor, setOrgaoEmissor] = useState("");
  const [ctpsN, setCtpsN] = useState("");
  const [ctpsSerie, setCtpsSerie] = useState("");
  const [tituloEleitorN, setTituloEleitorN] = useState("");
  const [tituloEleitorZona, setTituloEleitorZona] = useState("");
  const [pis, setPis] = useState("");
  const [habilitacaoN, setHabilitacaoN] = useState("");
  const [certidaoMilitarN, setCertidaoMilitarN] = useState("");
  const [certidaoMilitarSerie, setCertidaoMilitarSerie] = useState("");
  const [certidaoMilitarCategoria, setCertidaoMilitarCategoria] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [idEstadoCivil, setIdEstadoCivil] = useState(0);
  const [nomeConjuge, setNomeConjuge] = useState("");
  const [idGrauInstrucao, setIdGrauInstrucao] = useState(0);
  const [residenciaPropria, setResidenciaPropria] = useState(0);
  const [possuiFilhos, setPossuiFilhos] = useState(0);

  const [idVaga, setIdVaga] = useState(0);
  const [listagemVagas, setlistagemVagas] = useState([]);

  const vagasGetAll = () => {
    axios.get("http://localhost:3001/vaga/listagem").then((response) => {
      setlistagemVagas(response.data);
    });
  };

  const add = () => {
    Axios.post("http://localhost:3001/inscricao", {
      nomeCompleto: nomeCompleto,
      nascimento: nascimento,
      cpf: cpf,
      rg: rg,
      orgaoEmissor: orgaoEmissor,
      ctpsN: ctpsN,
      ctpsSerie: ctpsSerie,
      tituloEleitorN: tituloEleitorN,
      tituloEleitorZona: tituloEleitorZona,
      pis: pis,
      habilitacaoN: habilitacaoN,
      certidaoMilitarN: certidaoMilitarN,
      certidaoMilitarSerie: certidaoMilitarSerie,
      certidaoMilitarCategoria: certidaoMilitarCategoria,
      endereco: endereco,
      numero: numero,
      bairro: bairro,
      municipio: municipio,
      uf: uf,
      cep: cep,
      naturalidade: naturalidade,
      telefone: telefone,
      celular: celular,
      email: email,
      nomePai: nomePai,
      nomeMae: nomeMae,
      idEstadoCivil: idEstadoCivil,
      nomeConjuge: nomeConjuge,
      idGrauInstrucao: idGrauInstrucao,
      residenciaPropria: residenciaPropria,
      possuiFilhos: possuiFilhos,
    }).then(() => {
      alert("Incricao Realizada com Sucesso!");
      // window.location.href = "/";
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
  // vagasGetAll();
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
            <h1>Formulário de Inscrição</h1>
          </ContainerTitulo>
        </Container>
        <Container>
          <Formulario noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-5">
              <h4>Vaga:</h4>
              <Form.Select
                aria-label="Função Pretendida"
                onClick={vagasGetAll()}
                onChange={(event) => {
                  setIdVaga(event.target.value);
                }}
              >
                <option>-- Escolha uma função para se candidatar-se --</option>
                {listagemVagas.map((val, key) => {
                  return (
                    <option value="{val.id}">
                      {val.funcao + " - " + val.empresa}
                    </option>
                  );
                })}
              </Form.Select>
            </Row>
            <Row className="mb-3">
              <h4>Dados Pessoais:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNomeCompleto(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Data Nascimento</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNascimento(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Ctps nº</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCtpsN(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Série</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCtpsSerie(event.target.value);
                  }}
                />
              </Form.Group>{" "}
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Naturalidade</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNaturalidade(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="validationCustom02">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCpf(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustom02">
                <Form.Label>RG</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setRg(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Label>Orgão Emissor</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setOrgaoEmissor(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />

            <Row className="mb-3">
              <h4>Localização:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setEndereco(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="1" controlId="validationCustom02">
                <Form.Label>Nº</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNumero(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setBairro(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Município</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setMunicipio(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="1" controlId="validationCustom02">
                <Form.Label>UF</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setUf(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Label>CEP</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCep(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <h4>Parentes:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Nome da Mãe</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNomeMae(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Nome do Pai</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNomePai(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <h4>Contato:</h4>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setTelefone(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCelular(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <h4>Grau de Instrução:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Select
                  aria-label="-- Escolha o grau de Escolaridade --"
                  onChange={(event) => {
                    setIdGrauInstrucao(event.target.value);
                  }}
                >
                  <option>-- Qual o nível de experiência? --</option>
                  <option value="1">Ensino Fundamental - Completo</option>
                  <option value="2">Ensino Fundamental - Incompleto</option>
                  <option value="3">Ensino Médio - Completo</option>
                  <option value="4">Ensino Médio - Incompleto</option>
                  <option value="5">Superior - Completo</option>
                  <option value="6">Superior - Incompleto</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <h4>Outras Informações:</h4>
              <Form.Group as={Col} md="10" controlId="validationCustom02">
                <Form.Label>Título de Eleitor Nº</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setTituloEleitorN(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Label>Zona</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setTituloEleitorZona(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Nº Pis</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setPis(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Cart. de Habilitação Nº</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setHabilitacaoN(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Certidão Militar Nº</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCertidaoMilitarN(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Label>Série</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCertidaoMilitarSerie(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setCertidaoMilitarCategoria(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <h4>Estado Civíl:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Select
                  aria-label="-- Escolha o grau de Escolaridade --"
                  onChange={(event) => {
                    setIdEstadoCivil(event.target.value);
                  }}
                >
                  <option>-- Qual o estado civíl? --</option>
                  <option value="1">Casado</option>
                  <option value="2">Solteiro</option>
                  <option value="3">Divorsiado</option>
                  <option value="4">Separado</option>
                  <option value="5">Amigado</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Nome do Cônjuge</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(event) => {
                    setNomeConjuge(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              <h4>Residência:</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Select
                  aria-label="-- Escolha o grau de Escolaridade --"
                  onChange={(event) => {
                    setResidenciaPropria(event.target.value);
                  }}
                >
                  <option>-- Qual o tipo da sua residência? --</option>
                  <option value="1">Própria</option>
                  <option value="2">Alugada</option>
                </Form.Select>
              </Form.Group>
              <br />
              <br />
              <br />
              <h4>Possui Filhos?</h4>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Select
                  required
                  aria-label="-- Escolha o grau de Escolaridade --"
                  onChange={(event) => {
                    setPossuiFilhos(event.target.value);
                  }}
                >
                  <option>-- Escolha uma resposta --</option>
                  <option value="1">Sim</option>
                  <option value="2">Não</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button type="submit">Candidatar-se</Button>
          </Formulario>
          <br /> <br /> <br /> <br />
        </Container>
      </LayoutDefault>
    </>
  );
}

export default FormularioInscricao;
