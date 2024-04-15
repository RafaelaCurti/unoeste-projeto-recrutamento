import React from "react";
import { Row, Col } from "react-bootstrap";
import { MenuItem, Icone, ContainerMenu, MenuItemLink } from "./Index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faHouse,
  faGear,
  faUsersViewfinder,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const MenuEmpresa = () => {
  return (
    <>
      <ContainerMenu>
        <Row>
          <Col md={3}>
            <MenuItem md={12}>
              <Icone>
                <FontAwesomeIcon icon={faHouse} />
              </Icone>
              <h3>Meu Perfil</h3>
            </MenuItem>
          </Col>

          <Col md={3}>
            <MenuItem md={12}>
              <Icone>
                <FontAwesomeIcon icon={faUsersViewfinder} />
              </Icone>
              <h3>Candidaturas</h3>
            </MenuItem>
          </Col>

          <Col md={3}>
            <MenuItemLink to={"vaga"}>
              <MenuItem md={12}>
                <Icone>
                  <FontAwesomeIcon icon={faNewspaper} />
                </Icone>
                <h3>Vagas</h3>
              </MenuItem>
            </MenuItemLink>
          </Col>

          <Col md={3}>
            <MenuItemLink to={"config/vaga"}>
              <MenuItem md={12}>
                <Icone>
                  <FontAwesomeIcon icon={faGear} />
                </Icone>
                <h3>Configurações</h3>
              </MenuItem>
            </MenuItemLink>
          </Col>
        </Row>
      </ContainerMenu>
    </>
  );
};

export default MenuEmpresa;
