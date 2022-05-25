import React from "react";
import styled from "styled-components";

// Components
import { InforPerfil, ListRepoUser } from "../components";

function Users() {
  return (
    <Container>
      <Content>
        <InforPerfil
          photo="assets/Perfil.png"
          name="Rick Bone Junior"
          link="@rickbonejr"
          seguidores="109"
          seguidor="56"
          favoritos="8"
          sobre="Desenvolvedor Javascript - React, React Native, Vue, TypeScript, GraphQL, Redux, NodeJS"
          empresa="GO.K Digital"
          endereco="São Paulo, Brazil"
          site="rickbonejr.com.br"
          destaque="Developer Program Member"
        ></InforPerfil>
        <section className="BoxScrollList">
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
          ></ListRepoUser>
          <div className="BottomMargin"></div>
        </section>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  color: #fff;
  background: #ededed;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #b3b3b3;
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: row;
  overflow: hidden;
  width: calc(100% - 20%);
  height: 100%;
  .BoxScrollList {
    height: 100%;
    padding-top: 20px;
    overflow-y: scroll;
    display: flex;
    flex: 1;
    flex-direction: column;
    .BottomMargin {
      width: 100%;
      margin-bottom: 30px;
      display: block;
    }
  }
`;
export default Users;
