const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbrecrutamento_unoeste",
  port: 3306,
});

app.post("/vaga/novo", (req, res) => {
  const funcao = req.body.funcao;
  const empresa = req.body.empresa;
  const nivel = req.body.nivel;
  const tipoTrabalho = req.body.tipoTrabalho;
  const dataLancamento = new Date();

  db.query(
    "INSERT INTO vagas(funcao, empresa, nivel, tipoTrabalho, dataLancamento) VALUES (?,?,?,?,?)",
    [funcao, empresa, nivel, tipoTrabalho, dataLancamento],
    (err, result) => {
      if (err) {
        console.log("Erro: " + err);
      } else {
        console.log("POST " + "/vaga/novo" + " | 💚");
        res.send("Vaga registrada com sucesso!");
      }
    }
  );
});

app.get("/vaga/listagem", (req, res) => {
  db.query("SELECT * FROM vagas", (err, result) => {
    if (err) {
      console.log("Erro: " + err);
    } else {
      console.log("GET " + "/vaga/listagem" + " | 💚");
      res.send(result);
    }
  });
});

app.post("/inscricao", (req, res) => {
  const nomeCompleto = req.body.nomeCompleto;
  const nascimento = req.body.nascimento;
  const cpf = req.body.cpf;
  const rg = req.body.rg;
  const orgaoEmissor = req.body.orgaoEmissor;
  const ctpsN = req.body.ctpsN;
  const ctpsSerie = req.body.ctpsSerie;
  const tituloEleitorN = req.body.tituloEleitorN;
  const tituloEleitorZona = req.body.tituloEleitorZona;
  const pis = req.body.pis;
  const habilitacaoN = req.body.habilitacaoN;
  const certidaoMilitarN = req.body.certidaoMilitarN;
  const certidaoMilitarSerie = req.body.certidaoMilitarSerie;
  const certidaoMilitarCategoria = req.body.certidaoMilitarCategoria;
  const endereco = req.body.endereco;
  const numero = req.body.numero;
  const bairro = req.body.bairro;
  const municipio = req.body.municipio;
  const uf = req.body.uf;
  const cep = req.body.cep;
  const naturalidade = req.body.naturalidade;
  const telefone = req.body.telefone;
  const celular = req.body.celular;
  const email = req.body.email;
  const nomePai = req.body.nomePai;
  const nomeMae = req.body.nomeMae;
  const idEstadoCivil = req.body.idEstadoCivil;
  const nomeConjuge = req.body.nomeConjuge;
  const idGrauInstrucao = req.body.idGrauInstrucao;
  const residenciaPropria = req.body.residenciaPropria;
  const possuiFilhos = req.body.possuiFilhos;

  console.log("/inscricao - " + req);

  const idVaga = req.body.idVaga;
  const idCandidato = req.body.idCandidato;
  const dataCadastro = new Date();

  db.query(
    "INSERT INTO candidatos(nomeCompleto,nascimento,cpf,rg,orgaoEmissor,ctpsN,ctpsSerie,tituloEleitorN,tituloEleitorZona,pis,habilitacaoN,certidaoMilitarN,certidaoMilitarSerie,certidaoMilitarCategoria,endereco,numero,bairro,municipio,uf,cep,naturalidade,telefone,celular,email,nomePai,nomeMae,idEstadoCivil,nomeConjuge,idGrauInstrucao,residenciaPropria,possuiFilhos) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      nomeCompleto,
      nascimento,
      cpf,
      rg,
      orgaoEmissor,
      ctpsN,
      ctpsSerie,
      tituloEleitorN,
      tituloEleitorZona,
      pis,
      habilitacaoN,
      certidaoMilitarN,
      certidaoMilitarSerie,
      certidaoMilitarCategoria,
      endereco,
      numero,
      bairro,
      municipio,
      uf,
      cep,
      naturalidade,
      telefone,
      celular,
      email,
      nomePai,
      nomeMae,
      idEstadoCivil,
      nomeConjuge,
      idGrauInstrucao,
      residenciaPropria,
      possuiFilhos,
    ],
    (err, result) => {
      if (err) {
        console.log("Erro: " + err);
      } else {
        console.log("INSERT INTO vagas | 💚");
      }
    }
  );

  // db.query(
  //   "INSERT INTO inscricoes(idVaga, idCandidato, dataCadastro) VALUES (?,?,?)",
  //   [idVaga, idCandidato, dataCadastro],
  //   (err, result) => {
  //     if (err) {
  //       console.log("Erro: " + err);
  //     } else {
  //       console.log("INSERT INTO inscricoes | 💚");
  //     }
  //   }
  // );
});

app.listen(3001, () => {
  console.log("💚 Iniciando conexão com a porta 3001");
});
