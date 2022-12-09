import React from "react";
import Formulario from "../componentes/Formulario";
import Rodape from "../componentes/Rodape";
import ListaParticipantes from "../componentes/ListaParticipantes";
import Card from "../componentes/Card";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
