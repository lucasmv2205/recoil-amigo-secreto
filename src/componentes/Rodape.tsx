import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useSorteador } from "../state/hook/useSorteador";

import "./Rodape.css";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navigate = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navigate("/sorteio");
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Rodape;
